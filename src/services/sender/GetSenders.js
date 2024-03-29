import { equalTo, onValue, orderByChild, query, ref} from "firebase/database";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";

export  const GetSenders=async(id,cb,setLoading) => {
    try {
      setLoading(true)
      const request =query(ref(db, 'ListExpiditeur')
      );
         onValue(request, (snapshot) => {
          const data = snapshot.val();
          if (snapshot.exists()) {
           let packages= Object.values(data)
          //  console.log(packages);
           cb(packages.reverse())
           setLoading(false)
          //  let states=packages.map(p=>p.etatLivraison)
          //  states=[...new Set([...states])]
          //  console.log(states);
     
          }
        });
        
      } catch (err) {
        setLoading(false)
        // console.log(err.message);

      }
}