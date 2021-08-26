import { 
  TextField,
  makeStyles,
  Button,
  Box
} from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: theme.spacing(2) ,
  },
  button: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}))

const RegisterProducts = () => {

  const classes = useStyles()

  return(
    <>
      <div className={classes.wrapper}>
        <TextField 
          className={classes.input} 
          name="name" 
          id="name" 
          label="Name" 
          variant="outlined" 
        />
        <TextField 
          className={classes.input} 
          name="brand" 
          id="brand" 
          label="Brand" 
          variant="outlined" 
        />
        <TextField 
          className={classes.input} 
          name="price" 
          id="price" 
          label="Price" 
          variant="outlined" 
        />
        <Box >
          <Button className={classes.button} variant="contained" color="primary">Send</Button>
        </Box >
      </div>
    </>
  )
}

export default RegisterProducts