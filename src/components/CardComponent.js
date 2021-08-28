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

const useStyles = makeStyles(theme => ({
root: {
  minWidth: 275,
    margin: theme.spacing(1)
  },
  title: {
    fontSize: 14,
  },
  brand: {
    fontSize: 16,
  },
}))

 const CardComponent = ({ 
  id, 
  name, 
  brand, 
  price, 
  onDelete, 
  onEdit
}) => {
  
  const classes = useStyles()

  const handleDeleteButtonClick = (id) => {
    onDelete(id)
  }

  const handleEditButtonClick = () => {
    onEdit(id)
  }

  return (

    <Card className={classes.root}>
      <CardContent>
        <input type="hidden" value={id} />
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
      <IconButton aria-label="add to favorites" onClick={() => handleEditButtonClick(id)}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="add to favorites" onClick={() => handleDeleteButtonClick(id)}>
        <DeleteIcon />
      </IconButton>
      </CardActions>
    </Card>
  )
}


export default CardComponent