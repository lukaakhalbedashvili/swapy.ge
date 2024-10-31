// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export const Slider = () => {
  return (
    <>
      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: #4edd98; /* Arrow color */
          font-size: 40px; /* Arrow size */
        }
      `}</style>

      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full bg-black h-full rounded-lg"
      >
        <SwiperSlide>
          <Image
            src="/instruction_1.jpg"
            fill
            alt="instruction1"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li className="mb-10">
                გახსენით საქართველოს ბანკის მობაილ ბანკის აპლიკაცია
              </li>

              <li>დააჭირეთ ისრით მონიშნულ წარწერას PLUS</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/instruction_2.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li>დააჭირეთ ისრით მონიშნულ სექციას</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/instruction_3.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li>დააჭირეთ ისრით მონიშნულ გადარიცხვის ღილაკს</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/instruction_4.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white w-full lg:flex lg:justify-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li className="mb-10 mt-10">
                პირველ ველში წერთ მიმღებ პირად ნომერს
                <a className="text-main"> 08101039664</a>
              </li>

              <li className="mb-10">
                მეორე ველში ავტომატურად იწერება მიმღების ინიციალები.
              </li>

              <li className="mb-10">
                მესამე ველში წერთ გადასარიცხი პლუს ქულების რაოდენობას
              </li>

              <li className="mb-8 text-center">
                კომენტარის ველში უთითებთ ანგარიშის ნომერს, რომელზეც გსურთ თანხა
                დაგერიცხოთ. TBC ბანკის ანგარიშის მითითების შემთხვევაში თანხა
                შემდეგ დღეს აგესახებათ.
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next text-white p-1 rounded-full text-xs"></div>

        <div className="swiper-button-prev text-white p-1 rounded-full text-xs"></div>
      </Swiper>
    </>
  );
};
