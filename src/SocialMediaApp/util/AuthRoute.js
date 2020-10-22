import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authenticated === true ? <Redirect to='/socialMediaApp' /> : <Component {...props} />
        }
    />
)

export default AuthRoute
