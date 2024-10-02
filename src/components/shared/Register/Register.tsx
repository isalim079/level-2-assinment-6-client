"use client";
import bg from "@/assets/Img/loginBg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaFileUpload } from "react-icons/fa";

const Register = () => {



  return (
    <div className="font-poppins overflow-hidden">
      <div className="relative -z-50">
        {/* <Image
          className="h-screen object-cover"
          src={bg}
          alt="Register background"
        /> */}
        <div className="absolute inset-0">
          <div className="flex justify-center items-center h-screen">
            {/* form container */}
            <form className="flex flex-col  bg-dark-green/70 max-w-[480px] w-full p-6 lg:p-14 rounded-md">
              <motion.h1
                className="text-center text-3xl font-bold text-primary-orange"
                initial={{ y: -750 }}
                animate={{
                  y: 0,
                }}
              >
                Register
              </motion.h1>

              {/* Input container */}
              <div className="space-y-4 mt-10 ">

                {/* prettier-ignore */}
                <motion.input
                  type=""  placeholder="Name *" className="p-3 rounded-md w-full bg-primary-white/20 text-primary-white placeholder-primary-white" 
                  initial={{ x: -1750 }}
                  animate={{ x: 0, }}
                  transition={{ duration: 1, delay: 0.3, type: "spring", }}
                />
                <motion.input
                  type="email"  placeholder="Email *" className="p-3 rounded-md w-full bg-primary-white/20 text-primary-white placeholder-primary-white" 
                  initial={{ x: -1750 }}
                  animate={{ x: 0, }}
                  transition={{ duration: 1, delay: 0.3, type: "spring", }}
                  
                />
                <motion.div
                  initial={{ x: -1750 }}
                  animate={{ x: 0, }}
                  transition={{ duration: 1, delay: 0.3, type: "spring", }}
                  className=" relative rounded-md bg-primary-white/20"
                >
                <input
                  type="file"  placeholder="Picture *" className="p-3 rounded-md w-full opacity-0 relative z-20 cursor-pointer"  
                />
                    <div className="text-primary-white flex items-center gap-5 absolute inset-0 left-3">
                    <FaFileUpload className="text-3xl " />
                    <p>Upload profile picture</p>
                    </div>
                </motion.div>

                <motion.input
                  initial={{ x: 1750 }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                  }}
                  type="password"
                  placeholder="Password *"
                  className="p-3 rounded-md w-full bg-primary-white/20 text-primary-white placeholder-primary-white"
                />
              </div>

              <motion.button
                type="submit"
                className="text-dark-green py-3 mt-4 bg-primary-white rounded-md"
                initial={{ y: 1750 }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                  type: "spring",
                }}
              >
                Register
              </motion.button>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.12, type: "spring" }}
              >
                <p className="text-center text-primary-white text-sm">
                  Already have an account?{" "}
                  <Link href={"/login"}>
                    <span className="text-base underline">Login</span>
                  </Link>
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
