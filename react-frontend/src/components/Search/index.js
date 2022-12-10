import {Avatar} from "@mui/material";

const Search = () => {
    return ( <div className="search">
        <div className="searchForm">
            <input type="text" placeholder="Search for user"/>
        </div>
        <div className="userChat">
            <Avatar alt="A Chan" src="/static/images/avatar/1.jpg" sx={{ mr: 1, height: "30px", width: "30px", fontSize: "14px", backgroundColor: "#EA526F" }}/>
            <div className="userChatInfo">
                <span className="username">Amie</span>
            </div>

        </div>
    </div> );
}
 
export default Search;
