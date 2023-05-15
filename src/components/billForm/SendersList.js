import { Select, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { AddBill } from '../../services/bill/AddBill';
import moment from 'moment';
const { Option } = Select;

export default function SendersList(props) {
  const [sender, setSender] = useState(null)

  useEffect(() => {
    if (!props.senders?.length) {
      props.getSenders()
    }
  }, [])
  const next = () => {
    //check sender
    if (sender) {
      //call add Bill
      let data={   
        adressExpiditeurFactur:sender.adressExpiditeur,
        agenceExpiditeurFactur:sender.agenceExpiditeur,
        nomExpiditeurFactur:sender.nomExpiditeur,
        idExpiditeuFactur:sender.idExpiditeur,
        raisonSosialExpFactur:sender.raisonSosial,
        telExpiditeurFactur:sender.telExpiditeur,
        vilExpiditeurFactur:sender.vilExpiditeur,
        dateFactur:moment().format("yyyy-MM-DD"),
        referance: sender.idExpiditeur+moment().format("yyMMDDHHmm"),
        etaFactur:"EnCour",
        numroFactur:"3",
        factur1:"0",
        factur2:"0",
        factur3:"0",
        factur4:"0",
        factur5:"0",
        factur6:"0",
        contreRemboursemenFactur:"0",
        fraisLivraisonFactur:0,
        mentanFactur:0,
montanColisCheque:"0",
nombreColisAnnulerFactur:0,
nombreColisCheque:"0",
nombreColisLivrerFactur:0,
      }
      props.setBill(data)
      AddBill(data)
      props.setStep(1)
      props.setSender(sender)
    }
    else {
      notification.warning({
        description: "veuillez choisir un expediteur",
        className: "custom-class",
        style: {
          width: 600,
          backgroundColor: "#fff3cd",
          marginTop: "5rem",
        },
      });
    }
  }
  const children = []
  for (let i = 0; i < props.senders.length; i++) {
    const sender = props.senders[i]
    let packages = props.packages.filter(p => (p.idExpiditeur == sender.idExpiditeur && (p.etatLivraison == "Livrer" || p.etatLivraison == "Annuler"||p.etatLivraison=="Echange") && p.dateRinchit != "0"))

    children.push(
      <Option disabled={!packages.length} key={i} value={sender.nomExpiditeur}>
        {sender.nomExpiditeur}
      </Option>
    );
  }
  return (
    <div>

      <div className=" col-lg-6 col-md-12 ">
        <label className="">Expediteur</label>
        <br />
        <Select
          disabled={props.sendersLoad}
          className="border form-control p-0 d-flex align-items-center"
          // style={{ width: '40%' }}
          showSearch
          mode=""
          allowClear
          required
          placeholder="Rechercher pour sélectionner"
          onChange={(value, option) => {
            console.log(props.senders[option?.key]);
            setSender(props.senders[option?.key])
          }}
        >
          {children}
        </Select>
        <br />
      </div>

      <div className=" d-flex justify-content-center mt-4">
        <input
          onClick={next}
          className=" btn btn-primary "
          type="button"
          value="Suivant"
        />
      </div>
    </div>
  )
}
