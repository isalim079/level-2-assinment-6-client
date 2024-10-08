/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import bg from "@/assets/Img/loginBg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/actions/loginUser";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await loginUser(data);

      dispatch(setUser({ user : { userInfo: res.data }, token: res.token }));
      if (res.token) {
        toast.success(res.message);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

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
            <div className="bg-dark-green/70 max-w-[480px] w-full p-6 lg:p-14 rounded-md">
              {/* form container */}
              <form
                className="flex flex-col  "
                onSubmit={handleSubmit(onSubmit)}
              >
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
                    {...register("email", { required: true })}
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
                    {...register("password", { required: true })}
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
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.12, type: "spring" }}
                >
                  <p className="text-center text-primary-white text-sm">
                    Don't have an account?{" "}
                    <Link href={"/register"}>
                      <span className="text-base underline">Register</span>
                    </Link>
                  </p>
                </motion.div>
              </form>

              {/* Social Icon */}
              <div>
                <div className="flex flex-row justify-center items-center mt-5 gap-10">
                  <button
                    className="bg-primary-white p-2 rounded-full"
                    onClick={() =>
                      signIn("google", {
                        callbackUrl: "/",
                      })
                    }
                  >
                    <FaGoogle className="text-2xl" />
                  </button>
                  <button
                    className="bg-primary-white p-2 rounded-full"
                    onClick={() =>
                      signIn("github", {
                        callbackUrl: "/",
                      })
                    }
                  >
                    <FaGithub className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
