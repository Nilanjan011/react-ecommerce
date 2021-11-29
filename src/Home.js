import React from 'react';
import {
   Link
} from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="section-main bg padding-y">
                <div className="container">

                <div className="row">
                    <aside className="col-md-3">
                        <nav className="card">
                            <ul className="menu-category">
                                <li><Link href="#">Best clothes</Link></li>
                                <li><Link href="#">Automobiles</Link></li>
                                <li><Link href="#">Home interior</Link></li>
                                <li><Link href="#">Electronics</Link></li>
                                <li><Link href="#">Technologies</Link></li>
                                <li><Link href="#">Digital goods</Link></li>
                                <li className="has-submenu"><Link href="#">More items</Link>
                                    <ul className="submenu">
                                        <li><Link href="#">Submenu name</Link></li>
                                        <li><Link href="#">Great submenu</Link></li>
                                        <li><Link href="#">Another menu</Link></li>
                                        <li><Link href="#">Some others</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="col-md-9">
                    <article className="banner-wrap">
                            <img src="assets/images/2.jpg" className="w-100 rounded" />
                    </article>
                    </div> 
                </div>
                </div> 
                </section>
                
                <section className="section-name padding-y-sm">
                    <div className="container">

                    <header className="section-heading">
                        <Link to="/productAll" className="btn btn-outline-primary float-end">See all</Link>
                        <h3 className="section-title">Popular products</h3>
                    </header>
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
                                <Link href="#" className="img-wrap"> <img src="assets/images/items/2.jpg" /> </Link>
                                <figcaption className="info-wrap">
                                <Link href="#" className="title">Some item name here</Link>
                                <div className="price mt-1">$280.00</div> 
                                </figcaption>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div href="#" className="card card-product-grid">
                            <Link href="#" className="img-wrap"> <img src="assets/images/items/3.jpg" /> </Link>
                            <figcaption className="info-wrap">
                            <Link href="#" className="title">Great product name here</Link>
                            <div className="price mt-1">$56.00</div> 
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
                
            {/* propular product section  */}
        </>

    )
}