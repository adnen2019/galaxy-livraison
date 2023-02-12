import { PDFViewer } from '@react-pdf/renderer'
import React, { useState } from 'react'
import BillModal from '../components/bill/BillModal'
import Dashboard from '../components/dashboard/Dashboard'
import Bill from '../components/pdf/Bill'

export default function DashboardView() {
  const [modalVisible,setModalVisible]=useState(true)
  const pkg={
      "adressDistinatair": "Fdff",
      "agenceLivraison": "Ben Arous",
      "colis1": "0",
      "colis2": "0",
      "colis3": "0",
      "colis4": "0",
      "datAjoutColis": "10/02/2023|00:45",
      "datLivraison": "00",
      "dateFactur": "0",
      "dateRetour": "00",
      "dateRetourDifinitif": "00",
      "dateRinchit": "0",
      "detailColi": "1 kg // 1 Pieces",
      "dicriptionColis": "Ffdz",
      "echangColis": "Livraison Normal",
      "etaPayment": "Non Payer",
      "etatLivraison": "Collect",
      "fraiLivExtra": "15",
      "fraiLivraison": "8",
      "fraiRetour": "4",
      "idExpiditeur": "0",
      "journalColis": "Creation par: Ahmed le 10/02/2023|00:45",
      "livreur": "Expiditeur",
      "naturColis": "Colis",
      "naturPayment": "Espece",
      "nomDistinateur": "10",
      "nomExpiditeur": "Ahmed",
      "nombreSms": "0",
      "nombreTel": "0",
      "nombreTentative": "0",
      "numeroExpiditeur": "53491149",
      "numeroFacture": "0",
      "numeroRinchit": "0",
      "prisColis": "10.0",
      "raisonRetour": "=>",
      "serieColis": "0021000450750",
      "telDistinatair": "53491149",
      "telLivreur": "0",
      "vilDistinateur": "Ben Arous",
      "villExpiditeur": "Sfax"
  }
  return (
    <div>
      <Dashboard/>

        <br/>
        {/* <BillModal pkg={pkg} modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}

    </div>
  )
}
