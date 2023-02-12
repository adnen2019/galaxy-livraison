import { Modal } from 'antd'
import React from 'react'
import Bill from '../pdf/Bill'
import { CloseOutlined } from "@ant-design/icons";
import { PDFViewer } from '@react-pdf/renderer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {PDFDownloadLink} from '@react-pdf/renderer';

 function BillModal({modalVisible,setModalVisible,pkg,user}) {
  const printPackage=()=>{
PDFDownloadLink(<Bill />, `${__dirname}/example.pdf`);

  }
  return (
    <div>
         <Modal
          title={<h5 className="m-1 text-primary"><b>Colis</b></h5>}
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
          <PDFDownloadLink document={<Bill user={user.user} pkg={pkg} />} >
          <button  className='btn btn-primary' >Imprimer</button>
          </PDFDownloadLink>
          </>}
     
        >

<div className="">
<PDFViewer
 style={{height:"27rem"}}
  className='w-100'
   >
 <Bill user={user.user} pkg={pkg} />
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
export default connect(mapStateToProps)(withRouter(BillModal));
