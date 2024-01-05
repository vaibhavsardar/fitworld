import React from 'react'
import ProfileImg from '../images/protein.webp'

const ProductCard = () => {
  return (
    <>
      <div class="card ">
          <img className="product-img" src={ProfileImg} alt="Image Description"/>
          <div className="card-footer ">
            <p className="product-name">MuscleBlaze Whey Gold 100% Whey Protein Isolate, 1 kg (2.2 lb), Rich Milk Chocolate</p>
            <a className='buy-btn' href="#">Buy now</a>
          </div>
        </div>
    </>
  );
}

export default ProductCard;
