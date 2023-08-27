import React, { useState, useRef, useEffect } from "react";

function Todoform(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChenge = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
   
  <div>
    <br/>
    <form className="Todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add-Todo"
        value={input}
        className="todo-input"
        name="text"
        onChange={handleChenge}
        ref={inputRef}
      />
      <button className="todo-button">Add Todo</button>
    </form>
    </div>
  );
}

export default Todoform;
