import React from "react";
import TextContentCard from "../components/textContentCard";
import data from "../../public/petCareContent.json";

function PetCarePage() {
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="relative mb-10 w-full">
        <img src="/petcare.png" className=""></img>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
          <p className=" text-emerald-500 font-bold mobile:text-6xl tablet:text-3xl desktop:text-9xl">
            Pet Care!
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col mobile:w-5/6 tablet:w-2/3 desktop:w-1/2">
          {data.items.map((item, index) => (
            <TextContentCard key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetCarePage;
