import React from "react";
import TextContentCard from "../components/textContentCard";
import data from "../../public/homepageContent.json";

function HomePage() {
  return (
    <div className="h-full flex justify-center flex-col py-10">
      <div className="flex justify-center">
        <div className="flex flex-row items-center">
          <h className="text-white ml-2 font-bold text-7xl">PetYourPet</h>
          <img src="../../public/logo.png"></img>
        </div>
      </div>
      {data.items.map((item, index) => (
        <TextContentCard key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default HomePage;
