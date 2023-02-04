import React,{ useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import moment from "moment";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { AddPackage } from '../../services/package/AddPackage'
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

export default function PackageForm() {
  const [packageData,setPackageData]=useState({})
  const addPackage=()=>{
    const data={
        "adressDistinatair": "Gggff",
        "agenceLivraison": "Jendouba",
        "colis1": "0",
        "colis2": "0",
        "colis3": "0",
        "colis4": "0",
        "datAjoutColis": "29/01/2023|14:24",
        "datLivraison": "00",
        "dateFactur": "0",
        "dateRetour": "00",
        "dateRetourDifinitif": "00",
        "dateRinchit": "0",
        "detailColi": "1 kg // 1 Pieces",
        "dicriptionColis": "Ggfdd",
        "echangColis": "Livraison Normal",
        "etaPayment": "Non Payer",
        "etatLivraison": "Collect",
        "fraiLivExtra": "15",
        "fraiLivraison": "8",
        "fraiRetour": "4",
        "idExpiditeur": "0",
        "journalColis": "Creation par: 53491149 le 15/01/2023|17:24\n 2023-01-15 20:40 => Confirmation Pickup par le vendeur ",
        "livreur": "Expiditeur",
        "naturColis": "Colis",
        "naturPayment": "Espece",
        "nomDistinateur": "7",
        "nomExpiditeur": "Adnen",
        "nombreSms": "0",
        "nombreTel": "0",
        "nombreTentative": "0",
        "numeroExpiditeur": "95462285",
        "numeroFacture": "0",
        "numeroRinchit": "0",
        "prisColis": "13.0",
        "raisonRetour": "=>",
        "serieColis": "0012917234704",
        "telDistinatair": "95462285",
        "telLivreur": "0",
        "vilDistinateur": "Jendouba",
        "villExpiditeur": "Sfax"
    }
    AddPackage(data)
  }
  const children = [];
  const locationsList =['Sfax'];

  for (let i = 0; i < locationsList.length; i++) {
    children.push(
      <Option
        key={i}
        value={locationsList[i]}
      >
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
                    <span className="">Nom et prénom</span> <br />
                    <input
                      className="border form-control "
                      id="name"
                      type="text"
                      name="name"
                      value={packageData.name}
                      required
                    />
                  </label>
            

                  <label className="col-12  " htmlFor="email">
                    <span className="">Email</span> <br />
                    <input
                      className="border form-control "
                      id="email"
                      type="text"
                      name="email"
                      value={packageData.email}
                      required
                    />
                  </label>
               

                  
                  

                  <label className=" col-12 " htmlFor="desiredSalary">
                    <span className="float-left"> Salaire mensuel désiré  </span>
                    <input
                  required
                      className="border form-control "
                      id="desiredSalary"
                      type="number"
                      name="desiredSalary"
                      value={packageData.desiredSalary}
                      onChange={this.handleChange}
                    />
                  </label>

                  <label className="">Lieux de travail *</label>
                  <br />
                  <Select
                    className="border form-control w-75 p-0"
                    // style={{ width: '40%' }}
                    defaultValue={this.state.selectedLocations}
                    showSearch
                    mode="multiple"
                    allowClear
                    placeholder="Rechercher pour sélectionner"
                    onChange={this.handleSelect}
                  >
                    {children}
                  </Select>
                  <br />
          

                  <label className="m-2 ">
                    <Switch
                    className="me-1"
                      size="small"
                      checked={packageData.handicap}
                      onChange={() => {
                        this.setState({ handicap: !packageData.handicap });
                      }}
                    />
                    Handicapé
                  </label>
                  <label className="m-2">
                    <Switch
                    className="me-1"

                      size="small"
                      checked={packageData.workAuthorization}
                      onChange={() => {
                        this.setState({
                          workAuthorization: !packageData.workAuthorization,
                        });
                      }}
                    />
                    Autorisation de travail
                  </label>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <label className="col-12  " htmlFor="address">
                    <span className="">Adresse <b>* </b></span> <br />
                    <input
                      className="border form-control "
                      id="address"
                      type="text"
                      name="address"
                      value={packageData.address}
                      onChange={this.handleChange}
                    />
                  </label>
              

                  <div className="  ">
                    <label className="col-12  " htmlFor="tel">
                      <span className="float-left"> Téléphone * </span>
                      <br />

                      <PhoneInput required
                        defaultCountry="TN"
                        numberInputProps={{ className: "form-control" }}
                        placeholder="Entrez le numéro de téléphone"
                        value={packageData.phone}
                        onChange={(value) => {
                          this.setState({ phone: value });
                        }}
                      />
               
                    </label>

              

                    
                  <label className="col-12  " htmlFor="desiredJobPost">
                    <span className="">Poste désiré <b>* </b></span> <br />
                    <input
                    required
                      className="border form-control "
                      id="desiredJobPost"
                      type="text"
                      name="desiredJobPost"
                      value={packageData.desiredJobPost}
                      onChange={this.handleChange}
                    />
                  </label>

                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 "></div>

                <br />
                <div className="text-center mt-4">
                  <input
                    className=" btn btn-primary "
                    type="submit"
                    id="inscri"
                    name="send"
                    value="Enregistrer"
                  />
                </div>
                <br />
              </div>
            </form>

      <button onClick={addPackage} className='btn btn-primary rounded' >Ajouter</button>
    </div>
  )
}
