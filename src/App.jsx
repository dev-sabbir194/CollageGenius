import "./App.css";
import CollegeCard from "./Home/CollegeCard/CollegeCard";
import CollegeImageGallery from "./Home/CollegeImageGallery/CollegeImageGallery";
import Header from "./Home/Header/Header";
import ResearchPapers from "./Home/ResearchPapers/ResearchPapers";
import College from "./components/College/College";
import ReviewSEctions from "./components/ReviewSEctions/ReviewSEctions";

function App() {
  return (
    <>
      <Header />
      <CollegeCard />
      <CollegeImageGallery />
      <ResearchPapers />
      <ReviewSEctions />
      <College />
    </>
  );
}

export default App;
