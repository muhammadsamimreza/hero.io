import React from "react";
import Container from "../components/Container/Container";
import downlowdIcon from "../assets/icon-downloads.png";
import ratingsIcon from "../assets/icon-ratings.png";
const InstalledCard = ({ app }) => {
  console.log(app);

  const { title, image, ratingAvg, downloads, companyName, size } = app;

  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 md:my-5 p-3 bg-base-200 rounded-2xl">
          <div className="md:w-44 h-60 bg-gray-300 rounded-2xl">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={image}
              alt=""
            />
          </div>
          <div className="space-y-3">
            <div className="space-y-2 border-b border-gray-300 pb-5">
              <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
              <p className="md:text-xl ">
                <span className="text-gray-400">Develop by:</span>
                <span className="font-medium bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-transparent bg-clip-text">
                  {" "}
                  {companyName}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex">
                <img className="w-5 md:w-7" src={downlowdIcon} alt="" />
                <div iv className="my-2">
                  <h1 className="text-xl md:text-[27px] font-bold">
                    {downloads}
                  </h1>
                </div>
              </div>
              <div className="flex">
                <img className="w-5 md:w-7" src={ratingsIcon} alt="" />
                <div iv className="my-2">
                  <h1 className="text-xl md:text-[27px] font-bold">
                    {ratingAvg}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <p>({size} MB)</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InstalledCard;
