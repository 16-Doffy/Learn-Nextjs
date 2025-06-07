import { useEffect, useState } from "react";

export default function useDebounce (initializeValue = "", delay = 1000){
    const [debounceValue,setDebounceValue] = useState(initializeValue);
    useEffect(() => {
        const timer = setTimeout (() =>{
            setDebounceValue(initializeValue)
        },delay);
        return () => {
            clearTimeout(timer);
        };
    },[delay, initializeValue]);
    return debounceValue;
}
// when we input some character it will fetch api alot so need to sometime for load
