import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.css';

const Scrollbar = () => {
    return (
        <ul className="smothscroll">
            <li>
                <AnchorLink href="#hero" smooth={true} duration={500}>
                    <i className="ti-arrow-up"></i>
                </AnchorLink>
            </li>
            <li>
                <AnchorLink href="#glimpse" smooth={true} duration={500}>
                    <i className="ti-arrow-down"></i> {/* Scroll down icon */}
                </AnchorLink>
            </li>
           
        </ul>
    );
};

export default Scrollbar;
