import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {

    const [user,setUser] = useState(null)


    //creating user
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //update a User


    const allValues = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.node
}
export default FirebaseProvider;