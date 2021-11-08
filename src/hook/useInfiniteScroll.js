import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = () => {
        console.log(window.innerHeight);
        console.log(document.documentElement.scrollTop);
        console.log(document.documentElement.offsetHeight);
        console.log(window.innerHeight + document.documentElement.scrollTop);
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight){
            console.log("Scroll")
            setIsFetching(true);
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll)        
        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        if(isFetching){
            callback();
        }
    }, [isFetching]);

    return [isFetching, setIsFetching];
}

export default useInfiniteScroll;