import React, { useState, useEffect } from "react";
import PetCard from "../components/petCard";
import data from "../../public/pets.json";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function BrowsePetsPage() {
  const [shuffledPets, setShuffledPets] = useState([]);

  useEffect(() => {
    setShuffledPets(shuffleArray([...data.items]));
  }, []);

  return (
    <div className="flex justify-center py-10">
      <div className="mobile:columns-1 tablet:columns-2 desktop:columns-3 gap-5 px-3">
        {shuffledPets.map((item) => (
          <PetCard
            key={item.name}
            name={item.name}
            petType={item.petType}
            breed={item.breed}
            age={item.age}
            description={item.description}
            imagePath={item.imagePath}
          />
        ))}
      </div>
    </div>
  );
}

export default BrowsePetsPage;
