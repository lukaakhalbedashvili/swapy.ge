import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      className="pt-[20%] w-full  flex items-center flex-col px-2 pb-20"
      id="ჩვენს შესახებ"
    >
      <h1 className="w-full text-center flex justify-center  mb-10 ">
        ჩვენს შესახებ
      </h1>

      <div className="bg-body rounded-lg p-2">
        swapy / სვაპი პლატფორმაა რომლის მიზანიც PLUS ქულების გაცვლის პროცესის
        გამარტივებაა.
        <br />
        <br />
        სერვისი ამ წლის დასაწყისში ჩაეშვა და ამ დროისთის 200,000 - ამდე პლუს
        ქულა გვაქვს გაცვლილი.
        <br />
        <br />
        ჩვენი უმთავრესი მიზანი უსაფრთხოებაა , თქვენი მონაცემების თუ გაცვლილი
        ქულების.
      </div>
    </section>
  );
};

export default AboutUs;
