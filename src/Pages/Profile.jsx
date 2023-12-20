import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import portraits from "../Asset/NBackgroundjpg.jpg";
import { Contact } from "../Components/Contact";

export const Profile = () => {
  const [contact, setContact] = useState(false);

  const FindMe = () => {
    setContact((curreent) => !curreent);
    console.log("HELO");
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    alt="portraits"
                    src={portraits}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  />
                  <h1 className="text-xl font-bold">UMAR AYUBA RANO</h1>
                  <p className="text-gray-700">Software Developer</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <label className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                      Download
                    </label>
                    <Button
                      href="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </Button>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">HTML/CSS</li>
                    <li className="mb-2">Tailwind Css</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">
                  I am a passionate and results-driven software engineer with
                  expertise in JavaScript. My journey in the world of
                  programming has equipped me with a strong foundation in web
                  development, and I continually strive to stay updated with the
                  latest technologies.
                </p>

                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                <FindMe />

                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Software Engineer
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">
                        {" "}
                        Tibit Online Store LTD
                      </span>
                      <span className="text-gray-700">2021-2022</span>
                    </p>
                  </div>
                  <span>DUTIES</span>
                  <p className="mt-2">
                    <p>
                      - Contributed ideas and suggestions in team meetings and
                      delivered updates on deadlines,designs, and enhancements.
                    </p>
                    <p>
                      - Collaborated with project managers to select
                      ambitious,but realistic coding milestones on per-release
                      software project development.
                    </p>
                    <p>
                      - Collaborated on stages of systems development life cycle
                      from requirement gathering to production releases.
                    </p>
                    <p>
                      -Revised,modularized and update old code bases to modern
                      development standards,reducing operating costs,and
                      improving functionality.
                    </p>
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Program Manager
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">
                        {" "}
                        Rano Community Radio, Rano LGA,Kano State
                      </span>
                      <span className="text-gray-700">2023-07 - Current </span>
                    </p>
                  </div>
                  <span>DUTIES</span>
                  <p className="mt-2">
                    <p>
                      -Addressed and resolved technical,financial, and
                      operational concerns by working with team members and
                      directors.
                    </p>
                    <p>
                      - Coached team members on productivity strategies to
                      accomplish challenge goals.
                    </p>
                    <p>
                      -Met with project stakeholders on regular basis to assess
                      progress and make adjustments.
                    </p>
                    <p>
                      Interacted with customer and clients to identify business
                      needs and requirements
                    </p>
                  </p>
                </div>
                <h2 className="text-xl font-bold mt-6 mb-4">Education</h2>

                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Bachelor's Degree in Software Engineering and Application
                      Development
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">
                        BUGEMA UNIVERSITY UGANDA
                      </span>
                      <span className="text-gray-700">2017 - 2021</span>
                    </p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mt-6 mb-4">Certifications</h2>

                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      - NYSC NATIONAL YOUTHS SERVICE CORPS{" "}
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">
                        Umar Ali Shinkafi Polytechnic Sokoto
                      </span>
                      <span className="text-gray-700">
                        Badge B Stream 2 @ 2023
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
