import {
  useState,
  useEffect
} from 'react'

import axios from 'axios'

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
    {
      products.map((product) => (
        <CardComponent
          name={product.name}
          brand={product.brand}
          price={product.price}
        />
      ))
    }
    </>
  )
}

export default List