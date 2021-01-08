import React, { useState, useEffect } from 'react';
import MyButton from '../../util/MyButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// REdux
import { connect } from 'react-redux';
import { likeScream, unlikeScream } from '../../redux/actions/dataActions';

function LikeButton({ user: { authenticated, likes }, screamId, likeScream, unlikeScream }) {
    const likedScream = () => {
        if (
            likes &&
            likes.find(
                (like) => like.screamId === screamId
            )
        )
            return true;
        else return false;
    };

    const _likeScream = () => {
        likeScream(screamId);
    };

    const _unlikeScream = () => {
        unlikeScream(screamId);
    };

    const likeButton = !authenticated ? (
        <Link to="/socialMediaApp/login">
            <MyButton tip="Like">
                <FavoriteBorder color="primary" />
            </MyButton>
        </Link>
    ) : likedScream() ? (
        <MyButton tip="Undo like" onClick={() => _unlikeScream()}>
            <FavoriteIcon color="primary" />
        </MyButton>
    ) : (
                <MyButton tip="Like" onClick={() => _likeScream()}>
                    <FavoriteBorder color="primary" />
                </MyButton>
            );
    return likeButton;
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = {
    likeScream,
    unlikeScream
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(LikeButton);
