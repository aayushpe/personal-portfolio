import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import mongodb from "../assets/img/mongodb.svg";
import spring from "../assets/img/spring-boot.svg";
import express from "../assets/img/express.svg";
import linux from "../assets/img/linux-svgrepo-com.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technologies</h2>
                        <p>A list of techonologies I have used<br></br> during my software journey.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image4" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image5" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt="Image6" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="Image6" />
                                <h5>Linux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
