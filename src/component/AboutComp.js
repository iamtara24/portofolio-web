import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import AboutBg from "../assets/img/bg-about.png";
import AboutBgLeft from "../assets/img/bg-kiri-about.png";

const AboutComp = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = process.env.PUBLIC_URL + '/download/CV_ATS_Anggin_Megantara.pdf'; // Sesuaikan dengan path file Anda
        downloadLink.download = 'CV_ATS_Anggin_Megantara.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
  return (
    <div id='about' className='position-relative mb-5'>
        <Container>
            <Row>
                <div className="col-md-7">
                    <h4 data-aos="fade-down" className='text-custom-title'>Sekilas</h4>
                    <h1 data-aos="fade-down" data-aos-delay="100" className='text-custom'>Tentang Saya</h1>
                    <p data-aos="zoom-in" className='text-custom mt-5 text-justify'>Saya adalah lulusan S1 Teknik Informatika dari STMIK Dharma Negara Bandung. Dengan pengalaman lebih dari 5 tahun, saya telah berkembang sebagai seorang Web Designer dan Frontend Developer. Keahlian utama saya terletak dalam merancang antarmuka pengguna (UI/UX) untuk website responsif. Saya memiliki pemahaman mendalam tentang keindahan desain dan kenyamanan pengguna.</p>
                    <p data-aos="zoom-in" className='text-custom mt-3 text-justify'>Dalam perjalanan karir saya, saya telah menguasai sejumlah bahasa pemrograman, termasuk HTML, CSS, JavaScript (ReactJS), JQuery, dan PHP. Kemampuan ini memungkinkan saya menciptakan solusi digital yang tidak hanya efisien tetapi juga efektif dalam memenuhi kebutuhan pengguna. </p>
                    <p data-aos="zoom-in" className='text-custom mt-3 text-justify'>Saya percaya bahwa setiap proyek merupakan peluang untuk menghadirkan kreativitas dan inovasi. Dengan kombinasi keahlian teknis dan pemahaman mendalam tentang kebutuhan pengguna, saya berkomitmen untuk menciptakan pengalaman digital yang luar biasa. Saya selalu terbuka untuk belajar dan berkembang, mengikuti perkembangan terbaru dalam dunia teknologi.</p>
                    <Button onClick={handleDownload} className='btn btn-custom-secondary px-4 mt-4' data-aos="fade-up">Download CV</Button>
                </div>
                <div className="col-md-5 order-first order-lg-2">
                    <img src={AboutBg} alt="" className='ms-lg-5 w-100' data-aos="flip-right" />
                </div>
            </Row>
        </Container>
        <img src={AboutBgLeft} alt="" className='position-absolute left-0' style={{ bottom: '-15%' }} />
    </div>
  )
}

export default AboutComp