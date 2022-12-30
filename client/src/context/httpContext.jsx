import { createContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import UserApi from 'api/user';

export const HttpContext = createContext();

export function HttpProvider({ children }) {

    const [http, setHttp] = useState();

    const { data } = useQuery(['http'], async() => {
        return await new UserApi(http).csrfToken()
    })
    
    useEffect(()=>{
        if(data) {
            setHttp({
                credentials: 'include',
                withCredentials: true,
                headers: { 
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    '_csrf-token': data
                }
            });
        }
    }, [data]);

    return (
        <>
            {http && 
            <HttpContext.Provider value={{ http }}>
                {children}
            </HttpContext.Provider>}
        </>
    );
}