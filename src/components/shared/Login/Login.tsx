"use client";
import bg from "@/assets/Img/loginBg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Login = () => {
  return (
    <div className="font-poppins overflow-hidden">
      <div className="relative">
        <Image
          className="h-screen object-cover"
          src={bg}
          alt="login background"
        />
        <div className="absolute inset-0">
          <div className="flex justify-center items-center h-screen">
            {/* form container */}
            <form className="flex flex-col  bg-dark-green/70 max-w-[480px] w-full p-14 rounded-md">
              <motion.h1
                className="text-center text-3xl font-bold text-primary-orange"
                initial={{ y: -750 }}
                animate={{
                  y: 0,
                }}
              >
                Login
              </motion.h1>

              {/* Input container */}
              <div className="space-y-4 mt-10 ">
                <motion.input
                  type="email"
                  placeholder="Email *"
                  className="p-3 rounded-md w-full"
                  initial={{ x: -1750 }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    type: "spring",
                  }}
                />
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
                  className="p-3 rounded-md w-full"
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
                Login
              </motion.button>
              <motion.div className="mt-4"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 0.12, type: "spring"}}
              >
                <p className="text-center text-primary-white text-sm">
                  Don't have an account?{" "}
                  <Link href={"/register"}>
                    <span className="text-base underline">Register</span>
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

export default Login;
