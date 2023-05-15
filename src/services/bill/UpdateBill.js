import {ref, update } from "firebase/database";
import { db } from "../../firebase-config";

export const UpdateBill=async(data) => {
 let res=await update(ref(db, 'Factur/'+ data.referance), data);
 console.log(res);
}

