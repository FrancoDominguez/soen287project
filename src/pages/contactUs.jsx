import React from "react";

function ContactUsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center pt-10">
        <form className="flex flex-col w-[500px] space-y-5 p-5 border-2 border-gray-200 rounded-xl bg-slate-800 text-white text-lg">
          <div className="font-bold text-2xl text-center mb-10">Contact Us</div>
          <div className="flex justify-between">
            <div className="font-bold">Name: </div>
            <div>Franco Domingeuz</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">School ID: </div>
            <div>40256199</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Email: </div>
            <div>franco.dominguez343@gmail.com</div>
          </div>
          <div className="flex justify-between">
            <div className="font-bold">Program: </div>
            <div>Software Engineering</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
