import HeroImg from "../../pages/Homepage/images/hero-img.png";

const Hero = () => {

  return (
    <>
        <div class="hr"><hr /></div>
     
    <div class="section hero">
      <div class="col-2 hero-text">
        <h1>Study & Earn</h1>
        <p></p>
        <p>
          Join a group or create your own <br />
          Convert your study time to perks like that coffee you're
          <br />
          needing right now
        </p>
        <div class="btn">sign up</div>
      </div>
      <div class="col-2 hero-img">
        <img src={HeroImg} alt="person studying" />
      </div>
    </div>
    </>
  );
};

export default Hero;
