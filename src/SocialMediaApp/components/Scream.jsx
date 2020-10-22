import React from 'react'
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
// dayjs
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// Icons
import ChatIcon from '@material-ui/icons/Chat';

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        marginBottom: 20
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
};

function Scream({ classes, scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } }) {
    dayjs.extend(relativeTime)
    return (
        <Card className={classes.card}>
            <CardMedia
                image={userImage}
                title="Profile image"
                className={classes.image}
            />
            <CardContent className={classes.content}>
                <Typography
                    variant="h5"
                    component={Link}
                    to={`/socialMediaApp/users/${userHandle}`}
                    color="primary"
                >
                    {userHandle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {dayjs(createdAt).fromNow()}
                </Typography>
                <Typography variant="body1">{body}</Typography>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(Scream)
