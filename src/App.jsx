import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import avatar from './assets/avatar.jpg'
import Home from './pages/Home.jsx'
import Employment from './pages/Employment.jsx'
import Education from './pages/Education.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Playground from './pages/Playground.jsx'

function NavItem({ to, children, mobile = false, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => {
        if (mobile) {
          return `block text-black no-underline ${isActive ? 'font-bold' : ''}`
        }
        return isActive
          ? 'block text-black font-bold no-underline'
          : 'text-grey-dark font-semibold no-underline hover:text-black'
      }}
      end={to === '/'}
    >
      {children}
    </NavLink>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const host = window.location.hostname
    const path = window.location.pathname
    axios.get(`https://tracker.orabi.me/track?site=${host}&path=${path}`).catch(() => {})
  }, [location.pathname])

  useEffect(() => {
    const classes = ['scrolling-auto', 'overflow-hidden', 'fixed', 'pin-x']
    document.body.classList[menuOpen ? 'add' : 'remove'](...classes)
    return () => document.body.classList.remove(...classes)
  }, [menuOpen])

  return (
    <>
      <div className="relative z-20 flex justify-between items-center">
        <div className="flex md:block lg:flex items-center max-w-full">
          <div className="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12">
            <NavLink to="/" className="flex items-center no-underline">
              <img
                className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
                src={avatar}
                alt="Muhammad Orabi"
              />
            </NavLink>
          </div>
          <div>
            <NavLink to="/" className="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">
              Muhammad Orabi
            </NavLink>
            <div className="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs spaced-x-6">
              <NavItem to="/">Bio & Contacts</NavItem>
              <NavItem to="/employment">Employment</NavItem>
              <NavItem to="/education">Education</NavItem>
              <NavItem to="/skills">Skills</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/playground">Playground</NavItem>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <button
            className="block menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              style={{ display: menuOpen ? 'none' : 'block' }}
              className="block text-black h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              style={{ display: menuOpen ? 'block' : 'none' }}
              className="text-black h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        style={{ display: menuOpen ? 'block' : 'none' }}
        className="md:hidden z-10 bg-white fixed pin pt-24"
      >
        <div className="spaced-y-8 overflow-y-auto pt-6 pb-8 px-12 max-h-full overflow-y-auto">
          <NavItem to="/" mobile onClick={() => setMenuOpen(false)}>Bio & Contacts</NavItem>
          <NavItem to="/employment" mobile onClick={() => setMenuOpen(false)}>Employment</NavItem>
          <NavItem to="/education" mobile onClick={() => setMenuOpen(false)}>Education</NavItem>
          <NavItem to="/skills" mobile onClick={() => setMenuOpen(false)}>Skills</NavItem>
          <NavItem to="/projects" mobile onClick={() => setMenuOpen(false)}>Projects</NavItem>
          <NavItem to="/playground" mobile onClick={() => setMenuOpen(false)}>Playground</NavItem>
        </div>
      </div>

      <div className="lg:pl-32 mt-12">
        <div key={location.pathname} className="section-shell route-stage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
