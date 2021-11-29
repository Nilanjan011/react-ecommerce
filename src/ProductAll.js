import React from 'react';
import {
   Link
} from 'react-router-dom';

export default function ProductAll() {
    
    return (
        <>
            <section className="section-main bg padding-y">
                <div className="container">
      
                    <h3 className="text-primary pb-0">Shopping</h3>
                </div> 
                </section>
                
                <section className="section-name padding-y-sm">
                    <div className="container">
                    {/* propular product section  */}
                    
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-product-grid">
                                <Link to="/P_details/1/bkvsbvjks">
                                    <div className="img-wrap"> <img src="assets/images/items/1.jpg" /> </div>
                                    <figcaption className="info-wrap">
                                    <div className="title">Just another product name</div>
                                    <div className="price mt-1">$179.00</div> 
                                    </figcaption>
                                </Link>
                            </div>
                        </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                                <a href="#" className="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                                <figcaption className="info-wrap">
                                <a href="#" className="title">Some item name here</a>
                                <div className="price mt-1">$280.00</div> 
                                </figcaption>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                            <a href="#" className="img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
                            <figcaption className="info-wrap">
                            <a href="#" className="title">Great product name here</a>
                            <div className="price mt-1">$56.00</div> 
                            </figcaption>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                            <a href="#" className="img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
                            <figcaption className="info-wrap">
                            <a href="#" className="title">Just another product name</a>
                            <div className="price mt-1">$179.00</div>
                            </figcaption>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                            <a href="#" className="img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
                            <figcaption className="info-wrap">
                            <a href="#" className="title">Just another product name</a>
                            <div className="price mt-1">$179.00</div> 
                            </figcaption>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                            <a href="#" className="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                            <figcaption className="info-wrap">
                            <a href="#" className="title">Some item name here</a>
                            <div className="price mt-1">$280.00</div>
                            </figcaption>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                            <a href="#" className="img-wrap"> <img src="assets/images/items/7.jpg" /> </a>
                            <figcaption className="info-wrap">
                            <a href="#" className="title">Great product name here</a>
                            <div className="price mt-1">$56.00</div> 
                            </figcaption>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                            <a href="#" className="img-wrap"> <img src="assets/images/items/9.jpg" /> </a>
                            <figcaption className="info-wrap">
                            <a href="#" className="title">Just another product name</a>
                            <div className="price mt-1">$179.00</div> 
                            </figcaption>
                        </div>
                    </div>
                    </div> 

                    </div>
            </section>
                
            {/* propular product section  */}
        </>

    )
}