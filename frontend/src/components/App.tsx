import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Setting from '~/components/Setting'
import Header from '~/components/Header'
import About from '~/components/About'
import Home from '~/components/Home'
import Todo from '~/components/Todo'
import "~/styles/Form.css";

function App() {
  return (
    <BrowserRouter>

      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/todo"} element={<Todo />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/setting"} element={<Setting />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App