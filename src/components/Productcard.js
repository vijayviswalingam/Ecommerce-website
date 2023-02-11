import React from 'react'

export default function Productcard(props) {
  return (
    <div className='card m-2' style={{width:300}}>
        <div className='m-2'>
            <img src={props.thumbnail} height={150} width={180} alt={props.title} className='border-radius-9'/>
        </div>
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <h6 className='mt-2'>Price: ${props.price}</h6>
            <h6>Discount: {props.discountPercentage}%</h6>
            <h6>Rating: {props.rating}<img src='https://icon-library.com/images/star-rating-icon/star-rating-icon-3.jpg' height={25} width={25}/></h6>
            <h6>Stock: {props.stock}</h6>
            <h6>Brand: {props.brand}</h6>
            <h6>Category: {props.category}</h6>
            <div>
                {props.stock > 0 ? <button className='btn btn-success'>Available</button> :<button className='btn btn-outline-danger'>Out of Stock</button>}
            </div>
        </div>
    </div>
  )
}
