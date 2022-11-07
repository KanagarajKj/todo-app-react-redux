import React, { useState } from 'react';
import { addTodo, removeTodo, deleteTodo } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';

const HomePage = () => {
  const [inputData, setInputData] = useState('');
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    console.log(updatedList);
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

  const submitHandler = () => {
    if (!inputData) {
      alert('Please Enter the Task');
    } else {
      dispatch(addTodo(inputData));
      setInputData('');
    }
  };

  return (
    <section className="todo-list">
      <div className="title">
        <h2>To-Do List</h2>
      </div>

      <form action="#" className="form" onSubmit={submitHandler}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your daily task..."
            id="task"
            name="task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button>
            <FaCheck />
          </button>
        </div>
      </form>

      <div className="list">
        {list.map((item) => {
          return (
            <div className="eachItem" key={item.id}>
              <h1 className={isChecked(item.data)}>{item.data}</h1>
              <div className="eachItems-btn">
                <input
                  type="checkbox"
                  name="check-list"
                  id="check-list"
                  className="Checkbox"
                  value={item.data}
                  onChange={handleCheck}
                />
                <button onClick={() => dispatch(removeTodo(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <button className="delete-btn" onClick={() => dispatch(deleteTodo())}>
          DELETE ALL
        </button>
      </div>
    </section>
  );
};

export default HomePage;
