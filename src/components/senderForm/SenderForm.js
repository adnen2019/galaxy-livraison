import { Select, Switch, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { AddSender } from '../../services/sender/AddSender';
import moment from 'moment';
import { useParams,useHistory } from 'react-router-dom';
import { UpdateSender } from '../../services/sender/UpdateSender';
const {Option}=Select
export default function SenderForm(props) {
  const [senderData, setSenderData] = useState({
    //par défauts
    expixiteur1:"0",
    expixiteur3:"0",
    expixiteur5:"0",
    expixiteur4:"0",
    nombreColisRetour:"0",
    nombreColisLivrer:"0",
    listFactur:"0",
    //formulaire variables
    nomExpiditeur:"",
    telExpiditeur:"",
    
    raisonSosial:"",
    agenceExpiditeur:"",
    
    vilExpiditeur:"",
    adressExpiditeur:"",
    
    commentairExpiditeur:"",
    detailExpiditeur:"",
    
    prixRetour:"",
    prixExtra:"",
    prixLivrer:"",
    
    emailExpiditeur:"",
    motdepasseExpiditeur:"",
    //submit variables
    idExpiditeur:"",
    expixiteur2:"",
    
  });
  const history=useHistory()

  const {id} = useParams();
  const submit =(e)=>{
    e.preventDefault()
    //update
    if(senderData.idExpiditeur){
      UpdateSender(senderData,()=>{
        notification.success({
          description:"modifié avec succée",
          className: 'custom-class',
          style: {
           width: 600,
           backgroundColor:"#d4edda",
           marginTop:"5rem"
         },
         });
      })
    }
    else{
      let data=senderData
      let arr=props.senders.map(s=>Number(s.idExpiditeur))
      let max=Math.max(...arr)
      data.idExpiditeur=max+1
      data.expixiteur2=moment().format("yyyyMMDDHHmmssS")
      AddSender(data,()=>{
        notification.success({
          description:"ajouté avec succée",
          className: 'custom-class',
          style: {
           width: 600,
           backgroundColor:"#d4edda",
           marginTop:"5rem"
         },
         });
      })

    }
    history.push("/admin/senders")
  }
  useEffect(()=>{
    if(!props.senders?.length){
      props.getSenders()

    }
if(id){
  let sender=props.senders.find(s=>s.idExpiditeur==id)
  if(sender)
  setSenderData(sender)
}
  },[props.sendersLoad])
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
  "Kebili",
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
      <form className=" rounded" onSubmit={submit}>
        <div className="row">
          <div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">Nom *</span> <br />
              <input
                className="border form-control "
                id="nomExpiditeur"
                type="text"
                name="nomExpiditeur"
                value={senderData.nomExpiditeur}
                required
                onChange={(e)=>setSenderData({...senderData,nomExpiditeur:e.target.value})}
              />
            </label>
          </div>
            
          <div className=" col-lg-6 col-sm-12 ">
           
            <label className="col-12  " htmlFor="name">
              <span className="">Téléphone *</span> <br />
              <input
                className="border form-control "
                id="telExpiditeur"
                type="phone"
                name="telExpiditeur"
                value={senderData.telExpiditeur}
                required
                min={8}
                onChange={(e)=>setSenderData({...senderData,telExpiditeur:e.target.value})}
              />
            </label>
          </div>
<div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">Raison social *</span> <br />
              <input
                className="border form-control "
                id="raisonSosial"
                type="text"
                name="raisonSosial"
                value={senderData.raisonSosial}
                required
                onChange={(e)=>setSenderData({...senderData,raisonSosial:e.target.value})}
              />
            </label>
          </div>
           <div className=" col-lg-6 col-sm-12 ">
            <label className="">Agence *</label>
            <br />
            <Select
              className="border form-control p-0 d-flex align-items-center"
              // style={{ width: '40%' }}
              value={senderData.agenceExpiditeur}
              showSearch
              mode=""
              allowClear
              required
              placeholder="Rechercher pour sélectionner"
              onChange={(value)=>setSenderData({...senderData,agenceExpiditeur:value})}
            >
              {children}
            </Select>
            <br />
          </div>
          <div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">Ville *</span> <br />
              <input
                className="border form-control "
                id="vilExpiditeur"
                type="text"
                name="vilExpiditeur"
                value={senderData.vilExpiditeur}
                required
                onChange={(e)=>setSenderData({...senderData,vilExpiditeur:e.target.value})}
              />
            </label>
          </div>
                    <div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">Adresse *</span> <br />
              <input
                className="border form-control "
                id="adressExpiditeur"
                type="text"
                name="adressExpiditeur"
                value={senderData.adressExpiditeur}
                required
                onChange={(e)=>setSenderData({...senderData,adressExpiditeur:e.target.value})}
              />
            </label>
          </div>
          <div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">commentaire *</span> <br />
              <input
                className="border form-control "
                id="commentairExpiditeur"
                type="text"
                name="commentairExpiditeur"
                value={senderData.commentairExpiditeur}
                required
                onChange={(e)=>setSenderData({...senderData,commentairExpiditeur:e.target.value})}
              />
            </label>
          </div>
  
          <div className="col-lg-6 col-sm-12">
            <label className="col-12  " htmlFor="address">
              <span className="">
                detail <b>* </b>
              </span>{" "}
              <br />
              <input
                className="border form-control "
                id="detailExpiditeur"
                type="text"
                required
                name="detailExpiditeur"
                value={senderData.detailExpiditeur}
                onChange={(e)=>setSenderData({...senderData,detailExpiditeur:e.target.value})}
              />
            </label>
          </div>
         

  
<br/>
<div className=" col-lg-4 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> prix Retour *</span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"
                 value={senderData.prixRetour}
                onChange={(e)=>{
                  // setLongeur(e.target.value)
                  setSenderData({...senderData,prixRetour:e.target.value})
                }
                }
              />
            </label>
          </div>
     <div className=" col-lg-4 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> prix Extra *</span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"
                 value={senderData.prixExtra}
                onChange={(e)=>{
                  // setLongeur(e.target.value)
                  setSenderData({...senderData,prixExtra:e.target.value})
                }
                }
              />
            </label>
          </div>
          <div className=" col-lg-4 col-sm-6 ">
            <label className=" col-12 " htmlFor="desiredSalary">
              <span className="float-left"> prix Livrer *</span>
              <input
                required
                className="border form-control "
                id="desiredSalary"
                type="number"
                name="desiredSalary"
                 value={senderData.prixLivrer}
                onChange={(e)=>{
                  // setLongeur(e.target.value)
                  setSenderData({...senderData,prixLivrer:e.target.value})
                }
                }
              />
            </label>
          </div>
          <div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">Email *</span> <br />
              <input
                className="border form-control "
                id="emailExpiditeur"
                type="email" 
                name="emailExpiditeur"
                value={senderData.emailExpiditeur}
                required
                onChange={(e)=>setSenderData({...senderData,emailExpiditeur:e.target.value})}
              />
            </label>
          </div>
          <div className=" col-lg-6 col-sm-12 ">
            <label className="col-12  " htmlFor="name">
              <span className="">mot de passe *</span> <br />
              <input
                className="border form-control "
                id="motdepasseExpiditeur"
                type="text"
                name="motdepasseExpiditeur"
                value={senderData.motdepasseExpiditeur}
                required
                onChange={(e)=>setSenderData({...senderData,motdepasseExpiditeur:e.target.value})}
              />
            </label>
          </div>
       
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
    </div>
  )
}
