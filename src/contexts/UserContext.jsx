import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { getUserById } from "../firebase/users";

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [name, setName] = useState(null);
    const [isLoadingUser, setIsLoadingUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            setIsLoadingUser(true);
            if (firebaseUser) {
                setUser(firebaseUser);
                const user = await getUserById(firebaseUser.uid);
                console.log(firebaseUser);
                if (!firebaseUser.emailVerified) {
                    setName(user._document.data.value.mapValue.fields.displayName.stringValue);
                    console.log(user._document.data.value.mapValue.fields.displayName.stringValue);
                }
                
            } else {
                setUser(null);
            }
            setIsLoadingUser(false);
        });
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                name,
                setUser,
                isLoadingUser,
                setIsLoadingUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}
