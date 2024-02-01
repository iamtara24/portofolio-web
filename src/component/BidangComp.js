import React from 'react';
import { Container, Row } from 'react-bootstrap';
import lineTitle from "../assets/img/line-title.png"

const BidangComp = () => {
  return (
    <div className="bg-custom">
        <Container className='py-5' style={{opacity: '100%', marginBottom: '3rem'}}>
            <Row>
                <div className="col-md-4">
                    <h1 className="bidang-title">Bidang</h1>
                    <h1 className="bidang-subtitle">Keahlian</h1>
                    {/* <div className="garis-title"><div className="diamond"></div></div> */}
                    <img src={lineTitle} alt="" className='mt-4 mb-4 mb-lg-0' />
                </div>
                <div className="col-md-4">
                    <div className="d-flex gap-3 align-items-center mb-4">
                        <div className="circle-bidang">
                            <i class="fas fa-code"></i>
                        </div>
                        <div className="desc">
                            <h4 className='text-white'>Front-end Development</h4>
                            <p className='text-white mb-0'>70+ Finished Project</p>
                        </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <div className="circle-bidang">
                            <i class="far fa-file-image"></i>
                        </div>
                        <div className="desc">
                            <h4 className='text-white'>Graphic Design</h4>
                            <p className='text-white mb-0'>20+ Finished Project</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ms-lg-5 mt-4 mt-lg-0">
                    <div className="d-flex gap-3 align-items-center">
                        <div className="circle-bidang">
                            <i class="fas fa-desktop"></i>
                        </div>
                        <div className="desc">
                            <h4 className='text-white'>UI/UX Design</h4>
                            <p className='text-white mb-0'>50+ Finished Project</p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default BidangComp