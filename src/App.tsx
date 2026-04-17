import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Posture } from './pages/Posture';
import { Lessons } from './pages/Lessons';
import { Test } from './pages/Test';

export default function App() {
  return (
    <BrowserRouter basename="/alice-typing-trainer">
      <div className="app">
        <header className="nav">
          <Link to="/" className="brand">⌨︎ Alice Typing Trainer</Link>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/posture">Posture</NavLink>
            <NavLink to="/lessons">Lessons</NavLink>
            <NavLink to="/test">Speed Test</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posture" element={<Posture />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<Lessons />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <div className="footer-note">
          For Alice-layout keyboards — local-only, no data leaves your browser.
        </div>
      </div>
    </BrowserRouter>
  );
}
