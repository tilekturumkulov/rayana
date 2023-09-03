import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';



const Gallery = ({itemData, imageActive, setImageActive}) => {
    return (
        <div className='gallery'>
            <div className="container">
                <h2 className="gallery__title">Галерея</h2>
          <Box sx={{ width: '100%', height: '100%'}}>
              <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={item.img}
                      srcSet={item.img}
                      alt={item.title}
                      loading="lazy"
                      />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            </div>
        </div>
    );
};

export default Gallery;


