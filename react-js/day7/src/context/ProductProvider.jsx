import React, { createContext, useEffect, useReducer, useState } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([])

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const productData = await response.json()
      // console.log(productData);

      setData(productData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [])


  return (
    <>
      <ProductContext.Provider value={{ data }}>
        {children}
      </ProductContext.Provider>
    </>
  )
}
export default ProductProvider
