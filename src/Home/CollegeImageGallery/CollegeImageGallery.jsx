import ImageGallery from "react-image-gallery";

const CollegeImageGallery = () => {
 
  const collegeImages = [
    {
      original:
        "https://www.collegetransitions.com/wp-content/uploads/2014/05/shutterstock_789412672-1200x675.jpg",
      thumbnail:
        "https://www.collegetransitions.com/wp-content/uploads/2014/05/shutterstock_789412672-1200x675.jpg",
      description: "College Graduates Group Picture 1",
    },
    {
      original:
        "https://www.ppic.org/wp-content/uploads/backs-of-graduates-wearing-mortar-boards-768x512.jpg",
      thumbnail:
        "https://www.ppic.org/wp-content/uploads/backs-of-graduates-wearing-mortar-boards-768x512.jpg",
      description: "College Graduates Group Picture 2",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPOSVUCp6mjc_4gZXM5r_40X9n8AfwHn31vNAoAOT5_G0YnNkChUL6ciQlHvzXRd5T0Q&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPOSVUCp6mjc_4gZXM5r_40X9n8AfwHn31vNAoAOT5_G0YnNkChUL6ciQlHvzXRd5T0Q&usqp=CAU",
      description: "College Graduates Group Picture 3",
    },
  ];

  return <ImageGallery items={collegeImages} />;
};

export default CollegeImageGallery;
