import  { useState } from "react";
import "./ResearchPapers.css";

const ResearchPapers = () => {
  
  const researchPaperData = {
    title: "Title of the Research Paper",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla vitae turpis quis felis hendrerit venenatis. Vivamus fringilla libero nec
      lorem tristique, eu varius est lacinia. Sed at mi vel odio posuere venenatis et sit amet turpis.
      Nullam ultricies, tortor et fermentum lobortis, erat libero lacinia neque, et blandit est felis ac erat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae turpis quis felis hendrerit venenatis.
      Vivamus fringilla libero nec lorem tristique, eu varius est lacinia. Sed at mi vel odio posuere venenatis et sit amet turpis.
      Nullam ultricies, tortor et fermentum lobortis, erat libero lacinia neque, et blandit est felis ac erat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae turpis quis felis hendrerit venenatis.
      Vivamus fringilla libero nec lorem tristique, eu varius est lacinia. Sed at mi vel odio posuere venenatis et sit amet turpis.
      Nullam ultricies, tortor et fermentum lobortis, erat libero lacinia neque, et blandit est felis ac erat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae turpis quis felis hendrerit venenatis.
      Vivamus fringilla libero nec lorem tristique, eu varius est lacinia. Sed at mi vel odio posuere venenatis et sit amet turpis.
      Nullam ultricies, tortor et fermentum lobortis, erat libero lacinia neque, et blandit est felis ac erat.`,
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="research-paper-container">
      <div className="image-wrapper">
        <img
          src="https://st.depositphotos.com/1017950/1581/i/600/depositphotos_15811567-stock-photo-research.jpg"
          alt="Research Paper"
        />
      </div>
      <div className="text-wrapper">
        <h2>{researchPaperData.title}</h2>
        <p className="paper-description">
          {showFullDescription
            ? researchPaperData.description
            : researchPaperData.description.slice(0, 800) + "..."}
          <span onClick={toggleDescription} className="see-more-link">
            {showFullDescription ? "See Less" : "See More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResearchPapers;
