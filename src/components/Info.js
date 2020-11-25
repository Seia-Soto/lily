import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

function parseValue(valueUrlList) {
    const asdf = []
    if (valueUrlList.length === 0) {
        asdf.push('없음')
    } else {
        valueUrlList.forEach(element => {
            asdf.push(element.value)
        })
    }
    return asdf
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 30
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        maxHeight: 400,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'flex',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}))

function Info({ title, galleryId, artist, characters, group, series, tags, thumbnail }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={`https://doujinshiman.ga/v2/api/proxy/${thumbnail}`} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant='subtitle1' gutterBottom>
                                    {title.value}
                                </Typography>
                                <Typography variant='body1' gutterBottom>
                                    {galleryId}
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                    작가: {parseValue(artist).join(',')}
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                    캐릭터: {parseValue(characters).join(',')}
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                    그룹: {parseValue(group).join(',')}
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                    원작: {parseValue(series).join(',')}
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                    태그: {parseValue(tags).join(',')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Info
