import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      className="pt-[20%] lg:pt-[10%] w-full  flex items-center flex-col px-2 pb-20 lg:w-1/2 lg:text-center"
      id="ჩვენს შესახებ"
    >
      <h2 className="w-full text-center flex justify-center  mb-10 ">
        ჩვენს შესახებ
      </h2>

      <div className="bg-body rounded-lg p-2 lg:p-10 text-gray-400 text-center">
        swapy / სვაპი პლატფორმაა რომლის მიზანიც პლუს ქულების გაცვლის პროცესის
        გამარტივებაა.
        <br />
        <br />
        სერვისი ამ წლის დასაწყისში ჩაეშვა და ამ დროისთის 758,000 პლუს ქულა
        გვაქვს გაცვლილი.
        <br />
        <br />
        ჩვენი უმთავრესი მიზანი უსაფრთხოებაა , თქვენი მონაცემების თუ გაცვლილი
        ქულების.
      </div>
    </section>
  );
};

export default AboutUs;
