import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([])


  function submitHandler(e){
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({title,detail})
    setTask(copyTask)

    console.log(copyTask);
    

    setTitle("")
    setDetail("")
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className="flex gap-5 lg:w-1/2 items-start p-8 flex-col">
          <h1 className="text-3xl font-bold">Add Notes :</h1>
          {/* PEHLA INPUT FOR HEADING */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-2 font-medium w-full border-2 rounded outline-none"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />

          {/* DETAILED WALA INPUT */}
          <textarea
            type="text"
            placeholder="Write Details"
            className="px-5 h-32 w-full font-medium flex items-start flex-row py-2 outline-none border-2 rounded"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value)
            }}
          />

          {/* BUTTON SECTION */}
          <button className="bg-white active:scale-95 text-black font-medium cursor-pointer w-full px-5 py-2 rounded">
            Add Notes
          </button>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
      <h1 className="text-3xl font-bold">Recent Notes :</h1>
        <div className="flex h-full overflow-auto flex-wrap gap-4 mt-5">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
