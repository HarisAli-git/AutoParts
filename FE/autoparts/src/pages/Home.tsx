import bgpic from "../assets/home-pic.webp";

const Home: React.FunctionComponent = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgpic})`, // Correctly setting the background image using the URL
      }}
    ></div>
  );
};

export default Home;
