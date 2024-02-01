import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {ReactComponent as WorkIcon} from '../assets/img/work.svg';
import bgKanan from '../assets/img/bg-pengalaman-kanan.png';
import bgKiri from '../assets/img/bg-pengalaman-kiri.png';
import timelineElements from '../timelineElements';

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"

const PengalamanComp = () => {
  return (
    <div id='experience' className="position-relative pt-4 mb-5">
        <img src={bgKanan} alt="" className='position-absolute end-0 bg-pengalaman-kanan' />
        <Container>
            <Row>
                <div className="text-center mb-5">
                    <h4 className='text-custom-title fst-italic' data-aos="fade-down">Jejak Karir</h4>
                    <h1 className='text-custom fw-bold' data-aos="fade-down" data-aos-delay="100" >Pengalaman Kerja</h1>
                </div>
                <VerticalTimeline>
                    {timelineElements.map((Element) => (
                        <VerticalTimelineElement key={Element.key} date={Element.date} className='date' iconStyle={{background:"#F3B95F"}} icon={<WorkIcon/>}>
                            <h5 className='vertical-timeline-element-title'>{Element.title}</h5>
                            <p className='vertical-timeline-element-subtitle'>{Element.location}</p>
                            <p id='description'>{Element.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Row>
        </Container>
        <img src={bgKiri} alt="" className='position-absolute' style={{bottom: '10%'}} />
    </div>
  )
}

export default PengalamanComp