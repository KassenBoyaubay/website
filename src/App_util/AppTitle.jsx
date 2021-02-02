import React from 'react'
// Components
import { Text } from "./Context/LanguageContext"
import { useTheme } from "./Context/ThemeContext"

const styles = {
    SectionTitle: {
        display: "grid",
        placeItems: "center",
        // backgroundColor: "#f4f7ff",
        marginBottom: "4rem",
        boxSizing: "border-box",
        textAlign: 'center'
    },
    h2: {
        fontSize: "4rem",
        color: "#1e1e1e",
        fontFamily: "calibri",
        fontWeight: 'bold',
        margin: "10px",
        padding: "5px",
        letterSpacing: "4px",
        borderBottom: "2px solid #1e1e1e",
    },
    h2Dark: {
        fontSize: "4rem",
        color: "#fff",
        fontFamily: "calibri",
        fontWeight: 'bold',
        margin: "10px",
        padding: "5px",
        letterSpacing: "4px",
        borderBottom: "2px solid #fff",
    }
}

function AppTitle({ name }) {
    // dark theme
    const darkTheme = useTheme()

    return (
        <div style={styles.SectionTitle}>
            {darkTheme ?
                <h2 style={styles.h2Dark}>
                    <Text tid={name} />
                </h2>
                :
                <h2 style={styles.h2}>
                    <Text tid={name} />
                </h2>
            }
        </div>
    )
}

export default AppTitle
