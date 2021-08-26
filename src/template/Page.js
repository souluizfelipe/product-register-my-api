
import {
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(3)
  },
}))


const TemplatePage = ({ Component, title }) => {
  
  const classes = useStyles()

  return(
    <>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          className={classes.title}
        >
          {title}
        </Typography>
        <Component />
      </Container>
    </>
  )
}


export default TemplatePage