import {createContext,useState} from "react";
import PropTypes from "prop-types";
const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [isSignedUp,setIsSignedUp]=useState(false)

    return (
        <AuthContext.Provider value={{isSignedUp,setIsSignedUp}}>
            {children}
        </AuthContext.Provider>
    )}
AuthProvider.propTypes = {
        children: PropTypes.node.isRequired, // `children` must be a valid React node
      };    
export default AuthContext