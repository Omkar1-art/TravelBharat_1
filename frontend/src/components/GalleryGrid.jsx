function GalleryGrid() {

  const images = [1,2,3,4,5,6];

  return (
    <div className="gallery-grid">

      {images.map((item)=>(
        <div
          key={item}
          className="gallery-item"
        >
          Image {item}
        </div>
      ))}

    </div>
  );
}

export default GalleryGrid;