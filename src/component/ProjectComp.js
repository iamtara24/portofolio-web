import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import ProyekLima from '../assets/img/proyek5.png';
import ProyekDua from '../assets/img/proyek2.png';
import ProyekTiga from '../assets/img/proyek3.png';
import ProyekEnam from '../assets/img/proyek6.png';

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
            <p className='fst-italic w-75 text-light'>"Sejumlah proyek yang pernah saya buat dan hasil kolaborasi yang ciamik dengan beberapa perusahaan hebat! Setiap proyek mencerminkan komitmen saya terhadap standar kualitas tinggi dan kontribusi kreatif dalam menghadirkan solusi yang memenuhi kebutuhan dan ekspektasi klien."</p>
            <Row className='position-relative row-cols-lg-2 mt-5 row-gap-5 z-2'>
                <div className='col-12 col-lg position-relative project-gallery' data-aos="flip-left">
                    <img src={ProyekLima} alt="" className='w-100' />
                    <div className="project-desc">
                        Contoh Simple Landingpage ERP dengan teknologi React.js
                    </div>
                </div>
                <div className='col-12 col-lg project-gallery' data-aos="flip-left" data-aos-delay="100">
                    <img src={ProyekDua} alt="" className='w-100' />
                    <div className="project-desc">
                        <small style={{fontSize: '11px'}}>Hasil Kolaborasi dengan PT JMC Indonesia untuk mengasilkan aplikasi property PT Persada Puri Tama <br />
                        Copyright © 2023. JMC IT Consultant - Jasa Pembuatan Software</small>
                    </div>
                </div>
                <div className='col-12 col-lg project-gallery' data-aos="flip-left" data-aos-delay="150">
                    <img src={ProyekTiga} alt="" className='w-100' />
                    <div className="project-desc">
                        <small style={{fontSize: '11px'}}>Kolaborasi Bersama PT JMC Indonesia membangun aplikasi Maintenance Mesin PT Mesin Isuzu Indonesia <br />
                        Copyright © 2023. JMC IT Consultant - Jasa Pembuatan Software</small>
                    </div>
                </div>
                <div className='col-12 col-lg project-gallery' data-aos="flip-left" data-aos-delay="200">
                    <img src={ProyekEnam} alt="" className='w-100' />
                    <div className="project-desc">
                        <small style={{fontSize: '11px'}}>Employee App Hasil Kolaborasi dengan PCS Group Indonesia <br />
                        Copyright © 2024. PT Pasifik Cipta Solusi</small>
                    </div>
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