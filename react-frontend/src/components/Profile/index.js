const Profile = () => {
    return ( <>
    <hr/>

<div class="features">

    <h3>Join a room</h3>

    <div class="section">
        <div class="col-4">
            Users: 3/10<br/>
            Timer: 25 | 5<br/>
            Subject: General
        </div>
        <div class="col-4">
            Users: 7/10<br/>
            Timer: 50 | 10<br/>
            Subject: Maths
        </div>
        <div class="col-4">
            Users: 5/10<br/>
            Timer: 45 | 15<br/>
            Subject: Chemistry
        </div>
        <div class="col-4">
            Users: 1/10<br/>
            Timer: 30 | 5<br/>
            Subject: History
        </div>
    </div>

    <div class="room-links prof">
        <div class="btn">create your own</div>
        <a href="#">See more availiable rooms <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
</div>
    </> );
}
 
export default Profile;
