import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Scream from '../components/scream/Scream';
import StaticProfile from '../components/profile/StaticProfile';
import Grid from '@material-ui/core/Grid';

import ScreamSkeleton from '../util/ScreamSkeleton';
import ProfileSkeleton from '../util/ProfileSkeleton';

import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

function User({ data: { screams, loading }, getUserData }) {
    let params = useParams()
    const [profile, setProfile] = useState(null)
    const [screamIdParam, setScreamIdParam] = useState(null)

    useEffect(() => {
        const { handle, screamId } = params

        if (screamId) setScreamIdParam(screamId)

        getUserData(handle);

        axios
            .get(`/socialMediaApp/user/${handle}`)
            .then((res) => {
                setProfile(res.data.user)
            })
            .catch((err) => console.log(err));
    }, [])

    const screamsMarkup = loading ? (
        <ScreamSkeleton />
    ) : screams === null ? (
        <p>No screams from this user</p>
    ) : !screamIdParam ? (
        screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
                    screams.map((scream) => {
                        if (scream.screamId !== screamIdParam)
                            return <Scream key={scream.screamId} scream={scream} />;
                        else return <Scream key={scream.screamId} scream={scream} openDialog={true} />;
                    })
                );

    return (
        <Grid container spacing={16}>
            <Grid item sm={8} xs={12}>
                {screamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                {profile === null ? (
                    <ProfileSkeleton />
                ) : (
                        <StaticProfile profile={profile} />
                    )}
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { getUserData }
)(User);