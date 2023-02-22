// import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export const SignIn = async (email, password, setLoading) => {
  try {
    const request = query(
      ref(db, "ListExpiditeur"),
      orderByChild("emailExpiditeur"),
      equalTo(email)
    );
    onValue(request, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        // console.log(data);
        let user = Object.values(data).find(
          (user) => user.motdepasseExpiditeur == password
        );
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          window.location.replace("/sender/packages");
        } else {
          alert("email ou mot de passe incorrect");
          setLoading(false)
        }
      } else {
        alert("email ou mot de passe incorrect");
        setLoading(false)
      }
    });
    // const topUserPostsRef = query(ref(db, 'user-posts/' + myUserId), orderByChild('starCount'));
    // const userRef = collection(db, "ListLivreur");
    // const q = query(userRef, where('emailExpiditeur', '==', email));
    // const query = userRef.where('emailExpiditeur', '==', email);

    // const snapshot=await getDocs(userRef);
    // console.log(snapshot);
    // snapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });

    // const userDoc = snapshot.docs[0];
    // console.log(userDoc.data());

    //  const getListOfChannels = (id) => {
    //   const ref2=collection(db,"ListLivreur");
    //    return getDocs(ref2);

    // }

    // getListOfChannels().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //   console.log(doc.id, " => ", doc.data());
    //   })
    // })
  } catch (err) {
    alert(err.message);
  }
};
