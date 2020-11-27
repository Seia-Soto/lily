import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

function parseValue(valueUrlList) {
    const values = []
    if (valueUrlList.length === 0) {
        values.push('없음')
    }
    else {
        valueUrlList.forEach(element => {
            values.push(element.value)
        })
    }

    if (values.length <= 10) {
        return values.slice(0, 9).push('...')
    }
    return values
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 30
    },
    paper: {
        background: 'skyblue',
        maxWidth: 500,
        maxHeight: 400,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '300px'
    },
}))

function Info({ title, galleryId, artist, characters, group, series, tags, thumbnail }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt='thumbnail' src={`https://doujinshiman.ga/v2/api/proxy/${thumbnail}`.replace('smallbigtn', 'bigtn')} />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Info
