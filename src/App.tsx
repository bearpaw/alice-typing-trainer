import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Posture } from './pages/Posture';
import { Lessons } from './pages/Lessons';
import { Test } from './pages/Test';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguagePicker } from './components/LanguagePicker';
import { LocaleProvider, useT, useLocaleCtx } from './lib/i18n/context';

function AppShell() {
  const t = useT();
  const { localizedPath } = useLocaleCtx();
  return (
    <div className="app">
      <header className="nav">
        <Link to={localizedPath('/')} className="brand">
          {t.nav.brand}
        </Link>
        <nav>
          <NavLink to={localizedPath('/')} end>
            {t.nav.home}
          </NavLink>
          <NavLink to={localizedPath('/posture')}>{t.nav.posture}</NavLink>
          <NavLink to={localizedPath('/lessons')}>{t.nav.lessons}</NavLink>
          <NavLink to={localizedPath('/test')}>{t.nav.test}</NavLink>
        </nav>
        <LanguagePicker />
        <ThemeToggle />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posture" element={<Posture />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<Lessons />} />
          <Route path="/test" element={<Test />} />
          <Route path="/:locale" element={<Home />} />
          <Route path="/:locale/posture" element={<Posture />} />
          <Route path="/:locale/lessons" element={<Lessons />} />
          <Route path="/:locale/lessons/:id" element={<Lessons />} />
          <Route path="/:locale/test" element={<Test />} />
        </Routes>
      </main>
      <div className="footer-note">{t.footer}</div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/alice-typing-trainer">
      <LocaleProvider>
        <AppShell />
      </LocaleProvider>
    </BrowserRouter>
  );
}
