import {ref, update } from "firebase/database";
import { db } from "../../firebase-config";

export const UpdatePackage=async(data) => {
 let res=await update(ref(db, 'ListPickup/'+ data.serieColis), data);
 console.log(res);
}

