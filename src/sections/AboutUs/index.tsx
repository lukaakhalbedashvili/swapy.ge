import React from "react";

const AboutUs = () => {
  return (
    <section
      className="pt-[20%] lg:pt-[10%] w-full flex items-center flex-col pb-20 lg:text-center"
      id="ჩვენს შესახებ"
    >
      <h2 className="w-full text-center flex justify-center mb-10">
        ჩვენს შესახებ
      </h2>

      <div className="bg-body rounded-lg p-2 lg:p-10 text-gray-400 text-center w-full">
        swapy / სვაპი პლატფორმაა რომლის მიზანიც პლუს ქულების გაცვლის პროცესის
        გამარტივებაა.
        <br />
        <br />
        სერვისი ამ წლის დასაწყისში ჩაეშვა და ამ დროისთის 1,375,733 პლუს ქულა
        გვაქვს გაცვლილი.
      </div>
    </section>
  );
};

export default AboutUs;
