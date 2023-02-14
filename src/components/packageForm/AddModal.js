import { Modal } from "antd";
import React from "react";
import Bill from "../pdf/Bill";
import { CloseOutlined } from "@ant-design/icons";
import { PDFViewer } from "@react-pdf/renderer";
import { useHistory, withRouter } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { connect } from "react-redux";

function AddModal({ modalVisible, setModalVisible, pkg,user,newPackage }) {
  const history=useHistory()

  return (
    <div>
      <Modal
        title={null}
        className="mt-5 ms-5"
        centered
        //   closeIcon={
        //     <i className="mt-5 ">
        //       <CloseOutlined
        //         // style={{ fontSize: "20px", color: "#08c", margin: "20px" }}
        //         className="m-3"
        //       />
        //     </i>
        //   }

        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <div className="d-flex flex-column align-items-center">
          <button onClick={newPackage} className="btn btn-primary btn-lg rounded w-75 m-2">Nouveau Colis</button>
          <PDFDownloadLink className="w-75 m-2" document={<Bill user={user.user} pkg={pkg} />}>
            <button className="btn btn-primary btn-lg rounded my-2 w-100">Imprimer</button>
          </PDFDownloadLink>
          <button onClick={()=>history.push("/sender/dashboard")} className="btn btn-primary btn-lg rounded w-75 m-2">Sortir</button>

        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  export default connect(mapStateToProps)(withRouter(AddModal));
