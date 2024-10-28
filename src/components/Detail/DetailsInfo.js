"use client"
import React, { useState } from 'react'
import Pincode from '../Pincode/Pincode'

const DetailsInfo = ({name,price,description,image,quantity,stockDetails}) => {
        console.log(stockDetails)
        console.log(name)

        const [isPincodeValid, setIsPincodeValid] = useState(false);
  return (
    
    
    <section
        className="your-favorite-food gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="food-photo-section">
                <img alt="img" src={image}/>
                {/* <a href="#" className="one">
                  <i className="fa-solid fa-burger" />
                  Burgers
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-solid fa-cheese" />
                  Steaks
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-solid fa-pizza-slice" />
                  Pizza
                </a> */}
              </div>
              
            </div>
            <div
              className="col-lg-6 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="food-content-section">
                <h2 > {name} </h2>

                
                <p>{description}
                    
                </p>

                <div className="price-detail">
                    <h2>{price}</h2>
                    {/* <div className="qty-input">
                    <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    >
                        -
                    </button>
                    <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <button
                        className="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                    </div> */}
                </div>
                <h4>Indigrents Details</h4>
                <ul className="menu-dish">
                    <li>Nulla porttitor massa id;</li>
                    <li>Aliquam vestibulum morbi;</li>
                    <li>Blandit donec adipiscing;</li>
                </ul>


                <>
                <Pincode onPincodeValid={setIsPincodeValid} />
                {stockDetails === "In-Stock" ? (
                  <div>
                {isPincodeValid && <button className="button-price mt-5">
                    Add to Basket
                    <i className="fa-solid fa-bag-shopping" />
                </button>}
                </div>
            ) : (
                <h5 className="my-3 text-danger">Out of Stock</h5>
            )}
                </>      
                

                {/* <Link href="checkout" className="button button-2">
                  Order Now
                </Link> */}
              </div>
            </div>
          </div>
        </div>
    </section>
    
  )


}

export default DetailsInfo