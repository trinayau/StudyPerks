
import Hero from './images/hero-img.png'
import OnlineChat from './images/online-chat.png'
import Timer from './images/timer.png';
import Coffee from './images/coffee.png';
import Console from './images/console.png';
import BubbleChat from './images/bubble-chat.png';
import Hours from './images/24-hours-support.png';

const Homepage = () => {

    return ( 
    <div className="home">
        <div className="header">
        <div class="container">

        </div>
        </div>

        <div class="features">
      <a href="#" id="about" ></a>
      <h3>Improve your study</h3>

      <div class="section">
        <div class="col-3">
          <div class="feature">
            <img src={OnlineChat} alt="online chat bubble" />
          </div>
          <div class="col-3-text">
            <h4>Alone or in a group</h4>
            <p>
              Study in a group with other people to help boost your productivity
              and improve your study flow <br />Or alone for full concentration
              mode
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="feature">
            <img src={Timer} alt="timer" />
          </div>
          <div class="col-3-text">
            <h4>Pomodoro Style</h4>
            <p>
              One of the best methods for studying. <br />
              You’re in control, set your desired time blocks and start
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="feature">
            <img src={Coffee} alt="cup of coffee" />
          </div>
          <div class="col-3-text">
            <h4>Get rewarded</h4>
            <p>
              Your total time studied will be converted to perk points allowing
              you to exchange in at out partnered cafes for a coffee or even a
              bubble tea
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="hr"><hr /></div>
    {/* <!-- room selection  --> */}
    <div class="features">
      <a id="join"></a>
      <h3>Join a room</h3>

      <div class="section">
        <div class="col-4">
          Users: 3/10<br />
          Timer: 25 | 5<br />
          Subject: General
        </div>
        <div class="col-4">
          Users: 7/10<br />
          Timer: 50 | 10<br />
          Subject: Maths
        </div>
        <div class="col-4">
          Users: 5/10<br />
          Timer: 45 | 15<br />
          Subject: Chemistry
        </div>
        <div class="col-4">
          Users: 1/10<br />
          Timer: 30 | 5<br />
          Subject: History
        </div>
      </div>

      <div class="room-links">
        <div class="btn">create your own</div>
        <a href="/"
          >See more available rooms
          <i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
    </div>

    <div class="hr"><hr /></div>



    <div class="features">
      <a href="/" id="features"></a>
      <h3>more than just a study room</h3>

      <div class="section">
        <div class="col-3">
          <div class="feature">
            <img src={Console} alt="video game console" />
          </div>
          <div class="col-3-text">
            <h4>play</h4>
            <p>
              Change it up<br />
              Engage in a brain stimulating games on your break
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="feature">
            <img src={BubbleChat} alt="bubble chat icon" />
          </div>
          <div class="col-3-text">
            <h4>get talking</h4>
            <p>
              Chat features allow you to chat with others to discuss study
              points or ask for help.<br />
              Dont struggle alone
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="feature">
            <img src={Hours} alt="24 hours support" />
          </div>
          <div class="col-3-text">
            <h4>24/7</h4>
            <p>
              Available worldwide, open 24/7 <br />You will always find a group
              to study with no matter what time it is
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="section">
          <div class="col">
            <a href="/" id="contact"></a>
            <div class="logo">StudyPerks</div>
          </div>
          <div class="col">
            <span>Contact information</span><br /><br />
            Telephone: xxxxxxxxxx<br />
            Email: contact@studyperks.com<br />
            <a href="/">Online Chat</a><br />
            <a href="/">Contact form</a>
          </div>
          <div class="col">
            <div class="socials">
              <span>Follow us</span><br />
              <div class="social-icons">
                <img src="images\icons8-discord-new.svg" alt="discord icon"/>
                <img src="images\icons8-facebook.svg" alt="facebook icon"/>
                <img src="images\icons8-instagram.svg" alt="instagram icon"/>
                <img src="images\icons8-twitter.svg" alt="twitter icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
     );
}
 
export default Homepage;
