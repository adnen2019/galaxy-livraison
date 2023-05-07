import {ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const AddFinishedPackage=async(data,cb) => {
 let res=await set(ref(db, 'ColisFini/'+ data.serieColis), data);
 cb()
}

