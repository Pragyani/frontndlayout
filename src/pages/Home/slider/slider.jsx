import React from "react";
import Slider from "react-slick";
import './slider.css';
import { Slid2, slider1 } from "../../../Components/imagesURL/Images";


const HomeSlider = () => {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    return (
        <section className="homSlider">
            <div className="sliderContainer">
                <Slider {...settings} className="home_slider_main">
                    <div className="item">
                        <img src={slider1} className="item-img" />
                    </div>

                    <div className="item">
                        <img src={Slid2} className="item-img" />
                    </div>
                </Slider>

            </div>
        </section>
    )
}

export default HomeSlider;