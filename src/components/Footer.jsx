import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    return (
        <div className='bg-ash text-white p-5 text-center'>
            <div className="policy mb-5 flex items-center justify-center gap-7">
                <a href="CancellationAndRefundPolicy" className="footer-link">Refund Policy</a>
                <a href="Contact" className="footer-link">Contact Us</a>
                <a href="TermsAndConditions" className="footer-link">Terms & Conditions</a>
            </div>
            <div className="soical mb-5">
                <i className="fa fa-facebook text-ash text-2xl cursor-pointer"></i>
                <i className="fa fa-twitter text-ash text-2xl cursor-pointer"></i>
                <i className="fa fa-instagram text-ash text-2xl cursor-pointer"></i>
                <i className="fa fa-linkedin text-ash text-2xl cursor-pointer"></i>
            </div>
            <div className="rights mb-5 text-lightash">
                &copy; 2024 Codevocado. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer