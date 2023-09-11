import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import EducationItem from "./EducationItem";
import item from "../assets/img/educacion.png"

const educationData = [
  {
    id: 1,
    title: "Engineering in Mechatronics",
    education: "Universidad Tecnológica de la Mixteca, Huajuapan de León, Oax.",
    tiempo: "Aug 2018 - Present",
  },
  {
    id: 2,
    title: "Preparatory School",
    education: "Colegio de Bachilleres del Estado de Oaxaca, Tuxtepec, Oax.",
    tiempo: "Aug 2015 - Jun 2018",
  },

];

export const Education = () => {
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
    <section className="study" id="studies">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="study-bx wow zoomIn">
                        <h2>Education</h2>
                        <div className="item">
                          {educationData.map((education, id, tiempo) => (
                          <EducationItem education={education} key={id} tiempo={tiempo} />
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

