/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFileUpload } from "react-icons/fa";

const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const editor = useRef(null);

  const [content, setContent] = useState("");

  const imageName = watch("image");

  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_BB_API_KEY}`;

  const onSubmit = async (data: any) => {
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(image_hosting_api, formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-primary-white p-14 shadow-md">
      <div className="max-w-[920px] mx-auto ">

        {/* title container */}
        <div className="mb-10">
            <h1 className="text-4xl font-bold text-center uppercase text-dark-green">Create your recipe</h1>
            <p className="text-center text-lg font-semibold">Let the world know your talent</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* field 1 */}
          <div className="mb-4">
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              placeholder="Title"
            />
          </div>

          {/* field 2 */}
          <div>
            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => setContent(newContent)}
            />
          </div>

          {/* field 3 */}
          <div className=" relative  border rounded-md p-2 w-full mt-4 bg-white">
            <input
              type="file"
              placeholder="Image *"
              className="p-3 rounded-md w-full opacity-0 relative z-20 cursor-pointer"
              {...register("image")}
            />
            <div className=" flex items-center gap-5 absolute inset-0 left-3 text-black">
              <FaFileUpload className="text-3xl " />
              <p>{imageName ? imageName[0]?.name : "Upload recipe image"}</p>
            </div>
          </div>

          {/* submit button */}
          <div>
            <button className="bg-dark-green py-3 w-full mt-4 text-white font-semibold rounded-md shadow-md">Submit Recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
