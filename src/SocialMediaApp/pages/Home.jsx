import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';

import Scream from "../components/scream/Scream"
import Profile from "../components/profile/Profile"
import ScreamSkeleton from "../util/ScreamSkeleton"

import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

function Home({ getScreams, data: { screams, loading } }) {
    useEffect(() => {
        getScreams()
    }, [])

    let recentScreamsMarkup = !loading ? (screams.map(scream => <Scream key={scream.screamId} scream={scream} />)) : <ScreamSkeleton />
    return (
        <Grid container spacing={16}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <Profile />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, { getScreams })(Home)
