import "./Banner.css";

const Banner = () => {
  return (
    <header className="header">
      <div className='background'>
        <img src="/images/Banner-background.jpg" ></img>
      </div>
      <div className="container">
        <img className="banner" src="/images/Banner.jpg" alt='banner'/>

        <h1>TEAM ORGANIZER</h1>
      </div>
    </header>
  );
};

export default Banner
