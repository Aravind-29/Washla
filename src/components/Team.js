import React from "react";
import Orange from '../images/one.jpg'
import Red from '../images/two.jpg'
import Blue from '../images/three.jpg'

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
      <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-extrabold text-gray-400">MEET OUR</h2>
          <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Our Team
          </p>
          <p className="mt-6 text-lg/8 text-gray-600  text-black font-semibold">
            The member of our highly experienced team is dedicated to providing you with only the best service we can possibly provide.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center pt-12">
          <TeamCard
            name="Monica Gordan"
            profession="House Cleaning"
            imageSrc={Orange}
          />
          <TeamCard
            name="Laura Jones"
            profession="Cleaner"
            imageSrc={Red}
          />
          <TeamCard
            name="Sara Ryan"
            profession="House Cleaner"
            imageSrc={Blue}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-10 w-full max-w-[370px]">
          <div className="relative overflow-hidden ">
            <img src={imageSrc} alt="" className="w-full" />
            <div className="absolute bottom-0 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden  bg-white px-3 py-5 dark:bg-dark-2">
                <h3 className="text-base font-bold text-dark dark:text-black">
                  {name}
                </h3>
                <p className="text-xs text-body-color dark:text-dark-6">
                  {profession}
                </p>
                <div>
          
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
