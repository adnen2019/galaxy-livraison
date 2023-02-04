import {ref, remove } from "firebase/database";
import { db } from "../../firebase-config";

export const DeletePackage=async(data) => {
 let res=await remove(ref(db, 'ListPickup/'+ data.serieColis));
 console.log(res);
}

