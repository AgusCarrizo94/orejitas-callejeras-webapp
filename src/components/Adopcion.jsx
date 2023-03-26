import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row } from "react-bootstrap";
import AnimalAdopcion from "./child_components/AnimalAdopcion";

export const Adopcion = () => {
    const responsive = {
        superLargeDesktop: {
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

      const animalesData = [
        {
            id: 1,
            img: "#",
            name: "Hola1"
        },
        {
            id: 2,
            img: "#",
            name: "Hola2"
        },
        {
            id: 3,
            img: "#",
            name: "Hola3"
        }
    ];

    const animalesAdopcion = animalesData.map((item) =>
      <AnimalAdopcion 
        img = {item.img}
        name = {item.name}
      />
    );

      return (
        <section id="animalesAdopcion" className="animalesAdopcion">
            <Container>
                <Row className="animalesAdopcionTitle">
                    <h1>Animales en Adopcion</h1>
                    <span>No los dejes solos! Adopta uno de estos bellos animalitos y mejorales la vida</span>
                </Row>
                <Carousel responsive={responsive} infinite={true} swipeable={true} showDots={true} renderDotsOutside={true}>
                    {animalesAdopcion}
                </Carousel>
            </Container>
        </section>
      );
}