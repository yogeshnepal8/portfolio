import React from "react";
import skills from "../data/skills";
import education from "../data/education";

function About() {
  return (
    <div className="lg:flex lg:space-x-2">``
      <div className="flex-1 border-r-2 pr-8">
        <div className="flex flex-col items-center">
          <img
            src="../src/assets/YogeshNepal.png"
            alt="HelloFromYogesh"
            className="rounded-full shadow-md w-80 align-center"
          />
          <h1 className="text-3xl font-medium text-center mt-3">
            Yogesh Nepal
          </h1>
          <h1 className="text-2xl font-medium text-center mb-3">
            Civil Engineer
          </h1>
          <p className="text-justify">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            ut omnis nostrum a dolores, soluta nulla commodi ea minima
            praesentium, in ipsum distinctio placeat amet asperiores est illo.
            Tempora, quo ipsam. Veritatis praesentium nihil sit maxime
            voluptatum consequuntur quidem ipsa!
          </p>
        </div>
        <div className="my-10">
          <h2 className="text-3xl font-medium mt-3 drop-shadow-lg mb-3">
            Skills
          </h2>
          {skills.map((item, index) => (
            <div className="flex w-full" key={index}>
              <div className="w-40">
                <h3 className="font-medium py-2">{item.skill}</h3>
              </div>
              <div className=" w-full py-3">
                <div
                  className="bg-slate-600 rounded h-3 "
                  style={{ width: item.ratings }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Education */}
        <div className="mb-8">
          <div>
            <h1 className="text-3xl font-medium mt-3 drop-shadow-lg">
              Education
            </h1>
          </div>
          {education.map((item, index) => (
            <div className="w-full py-2" key={index}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <div>
                  <p className="font-light">{item.year}</p>
                </div>
              </div>
              <div>{item.school}</div>
              <div className="font-light">{item.location}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 px-8">
        {/* Experiences */}
        <div className="mb-2">
          <h1 className="text-3xl font-medium drop-shadow-lg">Experiences</h1>
          <div>
            <h2 className="text-xl font-medium mt-3 drop-shadow-lg">
              J and N civil Design and Construction Pvt. Ltd.
            </h2>
            <p className="font-light">
              <em>Oct,2019-Feb, 2020</em>
            </p>
            <ul className="list-disc list-inside">
              <li>
                Preparation of architectural and structural drawing under the
                assistance of senior engineer
              </li>
              <li>
                Creating 3d for the client for better understanding and
                visualization
              </li>
              <li>
                Prepartion of estimation for civil work which includes quanity
                takeoff and rate analysis
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mt-3 drop-shadow-lg">
              Project Research and Engineer Associates
            </h2>
            <p className="font-light">
              <em>
                {
                  "Feb, 2020-Sept,2021(Full Time), Sept,2021-Mar,2023(Part-Time)"
                }
              </em>
            </p>
            <ul className="list-disc list-inside">
              <li>
                Part of team for Bagmati Province Transport Master Plan,
                Municipality Transport Master Plan for Budhanilkantha
                Municipality, Helambu Rural Municipality, Panauti Municipality,
                Khandbari Municipality, Dakshinkali Municipality, Belaka
                Municipality and Udayapurgadhi Rural Municipality.
              </li>
              <li>
                Collected Geospatial data such as GPS coordinates, attribute
                information and multimedia content for analysis and mapping
                using handheld GPS
              </li>
              <li>
                Geodatabase design to store feature classes, relationships and
                rules data in GIS software compatible formats,
              </li>
              <li>
                Manage database to ensure data integrity, accuracy and
                consistency,
              </li>
              <li>
                Designed and created maps for a wide range of purposes,
                including transport planning, urban planning and marketing.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mt-3 drop-shadow-lg">
              Sapanakoghar.com
            </h2>
            <p className="font-light">
              <em>Oct,2021-Dec, 2022</em>
            </p>
            <ul className="list-disc list-inside">
              <li>
                Collaborating with architect and client to develop plans that
                meet client client requirements and adhere to building codes and
                regulations,
              </li>
              <li>
                Preparing structural drawing and structural report of
                residential buildings,
              </li>
              <li>Preparation of working drawing</li>
              <li>3d modelling and visualization of residential building</li>
              <li>
                Estimating the costs associated with materials, labor, and
                equipment required for the construction project,
              </li>
              <li>
                Filling of EBPS application and collaborating with Waris for
                municipal processing
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mt-3 drop-shadow-lg">
              Quality construction and Design Service
            </h2>
            <p className="font-light">
              <em>Jun,2023-Dec, 2023</em>
            </p>
            <ul className="list-disc list-inside">
              <li>
                Collaborating with architect and client to develop plans that
                meet client client requirements and adhere to building codes and
                regulations,
              </li>
              <li>
                Preparing structural drawing and structural report of
                residential buildings,
              </li>
              <li>Preparation of working drawing</li>
              <li>3d modelling and visualization of residential building</li>
              <li>
                Estimating the costs associated with materials, labor, and
                equipment required for the construction project,
              </li>
              <li>
                Filling of EBPS application and collaborating with Waris for
                municipal processing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
