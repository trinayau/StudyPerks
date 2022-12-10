import CatProfile from './images/icons8-cat-profile-80.png'
import Timer from './images/icons8-timer-64.png'
import Fire from './images/icons8-fire-94.png'
import Rank from './images/icons8-ranking-64.png'

const AccountPage = () => {
    return ( <div className="accountPage">
            <div class="user">
        <div class="avatar">
            <img src={CatProfile} alt="profile icon with cat on it"/>
        </div>
        <div class="userinfo">
            <h3>Username</h3>
            <p>email@email.co.uk</p>
        </div>
    </div>

<div class="features">
    <div class="section">
        <div class="col-4 data">
            <div class="icon"><img src={Timer} alt="timer icon"/></div>
            <div class="stats">
                <p>Today</p>
                <p class="stat">3.7hrs</p>
            </div>
        </div>
        <div class="col-4 data">
            <div class="icon"><img src={Timer} alt="timer icon"/></div>
            <div class="stats">
                <p>This Week</p>
                <p class="stat">10.3hrs</p>
            </div>
        </div>
        <div class="col-4 data">
            <div class="icon"><img src={Fire} alt="fire icon"/></div>
            <div class="stats">
                <p>Study Streak</p>
                <p class="stat">3</p>
            </div>
        </div>
        <div class="col-4 data">
            <div class="icon"><img src={Rank} alt="rank icon"/></div>
            <div class="stats">
                <p>Ranking</p>
                <p class="stat">#17</p>
            </div>
        </div>
    </div>
</div>

<div class="hr"><hr/></div>
<div class="section rewards">
    <div class="col-2 perks">
        <h4>total perk points</h4>
        <p class="points">300</p>
        <p>Total hours studied: 17.7hrs</p>
    </div>
    <div class="col-2 claims">
        <div class="reward">
            <div class="claimText">
                <span>Starbucks</span>
                <p>Tall Latte/Cuppucino/Americano/tea</p>
            </div>
            <div class="btn claim">200 pts</div>
        </div>
        <div class="reward">
            <div class="claimText">
                <span>Costa</span>
                <p>Medium Latte/Cuppucino/Americano/tea</p>
            </div>
            <div class="btn claim">200pts</div>
        </div>
        <div class="reward">
            <div class="claimText">
                <span>Gongcha</span>
                <p>Milk tea with pearls</p>
            </div>
            <div class="btn claim">300 pts</div>
        </div>
    </div>
</div>
    </div> );
}
 
export default AccountPage;
