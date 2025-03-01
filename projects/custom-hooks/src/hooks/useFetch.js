import {useEffect, useState} from "react";



// note: react look for the function name to start with use, and it should be a custom hook.

/**
 * Custom hook to fetch data from a function and handle loading and error states.
 * @param fetchFn
 * @param initialValue
 * @returns {{isFetching: undefined, error: undefined, fetchedData: unknown, setFetchedData: (value: unknown) => void}}
 */
export function useFetch(fetchFn, initialValue) {

    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()
    const [fetchedData, setFetchedData] = useState(initialValue)


    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({message: error.message || 'Failed to fetch data.'});
            }
            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
    }
}