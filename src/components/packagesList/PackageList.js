import React, { useEffect, useState } from "react";
import { GetPackages } from "../../services/package/GetPackages";
import { Input, Modal, Select, Table } from "antd";
import { useHistory, withRouter } from "react-router-dom";
import { JsonToCsv } from "../../utils/JsonToCsv";
import { connect } from "react-redux";
import { DeletePackage } from "../../services/package/DeletePackage";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import BillModal from "../bill/BillModal";
const { Column } = Table;
const { Option } = Select;

function PackageList(props) {
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [packages, setPackages] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [filterSelect, setFilterSelect] = useState("Collect");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalVisible,setModalVisible]=useState(false)
  const [pkg,setPkg]=useState({})

  const deletePackage=(pkg)=>{
    if(pkg.etatLivraison=="Collect"){
    Modal.confirm({
      title: "Supprimer offre",
      icon: <ExclamationCircleOutlined />,
      content:
        "voulez vous supprimer ce colis ",
      okText: "Supprimer",
      okType: "danger",
      cancelText: "Annuler",
      onOk: () => {
        DeletePackage(pkg.serieColis)
        // this.Delete(jobPost._id, index);
      },
      // onCancel:()=>{alert(index)}
    });}
  }
  const exportAsFile = () => {
    console.log(selectedRowKeys);
    let list = props.packages.filter((pkg) =>
      selectedRowKeys.includes(pkg.serieColis)
    );
    list = list.map((pkg) => ({
      nomDistinateur:pkg.nomDistinateur,
      telDistinatair:pkg.telDistinatair,
      vilDistinateur:pkg.vilDistinateur,
      adressDistinatair:pkg.adressDistinatair,
      prisColis:pkg.prisColis,
      dicriptionColis:pkg.dicriptionColis,
    }));
    JsonToCsv(list);
  };
  const onSelect = (record, selected, selectedRows, nativeEvent) => {
    console.log({ record }, { selected }, { selectedRows }, { nativeEvent });
    let selectedQuestionsKeys = [...selectedRowKeys];
    if (selected) {
      selectedQuestionsKeys.push(record.serieColis);
    } else {
      selectedQuestionsKeys.splice(
        selectedQuestionsKeys.indexOf(record.serieColis),
        1
      );
    }
    // console.log(selectedQuestionsKeys);
    // this.onChange(selectedQuestionsKeys)
    // this.setState(prev => ({ selectedRowKeys:selectedQuestionsKeys }))
    // this.setState({ selectedRowKeys:selectedQuestionsKeys });
    setSelectedRowKeys(selectedQuestionsKeys);
  };
  const onSelectAll = (selected, selectedRows, changeRows) => {
    if (selected) {
      setSelectedRowKeys(filteredPackages.map((p) => p.serieColis));
    } else {
      setSelectedRowKeys([]);
    }
  };
  const history = useHistory({});
  // const getPackages = async () => {
  //   await GetPackages(props.userId, handlePackages, setLoading);
  // };
  const handlePackages = (value) => {
    setPackages(value);
    setFilteredPackages(value.filter((p) => p.etatLivraison == "Collect"));
  };
  const handleChange = (value) => {
    setFilterSelect(value);
    if (value == "Tout") {
      setFilteredPackages(props.packages);
    } else
      setFilteredPackages(props.packages.filter((p) => p.etatLivraison == value));
  };
  useEffect(() => {
    handlePackages(props.packages);
  }, [props.packages]);
  let filteredData=filteredPackages
  if (filterInput != "")
  {filteredData = filteredData.filter((pkg) => {
    let filter = filterInput.toLowerCase();

    let telDistinatair=pkg.telDistinatair.toString()
    let serieColis=pkg.serieColis.toString()
    let vilDistinateur=pkg.vilDistinateur.toLowerCase()
    let nomDistinateur=pkg.nomDistinateur.toLowerCase()
    let prisColis=pkg.prisColis.toString()
    let adressDistinatair=pkg.adressDistinatair.toLowerCase()
    let dicriptionColis=pkg.dicriptionColis.toLowerCase()
    

    return  (telDistinatair.includes(filter)||serieColis.includes(filter)||vilDistinateur.includes(filter)||
    nomDistinateur.includes(filter)||prisColis.includes(filter)||adressDistinatair.includes(filter)||
    dicriptionColis.includes(filter)) 
    
  });}
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {/* <button onClick={()=>history.push("/sender/dashboard")} >hhhhhhh</button> */}
        <Input
          className=" form-control m-1"
          placeholder="Rechercher un colis.."
          value={filterInput}
          onChange={(e) => {
            const currValue = e.target.value;
            // setValue(currValue);
            setFilterInput(currValue);
            //set filtered list
            // this.setState({ filterInput: currValue })
            //   this.setState(prev => ({
            //     filteredQuestions: prev.questions.filter(question =>
            //       (question.question_fr.includes(currValue))
            //     )
            //   }))
            // const filteredData = this.state.question.filter(entry =>
            //   entry.name.includes(currValue)
            // );
            // setDataSource(filteredData);
          }}
        />
        <Select
          // style={{ width: 200 }}
          placeholder="Selectionner.."
          className="mb-2 w-50"
          // style={{width:"100%"}}
          onChange={handleChange}
          value={filterSelect}
        >
          <Option value="Tout">Tout</Option>
          <Option value="Collect">Collect</Option>
          <Option value="EnCourdeVerification">En Cours de Verification</Option>
          <Option value="Echange">Echange</Option>
          <Option value="Livrer">Livrer</Option>
          <Option value="depot">depot</Option>
          <Option value="Annuler">Annuler</Option>
          <Option value="Retour">Retour</Option>
        </Select>
      </div>
      <Table
        rowSelection={{
          selectedRowKeys,
          onSelect: onSelect,
          onSelectAll: onSelectAll,
        }}
        rowKey={(colis) => colis.serieColis}
        // hideSelectAll={false}
        // pagination={false}
        loading={props.loading}
        dataSource={filteredData}
      >
        <Column
          align="center"
          sorter={(a, b) => a.serieColis.localeCompare(b.serieColis)}
          // responsive={['lg']}
          title="Nom/N°:Serie"
          dataIndex="serieColis"
          key="serieColis"
        />

        <Column
          align="center"
          sorter={(a, b) => a.telDistinatair.localeCompare(b.telDistinatair)}
          // responsive={['lg']}
          title="Téléphone"
          dataIndex="telDistinatair"
          key="telDistinatair"
        />

        <Column
          align="center"
          sorter={(a, b) =>
            a.adressDistinatair.localeCompare(b.adressDistinatair)
          }
          // responsive={['lg']}
          title="Adresse Destinataire"
          dataIndex="adressDistinatair"
          key="adressDistinatair"
          responsive={["md"]}
          render={(text, colis, index) => {
            return (
              <>
                {colis.adressDistinatair}/{colis.vilDistinateur}
              </>
            );
          }}
        />

        <Column
          align="center"
          sorter={(a, b) => a.detailColi.localeCompare(b.detailColi)}
          responsive={["md"]}
          // responsive={['lg']}
          title="Détail"
          dataIndex="detailColi"
          key="detailColi"
        />

        <Column
          align="center"
          sorter={(a, b) => a.prisColis.localeCompare(b.prisColis)}
          // responsive={['lg']}
          title="Prix"
          dataIndex="prisColis"
          key="prisColis"
        />

        <Column
          align="center"
          title="Actions"
          dataIndex="Actions"
          key="Actions"
          render={(text, pkg, index) => {
            return (
              <div className="">
                <i onClick={()=>{setPkg(pkg)
                setModalVisible(true)
                }} className="feather icon-eye m-1"></i>
                <i className="feather icon-edit m-1"></i>
                <span role="button" ><i  onClick={()=>deletePackage(pkg)} className="feather icon-trash-2 m-1"></i></span>
              </div>
            );
          }}
        />
      </Table>
      <div className="d-flex justify-content-end">
        <button onClick={exportAsFile} className="btn btn-primary rounded">
          Exporter
        </button>
      </div>
      {modalVisible&&<BillModal pkg={pkg} modalVisible={modalVisible} setModalVisible={setModalVisible} />}

    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(withRouter(PackageList));
