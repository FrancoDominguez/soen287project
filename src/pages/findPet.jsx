import React from "react";

function FindPetPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center pt-10">
        <form className="flex flex-col w-[500px] space-y-5 p-5 border-2 border-gray-200 rounded-xl bg-slate-800 text-white text-lg">
          <label className="text-center text-2xl font-bold">
            Find Your Pet
          </label>
          <div className="flex justify-around">
            <label>
              <input name="animal" type="radio"></input>
              Dog
            </label>
            <label className="">
              <input name="animal" type="radio"></input>
              Cat
            </label>
          </div>
          <label className="flex flex-col">
            Breed
            <input
              id="breed"
              type="text"
              className="text-black h-[30px]"
            ></input>
          </label>
          <label className="flex flex-col">
            Preferred Age
            <input
              id="preferred-age"
              type="text"
              className="text-black h-[30px]"
            ></input>
          </label>
          <label className="flex flex-col">
            Preferred Gender
            <input
              id="preferred-gender"
              type="text"
              className="text-black h-[30px]"
            ></input>
          </label>
          <div className="flex justify-left">
            <div className="text-left mr-5"> Does he need to be social?</div>
            <input id="sociability" type="checkbox"></input>
          </div>
          <div className="flex justify-around text-black">
            <button
              id="search"
              className="border-2 border-gray-300 p-2 bg-white w-full mr-3 rounded-xl"
            >
              Search
            </button>
            <button
              type="reset"
              className="border-2 border-gray-300 p-2 bg-white rounded-xl"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FindPetPage;
