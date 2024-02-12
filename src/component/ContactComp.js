import React from 'react';
import { Container, Row, Form, Button} from 'react-bootstrap';
import bgContact from '../assets/img/bg-contact.png';
import Swal from 'sweetalert2';

const ContactComp = () => {
    const showWarningAlert = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            html: 'Mohon maaf, fitur ini belum dapat digunakan. <br/> Silakan tunggu di update patch yang selanjutnya!',
            confirmButtonText: 'Tutup'
        });
    };
  return (
    <div className="position-relative pt-5 pb-5">
        <img src={bgContact} alt="" className='position-absolute bottom-0 w-100 h-100 z-1' />
        <Container className='position-relative z-2' id='contact'>
            <Row className='justify-content-center align-items-center h-100'>
                <div className="text-center mb-5">
                    <h4 className='text-custom-title'>Sampaikan Pesan</h4>
                    <h1 className='text-custom fw-bold'>Kepada Saya</h1>
                </div>
                <div className="col-md-6">
                    <Form onSubmit={(e) => { e.preventDefault(); showWarningAlert(); }}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Control type="text" placeholder="Nama" className='form-custom' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control type="text" placeholder="Email" className='form-custom' />
                        </Form.Group>
                        <textarea name="postContent" className='form-control' rows={4} cols={40} defaultValue="Sampaikan Pesanmu Disini..." style={{background: 'none', border: '3px solid #fff', borderRadius: '25px', color: '#fff', padding: '1rem'}}/>
                        <div className="d-grid mt-5">
                            <Button className='btn btn-custom-secondary px-4' type="submit" style={{borderRadius: '50px'}}>
                                Kirim
                            </Button>
                        </div>
                    </Form>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default ContactComp