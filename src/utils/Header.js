import { useHistory } from 'react-router'

import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles
} from '@material-ui/core/'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  const hadleAddProductButton = () => {
    history.push('/products/add')
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Product App
        </Typography>
        <Button color="inherit" onClick={hadleAddProductButton}>Add Product</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
