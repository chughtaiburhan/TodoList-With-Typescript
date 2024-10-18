import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './Reducer/Store';
import TodoUi from './components/TodoUi';
import ActivatedTodo from './components/ActivatedTodo';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<TodoUi/>} />
          <Route path='/activated' element={<ActivatedTodo />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
