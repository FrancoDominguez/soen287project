import React from "react";
import TextContentCard from "../components/textContentCard";
import data from "../../public/petCareContent.json";

function PetCarePage() {
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="relative mb-10 w-full bg">
        <img src="../../public/petcare.png" className=""></img>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
          <p className="text-9xl text-slate-400 font-bold">Pet Care!</p>
        </div>
      </div>
      {data.items.map((item, index) => (
        <TextContentCard key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default PetCarePage;
