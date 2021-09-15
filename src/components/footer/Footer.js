import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';

import axios from './../../services/http-requests/axios.instance';

// logo
import Logo from './../../assets/LOGO-SOMOS MAS.png';

// bootstrap
import './Footer.css';

const socialMedias = [
  'https://fb.com/somos-mas',
  'https://linkedin.com/somos-mas',
  'https://instagram.com/somos-mas',
];

function Footer() {
  const [socialIcons, setSocialIcons] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get('organizations/1/public');
      const data = await response.data[0].socialMedia;
      const socialIconArr = Object.values(data);
      setSocialIcons(socialIconArr);
    };
    requestData();
  }, []);

  return (
    <Container fluid className='footer'>
      <div className='container d-flex flex-column'>
        <Row className='row-1'>
          <Col>
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to='/actividades'>
                  Actividades
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/novedades'>
                  Novedades
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Image src={Logo} className='logo responsive' />
          </Col>
          <Col>
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to='/testimonios'>
                  Testimonios
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/nosotros'>
                  Nosotros
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/contacto'>
                  Contacto
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className='align-self-center row-2'>
          <Col className='justify-content-around'>
            {socialIcons.length
              ? socialIcons.map((socialIcon, i) => (
                  <a
                    href={socialMedias[i]}
                    key={socialIcon}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: 'black', margin: '0 10px' }}
                  >
                    <i className={`bi bi-${socialIcon} fa-3x`}></i>
                  </a>
                ))
              : null}
          </Col>
        </Row>
        <Row className='row-3'>
          <Col>2021 by Alkemy. All Rights Reserved.</Col>
        </Row>
      </div>
    </Container>
  );
}

export default Footer;
