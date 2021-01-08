import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../../util/MyButton'
import PostScream from '../scream/PostScream'
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
// Icons
import HomeIcon from '@material-ui/icons/Home'
// Redux
import { connect } from 'react-redux'

const NavSvg = {
    color: "#fff"
}

function Navbar({ authenticated }) {
    return (
        <div>
            <AppBar>
                <Toolbar style={{ margin: 'auto' }}>
                    {authenticated ? (
                        <>
                            <PostScream />
                            <Link to="/socialMediaApp">
                                <MyButton tip="Home">
                                    <HomeIcon style={NavSvg} />
                                </MyButton>
                            </Link>
                            <Notifications />
                        </>
                    ) : (
                            <>
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
                            </>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = state => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(Navbar)
