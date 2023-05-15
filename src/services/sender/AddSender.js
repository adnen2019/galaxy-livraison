import {ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const AddSender=async(data,cb) => {
 let res=await set(ref(db, 'ListExpiditeur/'+ data.agenceExpiditeur+data.expixiteur2
 ), data);
 cb()
}

