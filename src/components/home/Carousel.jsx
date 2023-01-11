import React from 'react';
import Slider from "react-slick";
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import './Carousel.css';



//component custom for next button slcik
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='setNext'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    ><BsChevronCompactRight /></div>
  );
};

//component custom for next button slcik
function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='setPrev'
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ><BsChevronCompactLeft /></div>
  );
};


const Carousel = (props) => {


  
  // cau hinh cho slick carousel
  let settingsCarouser = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => {
      return <ul style={{ bottom: 35}}>{dots}</ul>;
    },
    customPaging: (pagi, i) => {
      const style = {
        width: 10,
        height: 10,
        borderRadius: '100%',
        display: 'inline-block',
        background: 'rgb(21 128 61)',
        opacity: 0.7 ,
        transition: "0.4s",
      };
      return <span className='slickDots' style={style} />;
    },
  };

  return (
    <Slider {...settingsCarouser}>
      
          <div className='bannerSlide -mt-48 bg-slate-400 py-10'>
            <div className='trailer '>
            </div>
          </div>

    </Slider>
  )
}

export default Carousel