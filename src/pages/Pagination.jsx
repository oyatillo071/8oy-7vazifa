import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

function Pagination() {
  const [page, setPage] = useState(1);

  function paginate({ queryKey }) {
    const pageNum = queryKey[1];
    return axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
    );
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts", page],
    queryFn: paginate,
  });

  return (
    <div className="p-5 container ">
      {isLoading && <h2>Loading....</h2>}
      {isError && <h2>Error to fetch data</h2>}
      <div className="grid grid-cols-2 gap-4">
        {data?.data.length > 0 &&
          data.data.map((value) => {
            return (
              <div
                className="border-2 shadow-lg rounded-lg  p-5 "
                key={value.id}
              >
                <h3>{value.id}</h3>
                <h3 className="text-center mt-2">{value.title}</h3>
              </div>
            );
          })}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="p-2 border-2 rounded-md   "
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page == 1}
        >
          Prev Page
        </button>
        <span className="p-2 text-3xl">{page}</span>
        <button
          className="p-2 border-2 rounded-md "
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Pagination;
