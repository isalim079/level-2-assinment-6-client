/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useGetAllRecipeQuery } from "@/redux/features/recipe/recipe.api";
import Loading from "../shared/Loading/Loading";
import Image from "next/image";
import { TRecipe } from "./RecipeInterface";
import { BiDislike, BiLike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";

const RecipeFeed = () => {
  const { data: allRecipes, isLoading } = useGetAllRecipeQuery(undefined);
  console.log(allRecipes?.data);

  return (
    <div className="pt-28">
      <div className="max-w-screen-xl mx-auto font-poppins">
        {/* Title section */}
        <div>
          <h1 className="text-center text-4xl font-bold uppercase text-dark-green">
            Welcome to your recipe feed
          </h1>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-20">
              {allRecipes?.data?.map((item: TRecipe, index: number) => (
                <div key={index} className="mb-20 ">
                  <div>
                    {/* title section */}
                    <div className="flex items-center justify-between">
                      <div>
                        <Image
                          className="rounded-full"
                          width={60}
                          height={60}
                          src={item.profileImg}
                          alt="profile picture"
                        />
                        <p className="mt-2 font-semibold text-xl">
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <h3 className=" text-dark-green text-lg">
                          <span className="font-bold mr-3">Recipe Name:</span>{" "}
                          {item?.title}
                        </h3>
                      </div>
                    </div>
                    {/* divider */}
                    <div className="border my-5"></div>

                    {/* recipe formula */}
                    <div className="prose">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.recipe }}
                      ></div>
                    </div>

                    {/* Micro elements */}
                    <div>
                      <div className="text-2xl gap-10 flex justify-end">

                        {/* Up vote */}
                        <div >
                          <button className="border border-dark-green p-2 rounded-full">
                            <BiLike />
                          </button>
                          <p className="text-base text-center mt-1 font-semibold">{item.upvote}</p>
                        </div>

                        {/* Down vote */}
                        <div>
                          <button className="border border-dark-green p-2 rounded-full">
                            <BiDislike />
                          </button>
                          <p className="text-base text-center mt-1 font-semibold">{item.downvote}</p>
                        </div>

                        {/* Comments */}
                        <div>
                          <button className="border border-dark-green p-2 rounded-full">
                            <LiaCommentSolid />
                          </button>
                          <p className="text-base text-center mt-1 font-semibold">{item?.comments?.length}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeFeed;
