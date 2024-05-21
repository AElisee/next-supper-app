import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("using existing conection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;

    //----- chatGpt
    console.log("MongoDB connected:", connection.isConnected);

    // Add connection event listeners
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to DB");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Mongoose connection error: ${err.message}`);
    });
      //--- gtp
      
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
