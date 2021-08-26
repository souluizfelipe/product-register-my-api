import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core/'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  brand: {
    fontSize: 16,
  },
})

export default function OutlinedCard({ name, brand, price}) {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Product
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.brand} color="textSecondary" gutterBottom>
          {brand}
        </Typography>
        <Typography variant="h5" component="h2">
          {`$${price}`}
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="add to favorites">
        <DeleteIcon />
      </IconButton>
      </CardActions>
    </Card>
  )
}