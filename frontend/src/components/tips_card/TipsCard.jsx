import React from "react";
import { fetchRandomTip } from "../../api/tipApi";
import { useQuery } from "@tanstack/react-query";

const TipsCard = () => {
  const {data, isError, error} = useQuery({
    queryKey: ["daily-tip"],
    queryFn: fetchRandomTip,
  });

  let title = "";
  let description = "";

  if (isError) {
    console.log(error);
    title="error getting title";
  }

  if (data) {
    console.log(data);
    title = data.title;
    description = data.description;
  }

  return (
    <>
      <div className="flex flex-col max-w-lg my-6 mr-4">
        <h1 className="flex justify-center text-2xl font-semibold tracking-wide antialiased">
          Tip of the day
        </h1>
        <div className="flex flex-col border-black/60 border-2 rounded-2xl h-full w-full text-center mt-1 antialiased">
          <h2 className="m-5 text-xl text-black/50 font-medium">
            {title}
          </h2>
          <p className="mt-10 mx-10 text-left font-bold">
            {description}
          </p>
          <div className="flex grow justify-center">
            <button className="self-end mb-10"> Read More </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipsCard;
