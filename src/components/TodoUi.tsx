import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo, toggleActivation } from '../Reducer/TodoSlice';
import { Button, Checkbox, Input, List, Typography } from 'antd';
import { RootState } from '../store'; // Correct import
import { Todo } from '../Reducer/TodoSlice'; // Add Todo interface if not exported yet

const TodoUi: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const todos = useSelector((state: RootState) => state.todos.todos) as Todo[]; // Cast todo type
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add todo
  const AddNewTodo = useCallback((): void => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = { id: Date.now(), text: inputValue, activated: false };
      dispatch(addTodo(newTodo));
      setInputValue(""); // Clear input
    }
  }, [inputValue, dispatch]);

  // Toggle Activation
  const toggleTodoActivation = useCallback((id: number) => {
    dispatch(toggleActivation(id));
  }, [dispatch]);

  // Open activated tasks in new tab
  const viewActivatedTodos = useCallback(() => {
    navigate('/activated');
  }, [navigate]);

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Todo List
      </Typography.Title>

      <Input
        placeholder="Enter a task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={AddNewTodo}
      />
      <Button
        type="primary"
        onClick={AddNewTodo}
        style={{ marginTop: 10, width: "100%" }}
      >
        Add Task
      </Button>

      <List
        style={{ marginTop: 20 }}
        bordered
        dataSource={todos}
        renderItem={(todo: Todo) => ( // Add type for todo
          <List.Item>
            <Checkbox
              checked={todo.activated}
              onChange={() => toggleTodoActivation(todo.id)}
            >
              {todo.text}
            </Checkbox>
          </List.Item>
        )}
      />

      <Button
        type="primary"
        onClick={viewActivatedTodos}
        style={{ marginTop: 20, width: "100%" }}
      >
        View Activated Tasks
      </Button>
    </div>
  );
}

export default TodoUi;
