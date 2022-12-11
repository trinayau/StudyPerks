import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged (auth, (user) => {
            setCurrentUser(user);

        });

        return () => {
            unsub();
        };
    }, []);

    const login = (userData) => {
        setCurrentUser(userData);
    }

    const logout = () => {
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

