import {ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const AddPackage=async(data,cb) => {
 let res=await set(ref(db, 'ListPickup/'+ data.serieColis), data);
 cb()
}

