import {ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const AddRunSheet=async(data,cb) => {
 let res=await set(ref(db, 'Rinchit/'+ data.serieColis), data);
 cb()
}

