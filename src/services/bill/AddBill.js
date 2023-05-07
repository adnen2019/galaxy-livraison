import {ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const AddBill=async(data,cb) => {
 let res=await set(ref(db, 'Factur/'+ data.idExpiditeuFactur), data);
 cb()
}

/*condition ajout factur 
if ((p.getEtatLivraison().toString().equals("Livrer")|p.getEtatLivraison().toString().equals("Annuler")|p.getEtatLivraison().toString().equals("Echange"))&!p.getDateRinchit().equals("0")&p.getNomExpiditeur().toString().equals(nomExpiditeur)){
condition ajout runshit
if ((p.getEtatLivraison().equals("Depot")|(p.getEtatLivraison().equals("Retour")|(p.getEtatLivraison().equals("Transfert")))&!p.getDateRinchit().equals("0")))
etat de livraison des colis fini
Livrer
Echange
Annuler

vous trouverer les exp des pdf runchit et pdf factur*/