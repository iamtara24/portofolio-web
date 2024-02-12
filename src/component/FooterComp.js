import React from 'react';
import { Container, Row } from 'react-bootstrap';
import logoFooter from '../assets/img/logo-footer.png';

const FooterComp = () => {
  return (
    <div style={{backgroundColor: '#0F1035'}}>
        <Container className='py-3'>
            <Row className="flex-lg-row justify-content-lg-between align-items-center">
                <div className="col-lg col-6 text-white order-1">
                    <img src={logoFooter} alt="" />
                </div>
                <div className="col-lg col-6 text-white order-2 order-lg-last">
                    <div className="d-flex gap-3 justify-content-end align-items-center">
                        <a href="http://www.linkedin.com/in/anggin-megantara-2a4231134" target='_blank' rel='noreferrer' className='h4 mb-0'><i class="fab fa-linkedin"></i></a>
                        <a href="https://youtube.com/playlist?list=PLr8w2gB_kwHWZV3QvLLSM5QBVbwJKEA-A&si=r7oO495Uat8Q_dkF" target='_blank' rel='noreferrer' className='h4 mb-0'><i class="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/iamtara54/" target='_blank' rel='noreferrer' className='h4 mb-0'><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-12 col-lg-5 text-white text-center order-last order-lg-2 mt-3 mt-lg-0" style={{fontSize: '18px'}}>Copyright © 2024. Developed By Anggin Megantara</div>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComp