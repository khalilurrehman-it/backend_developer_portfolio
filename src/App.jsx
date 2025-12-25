import "./App.css";
import HomeCodeSnippetSection from "./ClientComponents/Home/HomeCodeSnippetSection";
import HomeContactSection from "./ClientComponents/Home/HomeContactSection";
import HomeExperienceSection from "./ClientComponents/Home/HomeExperienceSection";
import HomeHeroSection from "./ClientComponents/Home/HomeHeroSection";
import HomeProjectsSection from "./ClientComponents/Home/HomeProjectsSection";
import HomeSystemDesignSection from "./ClientComponents/Home/HomeSystemDesignSection";
import NavigationBar from "./ClientComponents/Home/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <HomeHeroSection />
      <HomeSystemDesignSection />
      <HomeProjectsSection />
      <HomeCodeSnippetSection />
      <HomeExperienceSection />
      <HomeContactSection />
    </div>
  );
}

export default App;
