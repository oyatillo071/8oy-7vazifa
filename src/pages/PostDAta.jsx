import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function PostDAta() {
  function postInfoData() {
    return axios.post("https://jsonplaceholder.typicode.com/users");
  }

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: postInfoData,
  });

  if (isError) {
    return <h3>Error {isError}</h3>;
  }
  if (isSuccess) {
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
    <div>
      <h1
        className="p-2 cursor-pointer bg-blue-500 font-bold rounded-md w-20 text-center text-white"
        onClick={postFunc}
      >
        Post
      </h1>
    </div>
  );
}

export default PostDAta;
