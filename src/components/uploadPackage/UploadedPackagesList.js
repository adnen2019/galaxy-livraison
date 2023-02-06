import { Table } from 'antd'
import moment from 'moment';
import React from 'react'
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { AddPackage } from '../../services/package/AddPackage';
const { Column } = Table;

 function UploadedPackagesList(props) {
  const history=useHistory()

  const add=async()=>{
    const defaultVars={
      colis1: "0",
    colis2: "0",
    colis3: "0",
    colis4: "0",
    etaPayment: "Non Payer",
    datLivraison: "00",
    dateRetourDifinitif: "00",
    dateRetour: "00",
    etatLivraison: "Collect",
    livreur: "Expiditeur",
    telLivreur: "0",
    raisonRetour: "=>",
    nombreTentative: "0",
    nombreSms: "0",
    nombreTel: "0",
    numeroRinchit: "0",
    dateRinchit: "0",
    numeroFacture: "0",
    dateFactur: "0",
    echangColis: "Livraison Normal",
    naturPayment: "Espece",
    naturColis: "Colis",
    }
    const user=props.user.user
    const {nomExpiditeur,
      telExpiditeur,
      vilExpiditeur,
       prixLivrer,
       prixRetour,
      prixExtra,
      idExpiditeur}=user
    let list=props.packages.map((pkg)=>({
      ...pkg,
      agenceLivraison:pkg.vilDistinateur,
      //idexpiditeur+MMddHHmmssSS
      //varaible user
      nomExpiditeur: nomExpiditeur,
      numeroExpiditeur: telExpiditeur,
      villExpiditeur: vilExpiditeur,
      fraiLivraison: prixLivrer,
      fraiRetour: prixRetour,
      fraiLivExtra: prixExtra,
      idExpiditeur: idExpiditeur,
      //
      detailColi:1+" kg // "+1+" Pieces",
    }))
    for await(const data of list) {
     await AddPackage({
        ...data,
      ...defaultVars,
      serieColis: idExpiditeur+moment().format("MMDDHHmmssSS"),
      datAjoutColis: moment().format("DD/MM/yyyy|HH:mm"), //moment dd/MM/yyyy|HH:mm
      journalColis:"Creation par: "+nomExpiditeur+" le "+moment().format("DD/MM/yyyy|HH:mm")
      },()=>{})
      setTimeout(()=>{},10)
    }
    history.push("/sender/dashboard")
  }
  return (
    <div>
        <Table 
        // rowSelection={{
        //   selectedRowKeys,
        //   // onChange: this.onChange,
        //   onSelect: this.onSelect,
        // }}
        hideSelectAll={true}
        // pagination={false} 
          // loading={loading}
        dataSource={props.packages}>
            <Column align="center" sorter={(a, b) => a.nomDistinateur.localeCompare(b.nomDistinateur)} 
          // responsive={['lg']} 
          title="Nom" dataIndex="nomDistinateur" key="nomDistinateur" />

 <Column align="center" sorter={(a, b) => a.telDistinatair.localeCompare(b.telDistinatair)} 
          // responsive={['lg']} 
          title="Téléphone" dataIndex="telDistinatair" key="telDistinatair" />

<Column align="center" sorter={(a, b) => a.adressDistinatair.localeCompare(b.adressDistinatair)} 
          // responsive={['lg']} 
          title="Adresse"  dataIndex="adressDistinatair" key="adressDistinatair"
          responsive={['md']} 
          
          />
{/* 
<Column align="center" sorter={(a, b) => a.detailColi.localeCompare(b.detailColi)} 
          responsive={['md']} 
          // responsive={['lg']} 
          title="Détail" dataIndex="detailColi" key="detailColi" /> */}

<Column align="center" sorter={(a, b) => a.prisColis.localeCompare(b.prisColis)} 
          // responsive={['lg']} 
          title="Prix" dataIndex="prisColis" key="prisColis" />
            

          {/* <Column align="center" title="Actions" dataIndex="Actions" key="Actions" 
          render={(text, question, index) => {
            return (<div className="" >
              <i className='feather icon-eye m-1' ></i> 
              <i className='feather icon-edit m-1' ></i> 
              <i className='feather icon-trash-2 m-1' ></i> 
            </div>)}}
          />  */}

        </Table>
        <div className='d-flex justify-content-end' >
          <button onClick={()=>{props.setPackages([])}} className='btn btn-secondary rounded m-1' >Annuler</button>
          <button onClick={add} className='btn btn-primary rounded m-1' >Ajouter</button>
        </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(withRouter(UploadedPackagesList));