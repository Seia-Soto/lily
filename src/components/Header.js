import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "skyblue",
        height: 40,
        padding: 5
    },
}))


function Header() {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.root}>
            <Typography variant="h6">
                Lily
            </Typography>
        </AppBar >
    )

};

export default Header