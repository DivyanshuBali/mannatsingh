"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { LogItem_V2 } from "@/_utils/types";
import styles from "./LogsMobileLayout.module.css";

const LogsMobileLayout = ({ logs }: { logs: readonly LogItem_V2[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={styles.logsMobileLayout}>
			<Swiper
				className={styles.swiper}
				centeredSlides
				slidesPerView="auto"
				spaceBetween={100}
				onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
			>
				{logs.map((log, index) => (
					<SwiperSlide key={log.code} className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ""}`}>
						<div className={styles.logCard}>
							<Image src={log.cover_image} alt={log.title} fill className={styles.logCardImage} sizes="285px" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default LogsMobileLayout;
