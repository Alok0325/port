import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ darkMode, setDarkMode }) => {
  // #region agent log
  try {
    fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.jsx:6',message:'Navbar render',data:{hasDarkMode:!!darkMode,hasSetDarkMode:!!setDarkMode},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  } catch(e) {
    fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.jsx:6',message:'Navbar render error',data:{error:e.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }
  // #endregion
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      } ${darkMode ? '' : 'bg-white/80 dark:bg-transparent'}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            AP
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`transition-colors cursor-pointer ${
                  darkMode 
                    ? 'text-gray-300 hover:text-accent-blue' 
                    : 'text-gray-700 hover:text-accent-blue'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg glass-effect transition-colors ${
                darkMode 
                  ? 'text-gray-300 hover:text-accent-blue' 
                  : 'text-gray-700 hover:text-accent-blue'
              }`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg glass-effect ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* #region agent log */}
        {(() => {
          try {
            fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.jsx:113',message:'AnimatePresence render',data:{isMobileMenuOpen,hasAnimatePresence:typeof AnimatePresence !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C'})}).catch(()=>{});
          } catch(e) {
            fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Navbar.jsx:113',message:'AnimatePresence error',data:{error:e.message},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'C'})}).catch(()=>{});
          }
          return null;
        })()}
        {/* #endregion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  whileHover={{ x: 10 }}
                  className={`block transition-colors py-2 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-accent-blue' 
                      : 'text-gray-700 hover:text-accent-blue'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
