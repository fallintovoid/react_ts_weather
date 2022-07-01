import { useCallback, useState } from 'react'

const useRequest = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const request = useCallback(async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            setLoading(true)
            const response = await fetch(url, {method, body, headers})
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status ${response.status}`)
            }
            const data = await response.json();
            return(data)
        }
        catch(e) {
            setLoading(false)
            setError(true)
            throw e;
        }
    }, [])
    return {request, loading, error}
}

export default useRequest;