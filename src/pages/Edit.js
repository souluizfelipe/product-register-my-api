import { 
  TextField,
  makeStyles,
  Button,
  Box
} from "@material-ui/core"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useState } from 'react'

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

const EditProducts = () => {

  const classes = useStyles()
  const history = useHistory()
  
  const [ form, setForm ] = useState({
    name: {
      value: '',
      error: false,
    },
    brand: {
      value: '',
      error: false,
    },
    price: {
      value: '',
      error: false,
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: {
        ...form[name],
        value,
      }
    })    
  }

  const handleRegisterButton = () => {

    let hasError = false
    let newFormState = {
      ...form
    }

    if(!form.name.value) {
      hasError = true
      newFormState.name = {
        value: form.name.value,
        error: true,
      }
    }

    if(!form.brand.value) {
      hasError = true
      newFormState.brand = {
        value: form.brand.value,
        error: true,
      }
    }

    if(!form.price.value) {
      hasError = true
      newFormState.price = {
        value: form.price.value,
        error: true,
      }
    }

    if(hasError) {
      return setForm(newFormState)
    }

    axios.post('http://localhost:8080/api/products', {
      name: form.name.value,
      brand: form.brand.value,
      price: form.price.value,
    })


    history.push('/home')
  }


  return(
    <>
      <div className={classes.wrapper}>
        <TextField 
          className={classes.input} 
          name="name" 
          id="name" 
          label="Name" 
          variant="outlined" 
          error={form.name.error}
          onChange={handleInputChange}
          />
        <TextField 
          className={classes.input} 
          name="brand" 
          id="brand" 
          label="Brand" 
          variant="outlined" 
          error={form.brand.error}
          onChange={handleInputChange}
          />
        <TextField 
          className={classes.input} 
          name="price" 
          id="price" 
          label="Price" 
          variant="outlined" 
          error={form.price.error}
          onChange={handleInputChange}
        />
        <Box >
          <Button 
            className={classes.button} 
            variant="contained" 
            color="primary"
            onClick={handleRegisterButton}
          >
            Send
          </Button>
        </Box >
      </div>
    </>
  )
}

export default EditProducts