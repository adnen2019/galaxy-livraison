import { equalTo, onValue, orderByChild, query, ref} from "firebase/database";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";

export  const GetFinishedPackages=async(id,cb,setLoading) => {
    try {
      setLoading(true)
      const request =query(ref(db, 'ColisFini')
      , orderByChild('idExpiditeur')
      ,equalTo(id),
      );
         onValue(request, (snapshot) => {
          const data = snapshot.val();
          if (snapshot.exists()) {
           let packages= Object.values(data)
          //  console.log("finished:",packages);
           cb(packages.reverse())
           setLoading(false)
          //  let states=packages.map(p=>p.etatLivraison)
          //  states=[...new Set([...states])]
          //  console.log(states);
     
          }
          else{
            // console.log("finished empty");
           setLoading(false)
          }
        });
        
      } catch (err) {
        // console.log(err.message);
        setLoading(false)

      }
}