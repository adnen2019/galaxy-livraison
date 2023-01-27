import { onValue, ref} from "firebase/database";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";

export  const GetPackages=async(id,cb,setLoading) => {
    try {
      setLoading(true)
        const query = ref(db, "ListPickup")
         onValue(query, (snapshot) => {
          const data = snapshot.val();
          if (snapshot.exists()) {
           let packages= Object.values(data).filter((p) =>p.idExpiditeur==id );
           console.log(packages);
          //  let states=packages.map(p=>p.etatLivraison)
          //  states=[...new Set([...states])]
          //  console.log(states);
           cb(packages)
           setLoading(false)
          }
        });
        // const userRef = collection(db, "ListLivreur");
        // const q = query(userRef, where('emailExpiditeur', '==', email));
        // const query = userRef.where('emailExpiditeur', '==', email);
        
      } catch (err) {
        alert(err.message);
      }
}