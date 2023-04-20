import {ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const AddDeliveryMan=async(data,cb) => {
 let res=await set(ref(db, 'ListLivreur/'+ data.serieColis), data);
 cb()
}

