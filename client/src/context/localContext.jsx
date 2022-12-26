import { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const LocalContext = createContext();

export function LocalProvider({ children }) {

    const {data: t} = useQuery(['typeSelect'], async() => {
        const res = await axios.get('/type/type.json');
        return res.data.type;
    });

    const {data: n} = useQuery(['numSelect'], async() => {
        const res = await axios.get('/type/number.json');
        return res.data.number;
    });

    const {data: tag} = useQuery(['tagSelect'], async() => {
        const res = await axios.get('/tags/tag.json');
        return res.data.tag;
    });

    const progress = [
        {value: 'ing', name: '모집 중'},
        {value: 'done', name: '모집 마감'}
    ]

    return (
        <LocalContext.Provider value={{ t, n, tag, progress }}>
            {children}
        </LocalContext.Provider>
    );
}
