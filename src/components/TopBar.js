const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 h-14 w-screen flex flex-row bg-gray-900 text-white shadow-m z-10">
      <h1 id="bible-header" className="align-middle text-3xl font-bold uppercase mt-2 mx-4">Genesis 1</h1>
      <TopBarIcon icon={'<<'} text={'Previous Book'}></TopBarIcon>
      <TopBarIcon icon={'<'} text={'Previous Chapter'}></TopBarIcon>
      <h1 id="reference" className="align-middle text-3xl font-bold uppercase mt-2 mx-4 select-none">📖</h1>
      <TopBarIcon icon={'>'} text={'Next Chapter'}></TopBarIcon>
      <TopBarIcon icon={'>>'} text={'Next Book'}></TopBarIcon>
    </div>
  );
};

const TopBarIcon = ({ icon, text = 'tooltip ⚡️', click=() => {return null}}) => {
  return (
    <div className="topbar-icon group" onClick={click}>
      {icon}
      <span className="topbar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};


export default TopBar