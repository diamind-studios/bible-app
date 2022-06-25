import { swapFont, changeSize } from "../utils/fonts";
import { showSearch, submitSearch } from "../utils/menus";

const SideBar = () => {
  return (
    <div className="fixed top-14 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-m">
      <SideBarIcon id={'search-button'} icon={'🔎'} text={'Search...'}  click={(event) => showSearch(event)}></SideBarIcon>
      <SideBarIcon icon={'+'} text={'Increase Size'} click={() => changeSize('+')}></SideBarIcon>
      <p id="font-size" className="text-center font-extrabold">12</p>
      <SideBarIcon icon={'-'} text={'Decrease Size'} click={() => changeSize('-')}></SideBarIcon>
      <SideBarIcon icon={'Aa'} text={'Change Font'} click={() => swapFont()}></SideBarIcon>
      <form onSubmit={(e) => submitSearch(e)}>
        <input id="search-box" type="text" placeholder="Search..."
          className="absolute left-16 top-2 shadow-md 
          text-xs font-bold m-2 p-2 bg-gray-600 rounded-md 
          ease-linear transition-all duration-100 scale-0 origin-left
          z-20 w-28"></input>
        </form>
      </div>
  );
};

const SideBarIcon = ({ id=null, icon, text = 'tooltip ⚡️', click=() => console.log('test')}) => {
  return (
    <div id={id} className="sidebar-icon group" onClick={click}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default SideBar;