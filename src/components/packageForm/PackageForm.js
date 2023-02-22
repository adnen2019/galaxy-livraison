import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { AddPackage } from "../../services/package/AddPackage";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import AddModal from "./AddModal";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

 function PackageForm(props) {
  const history=useHistory()

  const [modalVisible, setModalVisible] = useState(false)
  const [pkg, setPkg] = useState({})

  const [nombre, setNombre] = useState(1)
  const [poids, setPoids] = useState(1)

  const [hauteur, setHauteur] = useState("")
  const [longeur, setLongeur] = useState("")
  const [largeur, setLargeur] = useState("")

  const [packageData, setPackageData] = useState({
    //par défauts
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
    //formulaire variables

    nomDistinateur: "",
    telDistinatair: "",
    adressDistinatair: ""
    ,
    dicriptionColis: "",

    vilDistinateur: "",
    agenceLivraison: "",

    prisColis: "",

    // detailColi: "1 kg // 1 Pieces",
    echangColis: "Livraison Normal",
    naturPayment: "Espece",
    naturColis: "Colis",
    // journalColis:"Creation par: 53491149 le 15/01/2023|17:24\n 2023-01-15 20:40 => Confirmation Pickup par le vendeur ",
  });
const newPackage=()=>{
  setNombre(1)
setPoids(1)
setHauteur("")
setLongeur("")
setLargeur("")
  setPackageData({
    //par défauts
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
    //formulaire variables

    nomDistinateur: "",
    telDistinatair: "",
    adressDistinatair: ""
    ,
    dicriptionColis: "",

    vilDistinateur: "",
    agenceLivraison: "",

    prisColis: "",

    // detailColi: "1 kg // 1 Pieces",
    echangColis: "Livraison Normal",
    naturPayment: "Espece",
    naturColis: "Colis",
    // journalColis:"Creation par: 53491149 le 15/01/2023|17:24\n 2023-01-15 20:40 => Confirmation Pickup par le vendeur ",
  })
  setModalVisible(false)
  setPkg({})
}
  useEffect(()=>{
    // console.log(props)
    // console.log(moment().format("DD/MM/yyyy|HH:mm"))
    // console.log(moment().format("MMDDHHmmssSS"))
  },[])
  const addPackage = (e) => {
e.preventDefault()
    //get user data
    const user=props.user.user
    const {nomExpiditeur,
      telExpiditeur,
      agenceExpiditeur,
       prixLivrer,
       prixRetour,
      prixExtra,
      idExpiditeur}=user
    let data = {
      ...packageData,
      //idexpiditeur+MMddHHmmssSS
      serieColis: idExpiditeur+moment().format("MMDDHHmmssSS"),
      datAjoutColis: moment().format("DD/MM/yyyy|HH:mm"), //moment dd/MM/yyyy|HH:mm
      //varaible user
      nomExpiditeur: nomExpiditeur,
      numeroExpiditeur: telExpiditeur,
      villExpiditeur: agenceExpiditeur,
      fraiLivraison: prixLivrer,
      fraiRetour: prixRetour,
      fraiLivExtra: prixExtra,
      idExpiditeur: idExpiditeur,
      //
      prisColis:packageData.prisColis=="0"?"0":Number(packageData.prisColis)+Number(prixLivrer),
      detailColi:poids+" kg // "+nombre+" Pieces",
      dicriptionColis:packageData.dicriptionColis+(packageData.naturColis=="Gros Colis"?"/h:"+hauteur+"/Log:"+longeur+"/Lar:"+largeur:""),
      journalColis:"Creation par: "+nomExpiditeur+" le "+moment().format("DD/MM/yyyy|HH:mm")
    };
    AddPackage(data,()=>{
      notification.success({
        description:"ajouté avec succée",
        className: 'custom-class',
        style: {
         width: 600,
         backgroundColor:"#d4edda",
         marginTop:"5rem"
       },
       });
       //show modal
       setPkg(data)
       setModalVisible(true)
      // history.push("/sender/dashboard")
    });
  };
 
  const handleChange = (e) => {
    // console.log(e.target.value);
  };
  const handleSelect = (e) => {
    // console.log(e);
  };
  const children = [];
  const locationsList = ["Ariana",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabes",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kef",
  "Kelibia",
  "Manouba",
  "Mahdia",
  "Médenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan"]

  for (let i = 0; i < locationsList.length; i++) {
    children.push(
      <Option key={i} value={locationsList[i]}>
        {locationsList[i]}
      </Option>
    );
  }
  return (
    <div>
      <form className=" rounded" onSubmit={addPackage}>
        <div className="row">
          <div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">Nom et prénom *</span> <br />
              <input
                className="border form-control "
                id="nomDistinateur"
                type="text"
                name="nomDistinateur"
                value={packageData.nomDistinateur}
                required
                onChange={(e)=>setPackageData({...packageData,nomDistinateur:e.target.value})}
              />
            </label>
          </div>
          <div className=" col-lg-6 col-sm-12 ">
              {/* <span className="float-left"> Téléphone * </span> */}
              {/* <br />
              <PhoneInput
                required
                defaultCountry="TN"
                numberInputProps={{ className: "form-control" }}
                placeholder="Entrez le numéro de téléphone"
                value={packageData.telDistinatair}
                onChange={(value) => {
                  setPackageData({...packageData,telDistinatair:value})
                }}
              /> */}
            <label className="col-12  " htmlFor="name">
              <span className="">Téléphone *</span> <br />
              <input
                className="border form-control "
                id="telDistinatair"
                type="phone"
                name="telDistinatair"
                value={packageData.telDistinatair}
                required
                min={8}
                onChange={(e)=>setPackageData({...packageData,telDistinatair:e.target.value})}
              />
            </label>
          </div>

          <div className=" col-lg-12 col-sm-12 ">
            <label className="col-12  " htmlFor="email">
              <span className="">Description Colis *</span> <br />
              <textarea
                className="border form-control "
                id="email"
                type="text"
                name="dicriptionColis"
                value={packageData.dicriptionColis}
                required
                onChange={(e)=>setPackageData({...packageData,dicriptionColis:e.target.value})}
              />
            </label>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="col-12  " htmlFor="address">
              <span className="">
                Adresse Destinataire <b>* </b>
              </span>{" "}
              <br />
              <input
                className="border form-control "
                id="adressDistinatair"
                type="text"
                required
                name="adressDistinatair"
                value={packageData.adressDistinatair}
                onChange={(e)=>setPackageData({...packageData,adressDistinatair:e.target.value})}
              />
            </label>
          </div>
          <div className=" col-lg-6 col-sm-12 ">
            <label className="">ville *</label>
            <br />
            <Select
              className="border form-control p-0 d-flex align-items-center"
              // style={{ width: '40%' }}
              defaultValue={packageData.vilDistinateur}
              showSearch
              mode=""
              allowClear
              required
              placeholder="Rechercher pour sélectionner"
              onChange={(value)=>setPackageData({...packageData,vilDistinateur:value,agenceLivraison:value})}
            >
              {children}
            </Select>
            <br />
          </div>
          <div className=" col-lg-6 col-sm-12 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> Prix(d) + {props?.user?.user?.prixLivrer??0}d </span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"
                value={packageData.prisColis}
                onChange={(e)=>setPackageData({...packageData,prisColis:e.target.value})}
              />
            </label>
          </div>
          <div className=" col-lg-3 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> Nombre </span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"
                value={nombre}
                onChange={(e)=>{
                  setNombre(e.target.value)
                  // setPackageData({...packageData,prisColis:e.target.value})
                }
                }
              />
            </label>
          </div>
          <div className=" col-lg-3 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> Poids(Kg) </span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"

                value={poids}
                onChange={(e)=>{
                  setPoids(e.target.value)
                  // setPackageData({...packageData,prisColis:e.target.value})
                }
                }
              />
            </label>
          </div>
          <div className=" col-lg-4 col-sm-6 ">
          <label className="m-2">
            {/* prisColis="0" */}
              <Switch
                className="mr-1"
                size="small"
                checked={packageData.prisColis=="0"}
                onChange={() => {
                  let prix=packageData.prisColis=="0"?"":"0"
                 setPackageData({...packageData,prisColis:prix})
                }}
              />
              Colis Gratuit
            </label>
            </div>
          <div className=" col-lg-4 col-sm-6 ">

            <label className="m-2">
            {/* "Echange"+"champ elli bech tektbou"
              "Livraison Normal" */}
              <Switch
                className="mr-1"
                size="small"
                checked={packageData.echangColis!="Livraison Normal"}
                onChange={() => {
                  let echange=packageData.echangColis=="Livraison Normal"?"Echange:":"Livraison Normal"
                  setPackageData({...packageData,echangColis:echange})
                }}
              />
              Echange
            </label>
          </div>
          <div className=" col-lg-4 col-sm-6 ">

          <label className="m-2">
          {/* "Cheque/Espece"
          "Espece" */}
              <Switch
                className="mr-1"
                size="small"
                checked={packageData.naturPayment=="Cheque/Espece"}
                onChange={() => {
                  let natureP=packageData.naturPayment=="Cheque/Espece"?"Espece:":"Cheque/Espece"
                  setPackageData({...packageData,naturPayment:natureP})
                }}
              />
              Payment cheque
            </label>
            </div>
          <div className=" col-lg-4 col-sm-6 ">

            <label className="m-2">
            {/* "Gros Colis"
            "Colis"
            add 3 inputs hauteur longeur largeur 
            description+"/h:"+hauteur+"/Log:"+longeur+"/Lar:"+largeur);
            */}
              <Switch
                className="mr-1"
                size="small"
                checked={packageData.naturColis=="Gros Colis"}
                onChange={() => {
                  let nature=packageData.naturColis=="Gros Colis"?"Colis:":"Gros Colis"
                  setPackageData({...packageData,naturColis:nature})
                }}
              />
              Colis vloumineux
            </label>
            </div>
          <div className=" col-lg-4 col-sm-6 ">

            <label className="m-2">
              <Switch
                className="mr-1"
                size="small"
                checked={packageData.naturColis=="Document"}
                onChange={() => {
                  let nature=packageData.naturColis=="Document"?"Colis:":"Document"
                  setPackageData({...packageData,naturColis:nature})
                  // setState({
                  //   workAuthorization: !packageData.workAuthorization,
                  // });
                }}
              />
              Document
            </label>
</div>
<div className=" col-lg-4 col-sm-6 ">
</div>
{packageData.naturColis=="Gros Colis"&&<>
<br/>
<div className=" col-lg-4 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> Longeur </span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"
                value={longeur}
                onChange={(e)=>{
                  setLongeur(e.target.value)
                  // setPackageData({...packageData,prisColis:e.target.value})
                }
                }
              />
            </label>
          </div>
          <div className=" col-lg-4 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> Largeur </span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"

                value={largeur}
                onChange={(e)=>{
                  setLargeur(e.target.value)
                  // setPackageData({...packageData,prisColis:e.target.value})
                }
                }
              />
            </label>
          </div>
          <div className=" col-lg-4 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> Hauteur </span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"

                value={hauteur}
                onChange={(e)=>{
                  setHauteur(e.target.value)
                  // setPackageData({...packageData,prisColis:e.target.value})
                }
                }
              />
            </label>
          </div>
          </>}
          {packageData.echangColis!=="Livraison Normal"&&<>
                <br/>
              <div className="col-lg-6 col-sm-12">
              <label className="col-12  " htmlFor="address">
                <span className="">
                  Echange 
                </span>{" "}
                <br />
                <input
                  className="border form-control "
                  id="adressDistinatair"
                  type="text"
                  
                  name="adressDistinatair"
                  value={packageData.echangColis}
                  onChange={(e)=>setPackageData({...packageData,echangColis:e.target.value})}
                />
              </label>
            </div>
            </>  }
          <br />
          
          <div className=" col-12 d-flex justify-content-center mt-4">
            <input
              className=" btn btn-primary "
              type="submit"
              id="inscri"
              name="send"
              value="Enregistrer"
            />
          </div>
        </div>
          <br />
      </form>
                {modalVisible && <AddModal modalVisible={modalVisible} setModalVisible={setModalVisible} pkg={pkg} newPackage={newPackage} />}
    </div>
  );
}
const mapStateToProps = state => {
  return { 
      user: state.user,
  }
};
export default connect(mapStateToProps)(withRouter(PackageForm))
