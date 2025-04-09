import Masonry from 'react-masonry-css';
import './Gallery.css';

const photos = Array.from({ length: 17 });

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((_, index) => (
          <div
            key={index}
            className="photo-placeholder"
            style={{ height: `${120 + (index % 5) * 30}px` }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;