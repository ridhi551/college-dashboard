import { useState,useEffect } from 'react'


const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)


    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            console.log(res)

            if(!res.ok){
                throw Error("could not fetch")
            }

            return res.json();
        })
        .then((data)=>{
            console.log(data)
            setIsPending(false)
            setData(data);
            setError(null)
        })
        .catch((err)=>{
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        })
    },[url]);

    return {data, isPending, error}

}

export default useFetch;