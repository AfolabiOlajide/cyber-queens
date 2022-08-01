import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
// import "swiper/css/pagination";

import "./About.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";

const About = () => {
	return (
		<div id="about" className="container">
			<div className="about-container">
				<h1>ABOUT</h1>
				<p>
					Cyber Queens is a collection of 20,000 randomly generated
					NFT art pieces created by an African artist Esther
					Akinboade.
				</p>
				<p>
					The collection was inspired by the ‘Peasant to Palace’ story
					of Queen Esther of Persia who demonstrated intelligence,
					courage and bravery when she intercepted the impending doom
					of a xenophobic plot against her people.
				</p>
				<p>
					We want to use our art pieces to intersect art lovers from
					diverse races and walks of life while building a thriving
					community that gives back through supporting girls and
					empowering women to make a positive impact in the society
					despite their inhibiting backgrounds.
				</p>
				<p>
					Join us as we cheer on Cyber Queens who are raising the bar
					on the blockchain and effortlessly reveal their charm while
					having fun in the Metaverse!
				</p>
			</div>
			<div className="showcase">
				<div className="showcase-container">
					<div className="showcase-item">
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Autoplay, Pagination]}
							className="mySwiper"
						>
							<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img2} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img3} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img4} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img5} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img6} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img7} alt="" /></SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
