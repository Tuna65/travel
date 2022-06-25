import { createContext, useState } from 'react';

export const guestContext = createContext();

function GuestProvider({ children }) {
    const [getDestination, setGetDestination] = useState('Destination');
    const [getAcivity, setGetAcivity] = useState('Adventure');

    const [total, setTotal] = useState(0);

    const sum = (value1, value2, value3) => {
        setTotal(value1 + value2 + value3);
    };

    const handleGetDestination = (value) => {
        setGetDestination(value);
    };
    const handleGetAcivity = (value) => {
        setGetAcivity(value);
    };

    const guest = { total, sum, getDestination, handleGetDestination, getAcivity, handleGetAcivity };
    return <guestContext.Provider value={guest}>{children}</guestContext.Provider>;
}
export { GuestProvider };
