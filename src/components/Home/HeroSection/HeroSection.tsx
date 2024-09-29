"use client";
import img from "@/assets/Img/heroImg.png";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="font-poppins bg-primary-white pt-40 md:pt-36">
      <Container>
        <div className="md:flex items-center justify-between px-4 md:px-0">
          <div className="flex-1 flex flex-col justify-start">
            <h1 className="text-2xl md:text-5xl font-bold text-dark-green text-center md:text-start">
              Welcome to the Recipe Sharing Community
            </h1>
            <p className="text-lg md:max-w-[75%] mt-3 md:mt-7 text-dark-green text-justify md:text-start">
              Discover, Share, and Organize Your Favorite Recipes with Cooks
              from Around the World.
            </p>
            <div className=" mt-6 md:mt-14 flex justify-center md:justify-start mb-10 md:mb-0">
              <button className="bg-dark-green text-primary-white px-4 py-3 rounded-md flex items-center gap-3">
                Recipe Feed{" "}
                <BsArrowRightCircle className="text-primary-white text-xl" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <Image width={520} src={img} alt="Banner Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
