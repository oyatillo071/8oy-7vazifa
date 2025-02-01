import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Home() {
  function getUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Xato {error.message}</p>;
  }
  console.log(data);

  return (
    <div className="flex flex-col gap-2">
      {data.data.length > 0 &&
        data.data.map(function (value, index) {
          return (
            <div className="px-2 py1 border border-primary rounded-md">
              <h3>{value.id}</h3>
              <h3>
                {value.name}- {value.username}
              </h3>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
