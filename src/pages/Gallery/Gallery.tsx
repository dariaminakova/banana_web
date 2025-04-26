import { assets } from "../../assets/assets";
import Masonry from "react-masonry-css";
import "./Gallery.css";

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const images = [...assets.menu, ...assets.drinks, ...assets.desserts];

  return (
    <div className='gallery-container'>
      <span className='gallery_title'>Gallery</span>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {images.map((imgSrc, index) => (
          <div key={index} className='photo-placeholder'>
            <img
              src={imgSrc}
              alt={`gallery-img-${index}`}
              style={{
                width: "100%",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
