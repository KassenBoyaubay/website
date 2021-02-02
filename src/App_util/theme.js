export default {
    palette: {
        primary: {
            light: '#4791db',
            main: '#1976d2',
            dark: '#115293',
            contrastText: '#fff',
            background: '#f1f5f8',
        },
        secondary: {
            light: '#191919',
            main: '#333',
            dark: '#212121',
            contrastText: '#fff',
            contrastLightText: "#dadada",
        }
    },
    spread: {
        iconLight: {
            '&:hover': {
                backgroundColor: "rgba(0,0,0,0.04)"
            }
        },
        iconDark: {
            '&:hover': {
                backgroundColor: "rgba(255,255,255,0.08)"
            }
        },
        typography: {
            useNextVariants: true
        },
        form: {
            textAlign: 'center'
        },
        image: {
            margin: '20px auto 20px auto'
        },
        pageTitle: {
            margin: '10px auto 10px auto'
        },
        textField: {
            margin: '10px auto 10px auto'
        },
        button: {
            marginTop: 20,
            position: 'relative'
        },
        customError: {
            color: 'red',
            fontSize: '0.8rem',
            marginTop: 10
        },
        progress: {
            position: 'absolute'
        },
        invisibleSeparator: {
            border: 'none',
            margin: 4
        },
        visibleSeparator: {
            width: '100%',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            marginBottom: 20
        },
        paper: {
            padding: 20,
            margin: '0 20px'
        },
        profile: {
            '& .image-wrapper': {
                textAlign: 'center',
                position: 'relative',
                '& button': {
                    position: 'absolute',
                    top: '80%',
                    left: '70%'
                }
            },
            '& .profile-image': {
                width: 200,
                height: 200,
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '50%'
            },
            '& .profile-details': {
                textAlign: 'center',
                '& span, svg': {
                    verticalAlign: 'middle'
                },
                '& a': {
                    color: '#00bcd4'
                }
            },
            '& hr': {
                border: 'none',
                margin: '0 0 10px 0'
            },
            '& svg.button': {
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        },
        buttons: {
            textAlign: 'center',
            '& a': {
                margin: '20px 10px'
            }
        },
        SectionOneGrid: {
            '& h2': {
                fontFamily: '"Roboto", sans-serif',
                fontWeight: 'bold',
                textTransform: "capitalize",
                letterSpacing: "0.1rem",
                lineHeight: 1,
                background: "#222",
                color: "#fff",
                padding: "1rem",
                borderRadius: "0.25rem",
                marginBottom: "2rem",
                fontSize: "2rem",
            },
            '& .icon-container': {
                width: '8rem',
                height: '8rem',
                border: '3px solid #222',
                marginTop: '1rem',
                marginBottom: '2.5rem',
                display: 'flex',
                transform: 'rotate(45deg)',
            },
            '& .icon': {
                fontSize: '5rem',
                margin: 'auto',
                transform: 'rotate(-45deg)',
            },
            '& p': {
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '1.1em',
                lineHeight: '1.8em',
                marginBottom: 0,
                textAlign: 'center',
            },
            '& .a': {
                marginTop: "auto",
            },
            '& .btn': {
                fontFamily: '"Roboto", sans-serif',
                textTransform: "capitalize",
                background: 'transparent',
                color: '#222',
                letterSpacing: '0.1rem',
                display: 'inline - block',
                fontWeight: '700',
                transition: 'all 0.3s linear',
                border: '2px solid #222',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                borderRadius: '0.25rem',
                fontSize: '1rem',
                padding: '0.75rem 1.25rem',
                marginTop: "1.5rem",

                '&:hover': {
                    color: '#fff',
                    background: '#222',
                },
            },
            '& .btnDark': {
                color: '#fff',
                border: '2px solid #212121',
                backgroundColor: '#212121',
                fontFamily: '"Roboto", sans-serif',
                textTransform: "capitalize",
                background: 'transparent',
                letterSpacing: '0.1rem',
                display: 'inline - block',
                fontWeight: '700',
                transition: 'all 0.3s linear',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                borderRadius: '0.25rem',
                fontSize: '1rem',
                padding: '0.75rem 1.25rem',
                marginTop: "1.5rem",

                '&:hover': {
                    color: '#fff',
                    backgroundColor: '#333',
                    border: '2px solid #fff',
                },
            },
            '& .btm': {
                marginBottom: '2rem',
            },
            '& .disabled': {
                pointerEvents: 'none',
                cursor: 'default',
                opacity: '0.65',
            },
            '& .blue': {
                color: '#49a6e9',
            },
            '& .orange': {
                color: '#e98449',
            },
            '& .red': {
                color: '#e94950',
            },
            '& .green': {
                color: '#49e982',
            },
        },
    },
};