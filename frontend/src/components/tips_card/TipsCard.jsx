import React from "react";

const TipsCard = () => {
  return (
    <>
      <div className="flex flex-col max-w-lg basis-96 my-6 mr-4">
        <h1 className="flex justify-center text-2xl font-semibold tracking-wide antialiased">
          Tip of the day
        </h1>
        <div className="flex flex-col border-black/60 border-2 rounded-2xl h-full w-full text-center mt-1 antialiased">
          <h2 className="m-5 text-xl text-black/50 font-medium">
            How and When to salt
          </h2>
          <p className="mt-10 mx-10 text-left font-bold">
            Throghout my cooking history there has been no greater and easier
            growth then learning how to salt my food. However, it takes
            knowldege and practice to know when an ingredient is properly salted
            and just as importantly, when to salt...
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
