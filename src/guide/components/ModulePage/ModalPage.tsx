import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalPage = () => {
    const [AlertShow, setAlertShow] = useState(false);
    const handleAlertClose = () => setAlertShow(false);
    const handleAlertShow = () => setAlertShow(true);

    const [BasicShow, setBasicShow] = useState(false);
    const handleBasicClose = () => setBasicShow(false);
    const handleBasicShow = () => setBasicShow(true);
    return (
        <section className='section module-guide'>
            <div className="section-header">
                <h2 className='section-h2'>Modals</h2>
            </div>
            <div className="section-body">
                <h3 className="content-h3">Content Title</h3>
                <button type="button" className='btn module-a fill-primary' onClick={handleAlertShow}>
                    Modal Alert
                </button>
                <Modal className='modal-alert' backdrop="static" show={AlertShow} onHide={handleAlertClose}>
                    <Modal.Dialog>
                        <Modal.Header className='blind'>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <section className="msg-sec">
                                <h4 className="sec-tit">Alert 제목 텍스트가 들어가는 영역입니다.</h4>
                                <p className="sec-txt"><span className="txt-primary">Alert 설명 텍스트</span>가 들어가는 영역입니다.</p>
                            </section>
                        </Modal.Body>

                        <Modal.Footer>
                            <button type='button' className='btn module-a fill-normal' onClick={handleAlertClose}><span>Close</span></button>
                            <button type='button' className='btn module-a fill-primary' onClick={handleAlertClose}><span>Save</span></button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                <button type="button" className='btn module-a fill-primary' onClick={handleBasicShow}>
                    Modal Full
                </button>
                <Modal className='modal-full' show={BasicShow} onHide={handleBasicClose}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <section>
                                <div style={{height: '400px', background:'gray'}}></div>
                                <div style={{height: '400px', background:'darkgray'}}></div>
                                <div style={{height: '400px', background:'gray'}}></div>
                            </section>
                        </Modal.Body>

                        <Modal.Footer>
                            <button type='button' className='btn module-a fill-normal' onClick={handleBasicClose}><span>Close</span></button>
                            <button type='button' className='btn module-a fill-primary' onClick={handleBasicClose}><span>Save</span></button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </div>
        </section>
    )
}
export default ModalPage;