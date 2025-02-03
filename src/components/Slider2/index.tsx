// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Alert from "../Alert";
import { useEffect, useState } from "react";

export const Slider2 = () => {
  const [isAlert, setIsAlert] = useState<boolean>();
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (swiperInstance) {
        if (event.key === "ArrowRight") {
          swiperInstance.slideNext();
        } else if (event.key === "ArrowLeft") {
          swiperInstance.slidePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {isAlert && <Alert text="დაკოპირდა" onClose={() => setIsAlert(false)} />}

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
        onSwiper={(swiper) => {
          console.log(swiper);
          setSwiperInstance(swiper);
        }}
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
            src="/step_1.png"
            fill
            alt="instruction1"
            objectFit="contain"
          />

          <div className="absolute top-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center text-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li className="mb-10">
                გახსენით საქართველოს ბანკის მობაილ ბანკის აპლიკაცია
              </li>

              <li>დააჭირეთ ისრით მონიშნულ ღილაკს</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/step_2.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li>დააჭირეთ ისრით მონიშნულ ღილაკს</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/step_3.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li>დააჭირეთ ისრით მონიშნულ ღილაკს</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/step_4.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li>დააჭირეთ ისრით მონიშნულ ღილაკს</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/step_5.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center text-center">
            <ul className="list-none pl-5 lg:w-fit">
              <li>
                მიმღები ანგარიშის ველში წერთ ანგარიშის ნომერს{" "}
                <div
                  className="text-main whitespace-nowrap flex items-center justify-center cursor-pointer leading-7 lg:leading-9 text-center"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(
                        "GE32BG0000000499497078"
                      );
                      setIsAlert(true);
                    } catch (err) {
                      console.error("Failed to copy text: ", err);
                    }
                  }}
                >
                  <a className="leading-7 lg:leading-9">
                    GE32BG0000000499497078
                  </a>

                  <Image
                    src={"copy-icon.svg"}
                    alt="copy"
                    width={15}
                    height={15}
                    className="inline mx-2 fill-main"
                  />
                </div>
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/step_6.png"
            fill
            alt="instruction2"
            objectFit="contain"
          />

          <div className="absolute bottom-0 p-4 bg-body text-white py-20 w-full lg:flex lg:justify-center text-center">
            <ul className="list-none pl-5 w-fit lg:w-2/3">
              <li>
                თანხის ველში წერთ რა რაოდენობის გადმორიცვა გსურთ შესაბამისად
                რამდენი ლარის პლუს ქულის შეძენა გნებავთ
              </li>

              <li className="mt-5">
                დანიშნულების ველში კი მიმღებ{" "}
                <a className="leading-7 lg:leading-9 text-main">პირად ნომერს</a>{" "}
                ( პირად ნომერს რომელზეც პლუს ქულები უნდა აგესახოთ ) პირადი
                ნომრის არ მითითების შემთხვევაში, თანხა უკან დაგიბრუნდებათ.
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next text-white p-1 rounded-full text-xs mr-5"></div>

        <div className="swiper-button-prev text-white p-1 rounded-full text-xs ml-5"></div>
      </Swiper>
    </>
  );
};
