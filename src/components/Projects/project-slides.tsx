import React from 'react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./index.scss";

type Props = {}

const ProjectSlide = (props: Props) => {
    const projects=[{title:'Project 1'},{title:'Project 2'},{title:'Project 3'},{title:'Project 4'},{title:'Project 5'}]
  return (
    <>{projects.map((project:any)=><SwiperSlide>{project.name}</SwiperSlide>)}</>
  )
}

export {ProjectSlide}