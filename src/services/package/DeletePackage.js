import {ref, remove } from "firebase/database";
import { db } from "../../firebase-config";

export const DeletePackage=async(serieColis) => {
 let res=await remove(ref(db, 'ListPickup/'+serieColis));
//  console.log(res);
}

