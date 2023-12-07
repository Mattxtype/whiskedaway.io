import Image from "next/image";

const AboutMeBanner = () => {
  return (
    <div className="w-full bg-kitchen-background bg-center bg-cover rounded-3xl">
      <div className="flex flex-col items-center text-white gap-10">
        <h1 className="text-3xl mt-10 antialiased">Meet the chef</h1>
        <p>Learn about my inspirations, what I like to cook, and what this website means to me</p>
        <button className="mb-20"> read more</button>
      </div>
    </div>
  );
};

export default AboutMeBanner;
