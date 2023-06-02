import React from 'react';
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.jpg'
import g5 from '../../assets/g5.jpg'
import g6 from '../../assets/g6.jpg'
import g7 from '../../assets/g7.jpg'
import g8 from '../../assets/g8.webp'
import g9 from '../../assets/g9.jpg'


const Gallery = () => {
    return (
        <div className='gallery'>
            <div className="container">
                <h2 className="gallery__title">Галерея</h2>
                {/* <div className="gallery__content">
                    <a href={g1} className="gallery__content-item">
                        <img src={g1} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g2} className="gallery__content-item">
                        <img src={g2} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g3} className="gallery__content-item">
                        <img src={g3} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g4} className="gallery__content-item">
                        <img src={g4} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g5} className="gallery__content-item">
                        <img src={g5} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g6} className="gallery__content-item">
                        <img src={g6} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g7} className="gallery__content-item">
                        <img src={g7} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g8} className="gallery__content-item">
                        <img src={g8} alt="" className="gallery__content-item_img" />
                    </a>
                    <a href={g9} className="gallery__content-item">
                        <img src={g9} alt="" className="gallery__content-item_img" />
                    </a>
                </div> */}
                <div className="gallery-image">
    <div className="img-box">
      <img src={g1} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Library</p>
          <p className="opacity-low">Architect Design</p> */}
        </div>
      </div> 
    </div>
    <div className="img-box">
      <img src={g2} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Night Sky</p>
          <p className="opacity-low">Cinematic</p> */}
        </div>
      </div>
    </div>
    <div className="img-box">
      <img src={g3} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Tea Talk</p>
          <p className="opacity-low">Composite</p> */}
        </div>
      </div>
    </div>
    <div className="img-box">
      <img src={g4} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Road</p>
          <p className="opacity-low">Landscape</p> */}
        </div>
      </div> 
    </div>
    <div className="img-box">
      <img src={g5} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Sea</p>
          <p className="opacity-low">Cityscape</p> */}
        </div>
      </div> 
    </div>
    <div className="img-box">
      <img src={g6} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Vintage</p>
          <p className="opacity-low">Cinematic</p> */}
        </div>
      </div> 
    </div>
    <div className="img-box">
      <img src={g7} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Vintage</p>
          <p className="opacity-low">Cinematic</p> */}
        </div>
      </div> 
    </div>
    <div className="img-box">
      <img src={g8} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Vintage</p>
          <p className="opacity-low">Cinematic</p> */}
        </div>
      </div> 
    </div>
    <div className="img-box">
      <img src={g9} alt="" />
      <div className="transparent-box">
        <div className="caption">
          {/* <p>Vintage</p>
          <p className="opacity-low">Cinematic</p> */}
        </div>
      </div> 
    </div>
  </div>
            </div>
        </div>
    );
};

export default Gallery;