import React from 'react'

const ProductChild = ({ productData, changeProduct }) => {
    // console.log(productData);
    return (
        <>
            <div className='bg-gray-300 inline-block p-4 rounded-[30px] text-center '>
                <img className='rounded-[30px]' src={productData.image} width={100} alt="" />
                <h1>{productData.title}</h1>
                <p>{productData.des}</p>
                <p>{productData.price}</p>
                <button onClick={() => changeProduct(productData.id)} className='bg-blue-600 text-[#fff] rounded-2xl p-[4px] mt-2'>click me</button>
            </div>
        </>
    )
}

export default ProductChild