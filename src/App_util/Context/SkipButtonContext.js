import React, { useContext, useState } from 'react'

export const SkipButtonContext = React.createContext()
export const SkipButtonUpdateContext = React.createContext()

export function useSkipButton() {
    return useContext(SkipButtonContext)
}

export function useSkipButtonUpdate() {
    return useContext(SkipButtonUpdateContext)
}

export function SkipButtonProvider({ children }) {
    const [skipIntro, setSkipIntro] = useState(false)

    function setSkip() {
        setSkipIntro(true)
    }

    return (
        <SkipButtonContext.Provider value={skipIntro}>
            <SkipButtonUpdateContext.Provider value={setSkip}>
                {children}
            </SkipButtonUpdateContext.Provider>
        </SkipButtonContext.Provider>
    )
}
