import React from 'react';
import { useSelector } from 'react-redux';
import { List, Typography } from 'antd';
import { RootState } from '../store'; // Correct import
import { Todo } from '../Reducer/TodoSlice'; // Import Todo type

const ActivatedTodo: React.FC = () => {
  const activatedTodos = useSelector((state: RootState) => state.todos.activatedTodos) as Todo[]; // Cast to Todo[]

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Activated Tasks
      </Typography.Title>

      <List
        bordered
        dataSource={activatedTodos}
        renderItem={(todo: Todo) => <List.Item>{todo.text}</List.Item>} // Add type for todo
      />
    </div>
  );
}

export default ActivatedTodo;
