import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'

const Home = () => {
  const { data } = useContext(ProductContext)
  // console.log(data);

  return (
    <div className='flex gap-4 flex-wrap justify-between p-4'>
      {
        data.map((item) => {
          console.log(item);

          return (
            <>
              <div className='bg-gray-200 w-100 flex flex-col items-center rounded-2xl p-4'>
                <img src={item.image} alt="" height={100} width={100} />
                <h1>{item.title}</h1>
                <p>{item.category}</p>
                <p>{item.price}</p>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Home