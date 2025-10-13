import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);
    const [role, setRole] = useState(false)
    const [isSelected, setIsSelected] = useState(false);

    const getAuthState = async () => {
        try {

            axios.defaults.withCredentials = true

            if(!role) {
                const {data} = await axios.post(backendUrl + '/auth/is-auth')
                
                if(data?.success) {
                    setRole(data.role)
                    setIsLoggedin(true)
                }
                
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }
    
    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        role, setRole,
        getAuthState,
        isSelected, setIsSelected
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}