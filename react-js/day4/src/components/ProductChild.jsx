import React from 'react'

const ProductChild = ({ productData }) => {
    console.log(productData);
    return (
        <>
            <div className='bg-gray-300 inline-block p-4 rounded-[30px] text-center '>
                <img className='rounded-[30px]' src={productData.image} alt="" />
                <h1>{productData.title}</h1>
                <p>{productData.des}</p>
                <p>{productData.price}</p>
                <button className='bg-blue-600 text-[#fff] rounded-2xl p-[4px] mt-2'>click me</button>
            </div>
        </>
    )
}

export default ProductChild