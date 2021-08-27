import {
  useState,
  useEffect
} from 'react'

import axios from 'axios'
import { 
  Grid,
} from '@material-ui/core'

import CardComponent from '../components/CardComponent'


const ListProducts = () => {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => {
        const { data } = res

        setProducts(data)
      })
    },[products])
    
  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:8080/api/products/${id}`)
      .then(res => {
        if(res.data.message === "success") {
          console.log(res.data.message)   
        } else {
          console.log(res.data.message)   
        }
      })
  }


  return(
    <>
      <Grid container>
        {
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} >
              <CardComponent
              id={product._id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              onDelete={handleDeleteProduct}
              />
            </Grid>
          ))
        } 
      </Grid>
    </>
  )
}

export default ListProducts