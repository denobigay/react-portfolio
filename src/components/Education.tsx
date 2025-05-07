import React from "react";
import edulogo from "../components/pics/education-1.png";

const Education = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">Education</h2>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-500">
              I am currently studying at Filamer Christian University, taking up
              a Bachelor of Science in Information Technology (BSIT). Through
              this course, I’m learning more about computers, programming, and
              technology, which helps me improve my skills in design and
              development.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
