import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [Loading, setLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        const gooogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, gooogleProvider)
            .finally(() => setLoading(false));
    }


    useEffect(() => {
        const unsubscirbed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscirbed;
    }, [])


    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }

    return {
        user,
        Loading,
        signInUsingGoogle,
        logOut
    }

}


export default useFirebase;