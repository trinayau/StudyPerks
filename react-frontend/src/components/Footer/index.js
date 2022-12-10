import Discord from './images/icons8-discord-new.svg'
import Facebook from './images/icons8-facebook.svg'
import Instagram from './images/icons8-instagram.svg'
import Twitter from './images/icons8-twitter.svg'

const Footer = () => {
    return (     <div class="footer">
    <div class="container">
      <div class="section">
        <div class="col">
          <a href="#" id="contact"></a>
          <div class="logo">StudyPerks</div>
        </div>
        <div class="col">
          <span>Contact information</span><br /><br />
          Telephone: xxxxxxxxxx<br />
          Email: contact@studyperks.com<br />
          <a href="">Online Chat</a><br />
          <a href="">Contact form</a>
        </div>
        <div class="col">
          <div class="socials">
            <span>Follow us</span><br />
            <div class="social-icons">
              <img src={Discord} alt="discord icon" />
              <img src={Facebook} alt="facebook icon"/>
              <img src={Instagram} alt="instagram icon" />
              <img src={Twitter} alt="twitter icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Footer;
