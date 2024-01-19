import React, { useState, useEffect } from 'react';

const MemoApp = () => {
  const [todos, setTodos] = useState([]);
  const [memo, setMemo] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    document.title = `Memo App - Total Todos: ${todos.length}`;
  }, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: todos.length + 1, content: 'New Todo' }]);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddCustomTodo = () => {
    if (inputText.length > 5) {
      setMemo([...memo, { id: memo.length + 1, content: inputText }]);
      setInputText('');
    }
  };

  return (
    <div id='main'>
      <h1>React.useMemo</h1>

      <div>
        <h1>My todos</h1>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.content}</li>
            ))}
        </ul>
        <button>Add Todo</button>
      </div>

      <div>
        <button onClick={handleAddTodo}>Add Todo</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddCustomTodo}>Add Skill</button>
      </div>

      <ul>
        {memo.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoApp;
