import {passage} from "../utils/getScripture";

const Content = () => {
  let count = 0
  return (
    <div id="scripture" className="absolute top-20 left-16 h-auto w-auto mx-32 bg-slate-800 text-gray-100">
      {passage.split('\n').map(str => <p className="mb-2 z-0" key={count++}>{str}</p>)}
    </div>
  );
};
  
  export default Content;