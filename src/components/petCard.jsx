import React from "react";

function PetCard({ name, petType, breed, age, description, imagePath }) {
  return (
    <div
      className="flex flex-col bg-red p-4 w-[400px] bg-gray-200 break-inside-avoid-column mb-5 rounded-xl
    transition-all duration-300 hover:opacity-70 cursor-pointer"
    >
      <div>
        <img src={imagePath} className="w-full"></img>
      </div>
      <div className="flex justify-between">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-lg font-bold">{petType}</p>
      </div>
      <p className="font-bold">{breed}</p>
      <div>
        <span className="font-bold">{age}</span>
        <span> years old</span>
      </div>
      <div>
        <p className="">{description}</p>
      </div>
    </div>
  );
}

export default PetCard;
