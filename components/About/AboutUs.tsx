import React from 'react'
type AboutItem = {
    headline: string;
    explanation: string;
    item: {
        subheadline: string;
        para: string;
        // image: url;
    }[];
}
const AboutUs = ({ headline, explanation, item }: AboutItem) => {
  return (
    <div className="container mx-auto px-6 py-10 mb-5 mt-[157px]">
        <div className="items-center text-center">
            <h4 className="font-medium  text-[#873481] sm:text-[32px] lg:text-[40px] mb-2 ">
                {headline}
            </h4>
            <div className="w-full max-w-5xl mx-auto mt-5">

                <p className="text-black text-regular sm:text-[18px] lg:text-[20px] text-[#C566BF] ">
                    {explanation}
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs