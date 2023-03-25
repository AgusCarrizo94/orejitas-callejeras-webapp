import { Col, Container, Row } from "react-bootstrap";
import perroBannerBG from '../assets/perrosBannerBG.png';
import Button from 'react-bootstrap/Button';

export const Banner = () => {

    return (
        <section id="sobreNosotros" className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="tagline">Hola! Somos Orejitas Callejeras</h1>
                        <p className="wrap">Somos un grupo dedicado al rescate y adopcion de animales callejeros en San Miguel de Tucuman. Luchamos por aquellos que no tienen voz. No somos un refugio!</p>
                        <Button variant="outline" style={{backgroundColor: "black", display: "none"}} onClick={() => console.log("Hello World!")}>Contactanos</Button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={perroBannerBG} alt="imagen banner" style={{height: "85%", width: "85%"}}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}