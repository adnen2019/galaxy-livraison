import { Modal } from 'antd'
import React from 'react'
import { CloseOutlined } from "@ant-design/icons";
import { PDFViewer } from '@react-pdf/renderer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {PDFDownloadLink} from '@react-pdf/renderer';
import Invoice from '../pdf/Invoice';

 function InvoiceModal({modalVisible,setModalVisible,bill,user}) {
 console.log(bill);
  return (
    <div>
         <Modal
          title={<h5 className="m-1 text-primary"><b>Facture</b></h5>}
          className="mt-5"
          centered
          closeIcon={
            <i className="mt-5 ">
              <CloseOutlined
                // style={{ fontSize: "20px", color: "#08c", margin: "20px" }}
                className="m-3"
              />
            </i>
          }
          
          visible={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          footer={<>
          <PDFDownloadLink document={<Invoice user={user.user} bill={bill} />} >
          <button  className='btn btn-primary' >Imprimer</button>
          </PDFDownloadLink>
          </>}
     
        >

<div className="">
<PDFViewer
 style={{height:"27rem"}}
  className='w-100'
   >
 <Invoice user={user.user} bill={bill} />
  </PDFViewer>
            </div>
        </Modal>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(withRouter(InvoiceModal));
