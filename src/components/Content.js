const Content = () => {
  return (
    <div id="tabs">
      <Tab></Tab>
    </div>
  );
};

const Tab = () => {
  return (
    <div id="tab1" className="tab absolute top-20 left-16 h-auto w-auto mx-32 bg-slate-800 text-gray-100">
      <h1 className="topbar-icon" value="2" type="translation">KJV</h1>
      <div className="scripture-text shadow-lg bg-gray-800 rounded-xl">
      </div>
    </div>
  )
}
  
  export default Content;