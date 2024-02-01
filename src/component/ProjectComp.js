import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import ProyekSatu from '../assets/img/proyek1.png';
import ProyekDua from '../assets/img/proyek2.png';
import ProyekTiga from '../assets/img/proyek3.png';
import ProyekEmpat from '../assets/img/proyek4.png';

import bgKanan from '../assets/img/bg-proyek-kanan.png';
import bgKiri from '../assets/img/bg-proyek-kiri.png';

const ProjectComp = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = process.env.PUBLIC_URL + '/download/proyek.zip'; // Sesuaikan dengan path file Anda
        downloadLink.download = 'proyek.zip';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
  return (
    <div id='project' className="position-relative pt-5 mb-5">
        <img src={bgKanan} alt="" className='position-absolute end-0 z-1 d-none d-lg-block' />
        <Container>
            <h4 className='text-custom-title' data-aos="fade-down">Proyek Saya</h4>
            <h1 className='text-custom' data-aos="fade-down" data-aos-delay="100">Yang Terbaru</h1>
            <Row className='position-relative row-cols-lg-2 mt-5 row-gap-5 z-2'>
                <div className='col-12 col-lg' data-aos="flip-left">
                    <img src={ProyekSatu} alt="" className='w-100' />
                </div>
                <div className='col-12 col-lg' data-aos="flip-left" data-aos-delay="100">
                    <img src={ProyekDua} alt="" className='w-100' />
                </div>
                <div className='col-12 col-lg' data-aos="flip-left" data-aos-delay="150">
                    <img src={ProyekTiga} alt="" className='w-100' />
                </div>
                <div className='col-12 col-lg' data-aos="flip-left" data-aos-delay="200">
                    <img src={ProyekEmpat} alt="" className='w-100' />
                </div>
            </Row>
            <div className='d-flex mt-5' data-aos="fade-up">
                <Button onClick={handleDownload} className='btn btn-custom-secondary px-4 fw-bold mx-auto'>Lihat Lainnya</Button>
            </div>
        </Container>
        <img src={bgKiri} alt="" className='position-absolute' style={{bottom: '3%'}} />
    </div>
  )
}

export default ProjectComp