import React from "react";
import TextContentCard from "../components/textContentCard";
import data from "../../public/disclaimer.json";

function DisclaimerPage() {
  return (
    <div className="h-full flex justify-center flex-col py-10">
      {data.items.map((item, index) => (
        <TextContentCard key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default DisclaimerPage;
