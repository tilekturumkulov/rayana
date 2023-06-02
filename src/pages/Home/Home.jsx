import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Gallery from '../../components/Gallery/Gallery';
import Faq from '../../components/Faq/Faq';
import Form from '../../components/Form/Form';
import Contact from '../../components/Contact/Contact';
// import Modal from '../../components/Modal/Modal';

const Home = () => {
    return (
        <>
        {/* <Modal/> */}
        <Banner/>
        <About/>
        <Services/>
        <Gallery/>
        <Faq/>
        <Form/>
        <Contact/>
        </>
    );
};

export default Home;