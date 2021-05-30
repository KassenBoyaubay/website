import React from 'react'
// Components
import { useTheme } from "./Context/ThemeContext"
import { Text } from "./Context/LanguageContext"

const styles = {
    SubSectionTitle: {
        display: "grid",
        placeItems: "center",
        // backgroundColor: "#f4f7ff",
        marginBottom: "2rem",
        marginTop: "4rem",
        boxSizing: "border-box",
    },
    h3: {
        fontSize: "3rem",
        color: "#222",
        fontFamily: '"Great Vibes Pro", cursive',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: "center"
    },
    h3Dark: {
        fontSize: "3rem",
        color: "#bbb",
        fontFamily: '"Great Vibes Pro", cursive',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: "center"
    }
}

function SubSectionTitle({ name }) {
    // dark theme
    const darkTheme = useTheme()

    return (
        <div style={styles.SubSectionTitle}>
            {darkTheme ?
                <h3 style={styles.h3Dark}>
                    <Text tid={name} />
                </h3>
                :
                <h3 style={styles.h3}>
                    <Text tid={name} />
                </h3>
            }
        </div >
    )
}

export default SubSectionTitle
