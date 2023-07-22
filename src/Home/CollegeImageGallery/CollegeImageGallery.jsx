import ImageGallery from "react-image-gallery";

const CollegeImageGallery = () => {
  // Sample data for college graduate's group pictures (you can replace this with your actual data)
  const collegeImages = [
    {
      original:
        "https://drive.google.com/uc?id=14GVNevTUJgMB7tBftb7yle2cx0GxNDuR",
      thumbnail:
        "https://drive.google.com/uc?id=14GVNevTUJgMB7tBftb7yle2cx0GxNDuR",
      description: "College Graduates Group Picture 1",
    },
    {
      original:
        "https://drive.google.com/uc?id=14GVNevTUJgMB7tBftb7yle2cx0GxNDuR",
      thumbnail:
        "https://drive.google.com/uc?id=14GVNevTUJgMB7tBftb7yle2cx0GxNDuR",
      description: "College Graduates Group Picture 2",
    },
    // Add more images as needed
  ];

  return <ImageGallery items={collegeImages} />;
};

export default CollegeImageGallery;
