import { swapFont, changeSize } from "../utils/fonts";

const SideBar = () => {
  return (
    <div className="fixed top-14 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-m">
      <SideBarIcon icon={'+'} text={'Increase Size'} click={() => changeSize('+')}></SideBarIcon>
      <p id="font-size" className="text-center font-extrabold">12</p>
      <SideBarIcon icon={'-'} text={'Decrease Size'} click={() => changeSize('-')}></SideBarIcon>
      <SideBarIcon icon={'🔎'} text={'Search...'}></SideBarIcon>
      <SideBarIcon icon={'Aa'} text={'Change Font'} click={() => swapFont()}></SideBarIcon>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip ⚡️', click=() => console.log('test')}) => {
  return (
    <div className="sidebar-icon group" onClick={click}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default SideBar;