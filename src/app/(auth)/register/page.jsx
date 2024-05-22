import RegisterForm from "@/components/RegisterForm.jsx";
import { register } from "@/lib/action.js";
import React from "react";

const page = () => {
  return (
    <div className="px-10 flex items-center justify-center">
     <RegisterForm/>
    </div>
  );
};

export default page;
