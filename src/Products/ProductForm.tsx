import React from 'react'

interface ProductFormProps {

}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  return (
    <>
    <h2>Add Game To The Store</h2>
    <form action="">
        <input type="text" placeholder='Game Title' name='Title'/>
        <input type="text" placeholder='Price' name='Price'/>
        <input type="text" placeholder='id' name='id'/>
        <button>Add Price</button>
    </form>
    </>
  )
}

export default ProductForm;
