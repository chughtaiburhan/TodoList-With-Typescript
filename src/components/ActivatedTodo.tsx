import { RootState } from '@reduxjs/toolkit/query'
import { List, Typography } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const ActivatedTodo: React.FC = () => {
  const activatedTodos=useSelector((state:RootState) => state.todos.activatedTodos)
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
    <Typography.Title level={2} style={{ textAlign: "center" }}>
      Activated Tasks
    </Typography.Title>

    <List
      bordered
      dataSource={activatedTodos}
      renderItem={(todo) => <List.Item>{todo.text}</List.Item>}
    />
  </div>
  )
}

export default ActivatedTodo
