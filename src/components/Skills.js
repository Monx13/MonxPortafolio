import meter1 from "../assets/img/desarrollo-web.png";
import meter2 from "../assets/img/codigo.png";
import meter3 from "../assets/img/logo.png";
import meter4 from "../assets/img/impresion-3d.png";
import meter5 from "../assets/img/simulacion.png";
import meter6 from "../assets/img/conversacion.png";
import meter7 from "../assets/img/liderazgo.png";
import meter8 from "../assets/img/gestion-de-proyectos.png";
import meter9 from "../assets/img/diversidad.png";
import meter10 from "../assets/img/eng.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
                        <h2>Hard Skills</h2>
                        <p>These skills involve the knowledge and ability to use specific programs, programming languages, applications and tools related to computing and technology.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Development tools</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Design tools</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>3D design and modeling</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Simulation and modeling tools</h5>
                            </div>
                        </Carousel>
                        <p></p>
                        <h2>Soft Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Effective communication</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Leadership</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Time management</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Diversity management</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>English</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
