import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({ Childern }) => {
  // const [user, setUser] = useState("vishal")

  return (
    <>
      <ProductContext.Provider value={"lj"}>
        {Childern}
      </ProductContext.Provider>

    </>
  )
}

export default ProductProvider
