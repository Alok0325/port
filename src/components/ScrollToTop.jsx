import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // #region agent log
  try {
    fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollToTop.jsx:28',message:'ScrollToTop render',data:{isVisible},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'D'})}).catch(()=>{});
  } catch(e) {
    fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollToTop.jsx:28',message:'ScrollToTop error',data:{error:e.message},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'D'})}).catch(()=>{});
  }
  // #endregion
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 glass-effect rounded-full border border-gray-800 hover:border-accent-blue text-accent-blue transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
