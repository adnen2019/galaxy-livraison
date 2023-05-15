import {ref, update } from "firebase/database";
import { db } from "../../firebase-config";

export const UpdateSender=async(data,cb) => {
 let res=await update(ref(db, 'ListExpiditeur/'+ data.agenceExpiditeur+data.expixiteur2), data);
cb()
 console.log(res);
}

