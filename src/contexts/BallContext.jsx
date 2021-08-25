import { createContext, useContext, useRef, useEffect, useState } from "react"

export const BallContext = createContext({})

export function BallContextProvider({ children }) {
    const [isBallBeingGrabbed, setIsBallBeingGrabbed] = useState(false)
    const ballRef = useRef(null)
    const toninhoRef = useRef(null)

    useEffect(() => {
        isBallBeingGrabbed && document.addEventListener('mousemove', moveBall)
        return () => document.removeEventListener('mousemove', moveBall)
    }, [isBallBeingGrabbed])

    function handleGrabBall() {
        ballRef.current.style.background = !isBallBeingGrabbed ? 'darkred' : 'red'
        setIsBallBeingGrabbed(!isBallBeingGrabbed)
    }

    function moveBall(e) {
        if (!ballRef.current || !toninhoRef.current) return
        ballRef.current.style.left = e.pageX - 17.5 + 'px'
        ballRef.current.style.top = e.pageY - 17.5 + 'px'
        
        toninhoRef.current.style.left = e.pageX - 200 + 'px'
        toninhoRef.current.style.top = e.pageY - 35 + 'px'
    }

    return (
        <BallContext.Provider value={{
            isBallBeingGrabbed,
            setIsBallBeingGrabbed,
            handleGrabBall,
            moveBall,
            ballRef,
            toninhoRef
        }}>
            { children }
        </BallContext.Provider>
    )
}

export function useBallContext() {
    return useContext(BallContext)
}