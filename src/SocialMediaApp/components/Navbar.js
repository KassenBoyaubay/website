import React from 'react'
// MUI stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from 'react-router-dom/Link'

function Navbar() {
    return (
        <div>
            <AppBar>
                <Toolbar style={{margin: 'auto'}}>
                    <Button color="inherit">
                        <Link to="/socialMediaApp/login">
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/socialMediaApp">
                            Home
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/socialMediaApp/signup">
                            Signup
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
