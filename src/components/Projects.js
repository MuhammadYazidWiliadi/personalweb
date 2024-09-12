import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "TU Letter",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Al Ikram Donation",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Web Studiow",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Pharmacy App",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Personal Web",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Figma UI",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am an experienced developer in building websites for small and medium businesses. With expertise in HTML, CSS, Laravel, Bootstrap, PHP, OOP, and Tailwind, I have managed projects from start to finish, ensuring every detail is met as per client requirements.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
