import React from 'react'
import Child from './components/Child'
import ProductChild from './components/ProductChild'

const App = () => {

  let data = [
    {
      id: 1,
      title: "Iphone",
      des: "this is iphone series of apple",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
    },
    {
      id: 2,
      title: "sumsung s24 ",
      des: "this is sumsung series ",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
    },
    {
      id: 3,
      title: "sumsung s24 ",
      des: "this is sumsung series ",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
    },
    {
      id: 4,
      title: "sumsung s24 ",
      des: "this is sumsung series ",
      price: 2000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaE9GF2i2qAhIEsJGKfM3kROp5WaTotiBkLV8l32A3g&s"
    },
   
  ]
  return (
    <>
      {/* <Child heading="my name vishal singh" title="child1" /> */}
      <div className='flex gap-5 mt-10 justify-between p-4'>
      {
        data.map((item) => {
          return (
            <ProductChild key={item.id} productData={item} />
          )
        })
      }
      </div>

    </>
  )
}

export default App