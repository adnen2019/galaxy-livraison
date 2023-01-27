import { doc, updateDoc } from "firebase/firestore";

export default UpdatePackage=async(data)=> {
        const userDoc = doc(db, "packages", data.id);
        // const newFields = { age: age + 1 };
        await updateDoc(userDoc, data);
}