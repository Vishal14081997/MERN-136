import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  console.log(data);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const productData = await response.json()
      // console.log(productData);
      setData(productData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className='flex gap-10 flex-wrap p-4'>
      {
        data.map((item) => {
          return (
            <>
            <div className=' bg-gray-400 p-4 rounded-2xl'>
              <img src={item.image} height={100} width={100} alt="" />
              <div>{item.category}</div>
              <div>{item.price}</div>
            </div>
            </>
          )
        })
      }

    </div>
    </>
  )
}

export default App