import {
  useState,
  useEffect
} from 'react'

import axios from 'axios'
import { 
  Grid,
} from '@material-ui/core'

import CardComponent from '../components/CardComponent'


const List = () => {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => {
        const { data } = res

        setProducts(data)
      })
  },[])

  return(
    <>
      <Grid container>
        {
          products.map((product) => (
            <Grid xs={12} sm={6} md={4} >
              <CardComponent
              name={product.name}
              brand={product.brand}
              price={product.price}
              />
            </Grid>
          ))
        } 
      </Grid>
    </>
  )
}

export default List