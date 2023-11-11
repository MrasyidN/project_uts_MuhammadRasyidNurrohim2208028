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
                        dalam jurusan pendidikan ilmu komputer. saya memiliki ketertarikan dalam bidang UI/UX
                        design. saya memiliki hobi untuk bermain game yang saya sukai contohnya bermain pokemon.
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