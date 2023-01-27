import { deleteDoc, doc } from "firebase/firestore";

export default DeletePackage=async(id) => {
        const userDoc = doc(db, "packages", id);
        await deleteDoc(userDoc);
}