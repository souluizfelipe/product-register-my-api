
import {
  Typography,
  Container,
} from "@material-ui/core"


const TemplatePage = ({ Component, title }) => {
  return(
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1">{title}</Typography>
        <Component />
      </Container>
    </>
  )
}


export default TemplatePage