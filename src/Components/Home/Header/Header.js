import React, { useEffect } from 'react';
import './Header.css'
import banner from '../../../image/remove-banner.png'
import { useSpring, animated } from 'react-spring'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    const styles = useSpring({
        loop: { reverse: true },
        from: { y: 0 },
        to: { y: 15 },
        delay: 300,
    });

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);

    return (
        <section className="header-section">
            <div className="row">
                <div  data-aos="fade-right" className="col-md-7  d-flex align-items-center justify-content-center">
                    <div className="w-75">
                        <h1 className="pb-4">Welcome to <span className="name-color fw-bold">Royal Furniture</span></h1>
                        <h3>Best Choice for your Interior</h3>
                        <h5 className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe assumenda magnam laborum hic dolores quibusdam, doloribus ipsam dolorem beatae consectetur. Molestiae vero dolorem esse rerum amet fuga hic enim molestias, quidem accusamus blanditiis veritatis facere odit eius rem earum cumque deleniti? Dolorem eius tempora possimus odit nihil, ut minus est.</h5>
                        <a className="nav-hover" href="#aboutUs"><button className="header-button">About Us</button></a><a className="nav-hover" href="#contact"><button className="header-button">Contact Us</button></a>
                    </div>
                </div>
                <div className="col-md-5 col- banner d-flex align-items-center">
                    <animated.div style={styles}>
                        <img className="img-fluid" src={banner} alt="" />
                    </animated.div>
                </div>
            </div>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#fff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,160C672,181,768,203,864,197.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
    );
};

export default Header;