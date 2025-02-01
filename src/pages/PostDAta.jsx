import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast, Toaster } from "sonner";

function PostDAta() {
  function postInfoData() {
    return axios.post("https://jsonplaceholder.typicode.com/users");
  }

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: postInfoData,
  });

  if (isError) {
    toast.error("Post qilishda xatolik yuz berdi");
    return <h3>Error {isError}</h3>;
  }
  if (isSuccess) {
    toast.success(" Mufaqiyatli post qilindi");
    return <h3>Post qiloindi</h3>;
  }

  function postFunc() {
    let user = {
      name: "Palonchi ",
      email: "palonchi@gmail.com",
    };
    mutate(user);
  }

  return (
    <div className="flex items-center justify-center ">
      <Toaster position="bottom-center" />
      <button
        className="p-4 mt-20 cursor-pointer bg-black font-bold whitespace-nowrap rounded-md   text-white"
        onClick={postFunc}
      >
        Post yuborish
      </button>
    </div>
  );
}

export default PostDAta;
