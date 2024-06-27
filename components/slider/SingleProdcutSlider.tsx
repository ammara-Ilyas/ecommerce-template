// import React, { useRef, useState } from "react";
// import Image from "next/image";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import "./styles.css";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// const App: React.FC = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <>
//       <Swiper
//         // style={{
//         //   "--swiper-navigation-color": "#fff",
//         //   "--swiper-pagination-color": "#fff",
//         // }}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-1.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-2.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-3.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-4.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-5.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-6.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-7.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-8.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-9.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-10.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-1.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-2.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-3.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-4.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-5.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-6.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-7.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-8.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-9.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src="https://swiperjs.com/demos/images/nature-10.jpg"
//             alt="slider image"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default App;
