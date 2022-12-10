import ChatNav from "../ChatNav";
import Search from "../Search";
import Chats from "../Chats";

const Sidebar = () => {
    return ( <div className="sidebar">
        <ChatNav/>
        <Search/>
        <Chats/>
    </div> );
}
 
export default Sidebar;
