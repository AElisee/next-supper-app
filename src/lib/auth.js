//--- LA CONFIG INITIALE
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import credentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./dbConnexion.js";
import { User } from "./models.js";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ email: credentials.email });

    if (!user) {
      throw new Error("Mauvais indentifiants");
    }

    const isPwdCoorect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPwdCoorect) {
      throw new Error("Mauvais indentifiants");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to login");
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // pour se connecter
    credentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
    // ---
  ],
  // ---
  callbacks: {
    async signIn({ user, account, profile }) {
      //   console.log(user, account, profile);

      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
