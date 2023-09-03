import React from 'react';

const GalleryModal = ({itemData, imageActive, setImageActive}) => {
    if (imageActive){
        return (
            <div className='gallery__modal'>
                <div className="container">
                    <div className="gallery__modal-content">
                        <img src={itemData[imageActive]} alt={itemData.title} />
                    </div>
                </div>
            </div>
        )
    }
};

export default GalleryModal;