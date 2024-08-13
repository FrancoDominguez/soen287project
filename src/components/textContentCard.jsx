import React from "react";

function TextContentCard({ title, text, image }) {
  return (
    <div className="h-full flex justify-center mb-10">
      <div className="w-full">
        <div className="text-xl font-bold text-gray-900">{title}</div>
        <p className="text-white text-justify">{text}</p>
      </div>
    </div>
  );
}

export default TextContentCard;
