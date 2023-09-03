import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Gallery from '../../components/Gallery/Gallery';
import Faq from '../../components/Faq/Faq';
import Form from '../../components/Form/Form';
import Contact from '../../components/Contact/Contact';
import Modal from '../../components/Modal/Modal';
import GalleryModal from '../../components/GalleryModal/GalleryModal';
import i1 from '../../../public/images/1.jpeg'
import i2 from '../../../public/images/2.png'
import i3 from '../../../public/images/3.jpeg'
import i4 from '../../../public/images/4.jpeg'
import i5 from '../../../public/images/5.jpeg'
import i6 from '../../../public/images/6.jpeg'
import i7 from '../../../public/images/7.jpeg'
import i8 from '../../../public/images/8.jpeg'
import i9 from '../../../public/images/9.png'
import i10 from '../../../public/images/10.png'
import i11 from '../../../public/images/11.png'
import i12 from '../../../public/images/12.png'

const Home = ({active, setActive, imageActive, setImageActive}) => {
    const itemData = [
        {
          img: i1,
          title: 'dress image',
          id: 1,
        },
        {
          img: i2,
          title: 'dress image',
          id: 2,
        },
        {
          img: i3,
          title: 'dress image',
          id: 3,
        },
        {
          img: i4,
          title: 'dress image',
          id: 4,
        },
        {
          img: i5,
          title: 'dress image',
          id: 5,
        },
        {
          img: i6,
          title: 'dress image',
          id: 1,
        },
        {
          img: i7,
          title: 'dress image',
          id: 1,
        },
        {
          img: i8,
          title: 'dress image',
          id: 1,
        },
        {
          img: i9,
          title: 'dress image',
          id: 1,
        },
        {
          img: i10,
          title: 'dress image',
          id: 1,
        },
        {
          img: i11,
          title: 'dress image',
          id: 1,
        },
        {
          img: i12,
          title: 'dress image',
          id: 1,
        },
      ]
    return (
        <>
        <Modal active={active} setActive={setActive}/>
        <Banner/>
        <About/>
        <Services/>
        <Gallery itemData={itemData} imageActive={imageActive} setImageActive={setImageActive}/>
        <GalleryModal imageActive={imageActive} setImageActive={setImageActive} itemData={itemData}/>
        <Faq/>
        <Form/>
        <Contact/>
        </>
    );
};

export default Home;