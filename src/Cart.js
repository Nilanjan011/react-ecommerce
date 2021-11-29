import React,{useContext} from 'react';
import {
   Link,
   useHistory
} from 'react-router-dom';
import { add, total,get,update,remove,quantity,list } from 'cart-localstorage' ;
import myInitObject from './auth';
import {GlobalInfo} from './App';

export default function Cart() {
    var {color,getday} = useContext(GlobalInfo);
    const history = useHistory();
    function addCart(id,name,price) {
        add({id: id, name: name, price: price})
    
        // update quantity
        // var data = get(id);
        // var  qty=data.quantity+5;
        // console.log(qty);
        // update(id,'quantity',qty)
        
        var data=list();
        color=data.length;
        // history.push('/cart');
        getday(color);
    }
    function minus(id) {
        quantity(id,1)
        // quantity(id,-1)
    }
    function removeCart(id) {
        remove(id);
        var data=list();
        myInitObject.cartLen=data.length;
        color=data.length;
        getday(color);
    }
    return (
        <>
            <section className="section-main bg padding-y">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <Link href="#" className="img-wrap"> <img src="https://pixy.org/src/480/4800346.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                    <Link to="#" className="title">Some item name here</Link>
                                    <div className="price mt-1">$280.00</div>
                                    <button onClick={()=>addCart("12ggjjg","product name",200)} className="btn btn-warning">Add to Cart</button>
                                    <button onClick={()=>removeCart("12ggjjg")} className="btn btn-danger">Remove Cart</button>
                                    <button onClick={()=>minus("12ggjjg")} style={{backgroundColor: 'teal'}} >---</button>
                                </figcaption>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <Link to="#" className="img-wrap"> <img src="assets/images/items/3.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                <Link to="#" className="title">Great product name here</Link>
                                <div className="price mt-1">$56.00</div>
                                <button onClick={()=>addCart(12,"product name",56)} className="btn btn-warning">Add to Cart</button>
                                    <button onClick={()=>removeCart(12)} className="btn btn-danger">Remove Cart</button>
                                    <button onClick={()=>minus(12)} style={{backgroundColor: 'teal'}} >---</button>
                                </figcaption>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <Link href="#" className="img-wrap"> <img src="assets/images/items/4.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                <Link href="#" className="title">Just another product name</Link>
                                <div className="price mt-1">$179.00</div>
                                </figcaption>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <Link href="#" className="img-wrap"> <img src="assets/images/items/5.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                <Link href="#" className="title">Just another product name</Link>
                                <div className="price mt-1">$179.00</div> 
                                </figcaption>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <Link href="#" className="img-wrap"> <img src="assets/images/items/6.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                <Link href="#" className="title">Some item name here</Link>
                                <div className="price mt-1">$280.00</div>
                                </figcaption>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <Link href="#" className="img-wrap"> <img src="assets/images/items/7.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                <Link href="#" className="title">Great product name here</Link>
                                <div className="price mt-1">$56.00</div> 
                                </figcaption>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div href="#" className="card card-product-grid">
                                <Link href="#" className="img-wrap"> <img src="assets/images/items/9.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                <Link href="#" className="title">Just another product name</Link>
                                <div className="price mt-1">$179.00</div> 
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
            
    )
}