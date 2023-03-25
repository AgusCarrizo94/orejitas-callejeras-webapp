import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";

export const Rescatados = () => {
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

      return (
        <section id="animalesRescatados" className="animalesRescatados">
            <Container>
                <Row>
                    <h1>Animales Rescatados</h1>
                </Row>
                <Row>
                    <Carousel responsive={responsive} infinite={true}>
                        <div className="item">
                            <p>Hello World!</p>
                        </div>
                    </Carousel>
                </Row>
            </Container>
        </section>
      );
}