import React, { useEffect, useState } from 'react'
import { GetPackages } from '../../services/package/GetPackages';
import { Input, Select, Table } from 'antd';
import { useHistory, withRouter } from 'react-router-dom';
import { JsonToCsv } from '../../utils/JsonToCsv';
import { connect } from 'react-redux';
const { Column } = Table;
const { Option } = Select;

 function PackageList(props) {
    const [filteredPackages,setFilteredPackages]=useState([])
    const [packages,setPackages]=useState([])
    const [loading,setLoading]=useState(true)
    const [filterInput,setFilterInput]=useState("")
    const [filterSelect,setFilterSelect]=useState("Collect")
    const [selectedRowKeys,setSelectedRowKeys]=useState([])

    const exportAsFile=()=>{
      console.log(selectedRowKeys);
      const list=packages.filter(pkg=>selectedRowKeys.includes(pkg.serieColis))
      console.log(list);
      JsonToCsv(list)
    }
   const onSelect = (record, selected, selectedRows, nativeEvent)=> {
      //  console.log({record}, {selected}, {selectedRows}, {nativeEvent});
      let selectedQuestionsKeys=[...selectedRowKeys]
      if(selected){
        selectedQuestionsKeys.push(record.serieColis)
      }
      else{
        selectedQuestionsKeys.splice(selectedQuestionsKeys.indexOf(record.serieColis), 1)
      }
      // console.log(selectedQuestionsKeys);
      // this.onChange(selectedQuestionsKeys)
      // this.setState(prev => ({ selectedRowKeys:selectedQuestionsKeys }))
      // this.setState({ selectedRowKeys:selectedQuestionsKeys });
      setSelectedRowKeys(selectedQuestionsKeys)
    };

    const history=useHistory({})
    const getPackages=async()=>{
        await GetPackages(props.userId,handlePackages,setLoading)
    }
    const handlePackages=(value)=>{
      setPackages(value)
      setFilteredPackages(value.filter(p=>p.etatLivraison=="Collect"))
    }
    const handleChange=(value)=>{
      setFilterSelect(value)
      if(value=='Tout'){
        setFilteredPackages(packages)
      }
      else
      setFilteredPackages(packages.filter(p=>p.etatLivraison==value))
      
    }
    useEffect(()=>{
        console.log("packages list component",props);
        getPackages()
    },[])
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' >
      {/* <button onClick={()=>history.push("/sender/dashboard")} >hhhhhhh</button> */}
        <Input
            className=" form-control m-1"
            placeholder="Rechercher un colis.."
            value={filterInput}
            onChange={e => {
              const currValue = e.target.value;
              // setValue(currValue);
              setFilterInput(currValue)
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
        }}
        rowKey={(colis)=>colis.serieColis}
        hideSelectAll={true}
        // pagination={false} 
          loading={loading}
        dataSource={filteredPackages}>
            <Column align="center" sorter={(a, b) => a.serieColis.localeCompare(b.serieColis)} 
          // responsive={['lg']} 
          title="Nom/N°:Serie" dataIndex="serieColis" key="serieColis" />

 <Column align="center" sorter={(a, b) => a.telDistinatair.localeCompare(b.telDistinatair)} 
          // responsive={['lg']} 
          title="Téléphone" dataIndex="telDistinatair" key="telDistinatair" />

<Column align="center" sorter={(a, b) => a.adressDistinatair.localeCompare(b.adressDistinatair)} 
          // responsive={['lg']} 
          title="Adresse Destinataire"  dataIndex="adressDistinatair" key="adressDistinatair"
          responsive={['md']} 
          render={(text, colis, index) => {
            return (<>{colis.adressDistinatair}/{colis.vilDistinateur}</>)}}
          />

<Column align="center" sorter={(a, b) => a.detailColi.localeCompare(b.detailColi)} 
          responsive={['md']} 
          // responsive={['lg']} 
          title="Détail" dataIndex="detailColi" key="detailColi" />

<Column align="center" sorter={(a, b) => a.prisColis.localeCompare(b.prisColis)} 
          // responsive={['lg']} 
          title="Prix" dataIndex="prisColis" key="prisColis" />
            

          <Column align="center" title="Actions" dataIndex="Actions" key="Actions" 
          render={(text, question, index) => {
            return (<div className="" >
              <i className='feather icon-eye m-1' ></i> 
              <i className='feather icon-edit m-1' ></i> 
              <i className='feather icon-trash-2 m-1' ></i> 
            </div>)}}
          /> 

        </Table>
        <div className='d-flex justify-content-end' >
        <button onClick={exportAsFile} className='btn btn-primary rounded' >Exporter</button>
        </div>
    </>
  )
}
const mapStateToProps = state => {
  return { 
      user: state.user,
  }
};
export default connect(mapStateToProps)(withRouter(PackageList))