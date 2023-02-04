import {ref, set } from "firebase/database";
import { db } from "../../firebase-config";

export const AddPackage=async(data) => {
 let res=await set(ref(db, 'ListPickup/'+ data.serieColis), data);
 console.log(res);
}

