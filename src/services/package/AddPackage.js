import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

export default AddPackage=async(data) => {
    const packagesCollectionRef = collection(db, "packages");
      await addDoc(packagesCollectionRef, data);
}