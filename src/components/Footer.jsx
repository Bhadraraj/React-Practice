import React from 'react';
import '../style/footer.css'

function Footer() {
    const foot = [
        { c1: "About Us", c2: "Sign in", c3: "Become a Vendor", c4: "Milk & Flavoured Milk" },
        { c1: "Delivery Information", c2: "View Cart", c3: "Afflicate Program", c4: "Butter and Margarine" },
        { c1: "Privacy Policy", c2: "My Wishlist", c3: "Farm Business", c4: "Eggs substitues" },
        { c1: "Terms & Conditions", c2: "Tract My Order", c3: "Farm Careers", c4: "Marmaiades" },
        { c1: "Contact Us", c2: "Help Ticket", c3: "Help Tickets", c4: "Help Tickets" },
        { c1: "Support Center", c2: "Shipping Details", c3: "Shipping Details", c4: "Shipping Details" },
        { c1: "Careers", c2: "Compare Products", c3: "Compare Products", c4: "Compare Products" },
    ]


    return (
        <>
            <div className="footerDivider">
                {/* div one */}
                <div className="addressDiv">
                    <img src="#" alt="Nest Logo" className="Logo" />
                    <p>Awesome grocery store website template</p>
                    <p><strong>Address:</strong> 5171 W Campbell Ave Undefined kent, Utah 53127 United States</p>
                    <p><strong>Call Us:</strong>  &#10088;+91&#10089;-540-025-124553</p>
                    <p><strong>Email:</strong> sale@Nest.com</p>
                    <p><strong>Hours:</strong> 10.00-18.00, Mon-Sat</p>
                </div>

                {/* div Two */}
                <div className='Company'>
                    <h3>Company</h3>
                    {foot.map((textContent) => (
                        <h5>{textContent.c1}</h5>
                    ))}
                </div>

                {/* div Three */}
                <div className='Account'>
                    <h3>Company</h3>
                    {foot.map((textContent) => (
                        <h5>{textContent.c2}</h5>
                    ))}
                </div>

                {/* div Four */}
                <div className='Corporate'>
                    <h3>Company</h3>
                    {foot.map((textContent) => (
                        <h5>{textContent.c3}</h5>
                    ))}
                </div>

                {/* div Five */}
                <div className='Popular'>
                    <h3>Company</h3>
                    {foot.map((textContent) => (
                        <h5>{textContent.c4}</h5>
                    ))}
                </div>

                {/* div Six */}
                <div className='linkDiv'>
                    <h3>Install App</h3>
                    <p>From App Store or Google Play</p>
                    <div className='storeDiv'>
                        <img src="#1" alt="App Store" />
                        <img src="#" alt="Play Store" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <div className='cardDiv'>
                        <img src="#1" alt="Visa" />
                        <img src="#2" alt="Master" />
                        <img src="#3" alt="Mastro" />
                        <img src="#4" alt="Platinum" />
                    </div>
                </div>
            </div>                                                      
            <hr></hr>
            <div className='Bottom'>
                <div>
                    <p>&#169;2024, <span>Nest</span>-HTML Ecommerce Template </p>
                    <p>All rights reserved</p>
                </div>

                <div className='tableDiv'>
                    <table className='t1'>
                        <tr>
                            <td> <img src="#3" alt="Phone" /></td>
                            <td>1900-6666 <br />Working 8:00-22:00</td>
                        </tr>

                    </table>

                    <table className='t2'>
                        <tr>
                            <td> <img src="#3" alt="Phone" /></td>
                            <td>1900-8888 <br />24/7 Suport Sevices</td>
                        </tr>
                    </table>
                </div>
                <div className='Icons'>
                    <div>
                        <p>Follow Us:
                            <img src="#1" alt="FB" className='FB' />
                            <img src="#2" alt="IG" />
                            <img src="#3" alt="TW" />
                            <img src="#4" alt="PT" />
                            <img src="#5" alt="YT" /></p>
                    </div>
                    <p>Up to 15% discount on your first subscribe</p>
                </div>
            </div>
        </>
    )
}
export default Footer