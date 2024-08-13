import React from "react";
import TextContentCard from "../components/textContentCard";
import data from "../../public/disclaimer.json";

function DisclaimerPage() {
  return (
    <div className="flex justify-center">
      <div className="h-full flex justify-center flex-col py-10 mobile:w-5/6 tablet:w-2/3 desktop:w-1/2">
        {data.items.map((item, index) => (
          <TextContentCard key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default DisclaimerPage;
