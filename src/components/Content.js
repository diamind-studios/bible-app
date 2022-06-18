import passage from "../utils/getScripture";

const Content = () => {
    return (
      <div id="scripture" className="absolute top-20 left-16 h-auto w-auto mx-32 bg-slate-800 text-gray-100">
        {passage.split('\n').map(str => <p className="mb-2 bg-gray-700 rounded-md">{str}</p>)}
      </div>
    );
  };
  
  export default Content;