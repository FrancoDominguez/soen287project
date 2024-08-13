import React from "react";
import TextContentCard from "../components/textContentCard";
import data from "../../public/homepageContent.json";

function HomePage() {
  return (
    <div className="h-full flex justify-center flex-col py-10">
      <div className="flex justify-center">
        <div className="flex flex-row justify-center items-center mobile:w-5/6 tablet:w-2/3 desktop:w-1/2">
          <h3 className="text-white ml-2 font-bold mobile:text-3xl tablet:text-5xl desktop:text-7xl">
            PetYourPet
          </h3>
          <img src="/logo.png" className="mobile:h-20 desktop:h-full"></img>
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

export default HomePage;
