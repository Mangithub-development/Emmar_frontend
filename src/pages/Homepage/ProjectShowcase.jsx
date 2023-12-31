import React, { useState } from "react";
import { Text, Img, Line, Button } from "components";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projectData = [
  { projectName: "CocaCola Project", userimage: "images/img_frame18557_1.png" },
  { projectName: "Project Ibrahim Guled", userimage: "images/img_frame18557_2.png" },
  { projectName: "Project yeni som", userimage: "images/img_frame18557_3.png" },
  { projectName: "Riyo Travel agency Project", userimage: "images/img_frame18557_4.png" },
  { projectName: "Villa Duplex Project", userimage: "images/img_frame18557_5.png" },
  { projectName: "G+4 GL Construction Project", userimage: "images/img_frame18557_6.png" },
  { projectName: "Executive Restaurant", userimage: "images/img_frame18557_7.png" },
  { projectName: "Aparment Project", userimage: "images/img_frame18557_8.png" },
  { projectName: "Bakaro Apartment Project", userimage: "images/img_frame18557_9.png" },
  { projectName: "G+4 Apartment", userimage: "images/img_frame18557_10.png" },
  { projectName: "Hijra Real Estate 10-20", userimage: "images/img_frame18557_11.png" },
  { projectName: "Hijra Real Estate 20-20", userimage: "images/img_frame18557_12.png" },
  { projectName: "Himmah Property Duplex 10-20", userimage: "images/img_frame18557_13.png" },
  { projectName: "Himmah Property Duplex 15-20", userimage: "images/img_frame18557_14.png" },
  { projectName: "Himmah Property Villa", userimage: "images/img_frame18557_15.png" },
  { projectName: "Inland Revenue Director Office", userimage: "images/img_frame18557_16.png" },
  { projectName: "Kalkal Hospital", userimage: "images/img_frame18557_17.png" },
  { projectName: "Laben Restaurant", userimage: "images/img_frame18557_18.png" },
  { projectName: "Mesjid", userimage: "images/img_frame18557_19.png" },
  { projectName: "QQ Hotel", userimage: "images/img_frame18557_20.png" },
  { projectName: "QQ Resort", userimage: "images/img_frame18557_21.png" },
  { projectName: "Smart Techno", userimage: "images/img_frame18557_22.png" },
  { projectName: "Waliyo Apartment", userimage: "images/img_frame18557_23.png" },
  { projectName: "Wedding Hall", userimage: "images/img_frame18557_24.png" },
  { projectName: "Airlines Ethiopia", userimage: "images/img_frame18557_25.png" },
  { projectName: "Amana", userimage: "images/img_frame18557_26.png" },
  { projectName: "Aqua", userimage: "images/img_frame18557_27.png" },
  { projectName: "Guled Yahye G+2", userimage: "images/img_frame18557_28.png" },
  { projectName: "G+3 Apartment", userimage: "images/img_frame18557_29.png" },
  { projectName: "G+6 Apartment", userimage: "images/img_frame18557_30.png" },
  { projectName: "G+9 Apartment", userimage: "images/img_frame18557_31.png" },
  { projectName: "Landscape", userimage: "images/img_frame18557_32.png" },
  { projectName: "Landscape", userimage: "images/img_frame18557_33.png" },
];


const ProjectShowcase = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const handleChangeImage = (newIndex) => {
        if (newIndex < 0) {
          newIndex = projectData.length - 1;
        } else if (newIndex >= projectData.length) {
          newIndex = 0;
        }
        setCurrentImageIndex(newIndex);
      };
    return (
    <div className="flex sm:flex-col flex-row items-start justify-start w-full md:w-full">
      <Img
        className="object-cover w-[60vw] sm:w-full sm:h-[300px] lg:h-[600px]"
        src={projectData[currentImageIndex].userimage}
        alt="rectangleTwo"
      />
      <div className="bg-gray-900 flex flex-col items-center sm:h-auto h-[600px] w-[40vw] md:px-5  sm:w-full">
        <div className="m-auto flex flex-col md:gap-4 items-center justify-between w-[90%] h-full my-16 sm:my-4 sm:w-full sm:h-full">
          <div className="flex sm:flex-col flex-row sm:gap-4 items-center justify-start w-full p-4 ">
            <Text
              className="text-white-A700 text-xl text-center tracking-[2.40px] uppercase"
              size="txtPoppinsRegular20WhiteA700"
            >
              {currentImageIndex+1}/33
            </Text>
            <Line className="bg-white-A700 h-px sm:mt-0 my-[23px] w-[56%]" />
            <div className="sm:flex sm:flex-row flex flex-row">
            <FaChevronCircleLeft
              color="white"
              className="h-[60px] w-[60px]"
              onClick={() => handleChangeImage(currentImageIndex - 1)}
              />
            <FaChevronCircleRight
              color="white"
              className="h-[60px] w-[60px]"
              onClick={() => handleChangeImage(currentImageIndex + 1)}
            />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
            <Text
              className="text-center text-white-A700 text-xl tracking-[1.20px] uppercase w-auto"
              size="txtPoppinsMedium20WhiteA700"
            >
              Our Projects
            </Text>
            <Text
              className="md:text-5xl text-center text-[60px] text-white-A700 w-auto sm:text-[38px]"
              size="txtGaramond80WhiteA700"
            >
              {projectData[currentImageIndex].projectName}
            </Text>
          </div>
          <Button
            className="items-center justify-end cursor-pointer leading-[normal] min-w-[222px] text-center text-lg tracking-[0.18px] uppercase"
            shape="square"
            color="lime_900"
            size="sm"
            variant="fill"
            onClick={() => navigate("/projects")}
          >
            see all projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
