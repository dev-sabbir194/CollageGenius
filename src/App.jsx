
import "./App.css";
import CollegeCard from "./Home/CollegeCard/CollegeCard";
import CollegeImageGallery from "./Home/CollegeImageGallery/CollegeImageGallery";
import Header from "./Home/Header/Header";
import ResearchPapers from "./Home/ResearchPapers/ResearchPapers";

function App() {
  return <>
    <Header/>
    <CollegeCard />
    <CollegeImageGallery />
    <ResearchPapers/>
  </>;
}

export default App;
