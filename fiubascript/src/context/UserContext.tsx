import React, { ReactNode, useState } from 'react'
const Context = React.createContext({})

type UserContextProps = {
    children: ReactNode;
};

export type UserInfo = {
    token: string | null,
    id:  string | null,
    firstName:  string | null,
    lastName:  string | null,
    email:  string | null,
    coins: number | null,
    characters: Array<number> | null,
    currentCharacter: number | null,
};

export function UserContext({ children } : UserContextProps) {

    const [userInfo, setUserInfo] = useState({
        token: null,
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        coins: null,
        characters: null,
        currentCharacter: null,
    })

    return <Context.Provider value={{
        userInfo,
        setUserInfo
    }}>
        {children}
    </Context.Provider>
}
export default Context