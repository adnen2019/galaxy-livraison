import React from 'react'
import BillFormSteps from './BillFormSteps'
import SendersList from './SendersList'
import { useState } from 'react'
import SenderPackages from './SenderPackages'

export default function BillForm(props) {
  const [step,setStep]=useState(0)
  const [sender,setSender]=useState(null)
  const [bill,setBill]=useState(null)
const submit=()=>{
  setBill(null)
  setSender(null)
  setStep(0)
}

  return (
    <div>
      <BillFormSteps step={step} setStep={setStep} />
      {step==0&&<SendersList setBill={setBill} packages={props.packages} setStep={setStep} setSender={setSender} sendersLoad={props.sendersLoad}
              senders={props.senders} getSenders={props.getSenders} />}
      {step==1&&<SenderPackages submit={submit} bill={bill} sender={sender} packagesLoad={props.packagesLoad} packages={props.packages}  />}

    </div>
  )
}
// condition ajout factur 
// if ((p.getEtatLivraison().toString().equals("Livrer")|p.getEtatLivraison().toString().equals("Annuler")|p.getEtatLivraison().toString().equals("Echange"))&!p.getDateRinchit().equals("0")&p.getNomExpiditeur().toString().equals(nomExpiditeur)){
// condition ajout runshit
// if ((p.getEtatLivraison().equals("Depot")|(p.getEtatLivraison().equals("Retour")|(p.getEtatLivraison().equals("Transfert")))&!p.getDateRinchit().equals("0")))