import {Col, Container, Row} from "react-bootstrap"
import sayaImage from '../assets/saya.png'

const About = () => {
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col id="about">
                    <div className="div">
                <img className="img" alt="saya" src={sayaImage} />
                    <div className="frame">
                        <div className="text-wrapper">About Me</div>
                        <p className="p">
                        Saya merupakan mahasiswa dari Universitas Pendidikan Indonesia dengan latar belakang
                        dalam jurusan pendidikan ilmu komputer. saya juga memiliki ketertarikan dalam bidang illustrator. 
                        saya memiliki juga hobi untuk bermain game yang saya suka contohnya bermain pokemon. 
                        lalu saya sangat menyukai mendengar musik apapun genrenya (kecuali jazzzz).
                        </p>
                        
                    </div>
            </div>
                    </Col>   
                </Row>
            </Container>
            
      </div>
    )
}

export default About