
import { Typography } from "@material-ui/core"


const TemplatePage = ({ Component, title }) => {
  return(
    <>
      <Typography variant="h3" component="h1">{title}</Typography>
      <Component />
    </>
  )
}


export default TemplatePage