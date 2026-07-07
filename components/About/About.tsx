'use client'
import React from 'react'
import CountUp from "react-countup";

type AboutProps = {
  item:{
    subheadline?: string;
    count?: number;
    suffix?: string;
    actionText: string;
  }[];
};

const About = ({ item }: AboutProps) => {
  return (
    <div>
      <div
          className="w-full lg:bg-cover bg-center bg-no-repeat py-5 lg:py-0 md:h-[265px]"
        style={{ backgroundImage: "url('/Purplebg.svg')" }}
      >
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 h-full items-center text-center">
                {item.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-white sm:text-[32px] lg:text-[40px] mb-2">
                      {item.count !== undefined ? (
                        <>
                          <CountUp
                            end={item.count}
                            duration={2}
                            enableScrollSpy
                          />
                          {item.suffix}
                        </>
                      ) : (
                        item.subheadline
                      )}
                    </h4>

                    <p className="font-medium sm:text-[22px] lg:text-[32px] text-white text-[#C566BF]">
                      {item.actionText}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About