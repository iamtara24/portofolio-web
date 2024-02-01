import React from 'react';
import HeroBg from "../assets/img/bg-hero.png";
import HeroBgMobile from "../assets/img/bg-hero-mobile.png";
import HeroAssetMobileTop from "../assets/img/hero-asset-mobile-top.png";
import HeroAssetMobileBottom from "../assets/img/hero-asset-mobile-bottom.png";
import {Container, Row, Col} from 'react-bootstrap';

const HeroComp = () => {
  return (
    <div className='mb-lg-5 pb-lg-5' id='home'>
        <img src={HeroBg} alt="" className='position-absolute top-0 z-1 w-100 d-none d-lg-block'/>
        <img src={HeroAssetMobileTop} alt="" className='position-absolute z-1 d-block d-lg-none' style={{top: '10%'}}/>
        <img src={HeroAssetMobileBottom} alt="" className='position-absolute z-1 d-block d-lg-none' style={{bottom: '5%'}}/>
        <img src={HeroBgMobile} alt="" className='position-absolute z-1 end-0 d-block d-lg-none' style={{top: '15%'}}/>
        <Container className='hero position-relative z-2'>
            <Row className='justify-content-center align-items-center vh-50 mt-lg-5'>
                <Col md={{ span: 7, offset: 5 }}>
                    <h4 className='text-custom fw-bold text-uppercase animate__animated animate__fadeInDown'>Anggin Megantara</h4>
                    <h1 className='text-uppercase fw-bold text-custom animate__animated animate__fadeInDown animate__delay-1s'>Frontend <span className='text-custom-secondary text-mobile'>Developer</span></h1>
                    <p className='fst-italic text-custom mt-4 animate__animated animate__fadeInDown animate__delay-1s'>Pemikir Kreatif dalam Dunia Digital. Menghadirkan Desain yang Memikat, yang Memadukan Inovasi dan Desain, dan Membangun Pengalaman Pengguna yang Tak Terlupakan</p>
                    <a href='#contact' className='btn btn-custom btn-mobile mt-4 px-4 animate__animated animate__zoomIn animate__delay-1s'>Kontak Saya</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeroComp