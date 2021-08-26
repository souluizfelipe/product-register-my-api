
import Header from '../utils/Header.js'

const TemplateDefault = ({ children }) => {
  return(
    <>
      <Header />
      {children}
    </>
  )
}

export default TemplateDefault