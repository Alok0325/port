import { motion } from 'framer-motion'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // Placeholder - user can add their resume link
    window.open('#', '_blank')
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-violet rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 lg:px-12 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="inline-block px-4 py-2 rounded-full glass-effect text-accent-blue text-sm font-medium mb-6"
              >
                Welcome to my Portfolio
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="block">Hi, I'm</span>
              <span className="text-gradient block mt-2">Alok Prajapati</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl lg:max-w-none"
            >
              Backend Specialist | Building Scalable Systems & Modern Web Applications
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12"
            >
              <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-violet rounded-lg font-semibold text-white flex items-center gap-2 group"
          >
                View Projects
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </motion.button>

              <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="px-8 py-4 glass-effect rounded-lg font-semibold text-gray-100 hover:text-accent-blue flex items-center gap-2 border border-gray-800 hover:border-accent-blue transition-colors"
          >
                Download Resume
                <FiDownload />
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <motion.a
                href="https://github.com/Alok0325"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-accent-blue transition-colors"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/alok-prajapati-aa1960201/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-accent-blue transition-colors"
              >
                <FaLinkedin size={28} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan rounded-full blur-xl opacity-50 animate-pulse" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src="/PFP.jpg"
                  alt="Alok Prajapati"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image not found
                    e.target.style.display = 'none';
                    e.target.parentElement.className += ' bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan';
                  }}
                />
                {/* Placeholder gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-violet/20 to-accent-cyan/20 flex items-center justify-center">
                  <div className="text-center p-8">
                   
                  </div>
                </div>
              </div>

              {/* Floating tech icons around profile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
                style={{ '--orbit-distance': 'clamp(160px, 50vw, 260px)' }}
              >
                <div
                  className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-violet rounded-lg flex items-center justify-center shadow-lg"
                  style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateY(calc(-1 * var(--orbit-distance)))' }}
                >
                  <span className="text-2xl">⚛️</span>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center shadow-lg"
                  style={{ transform: 'translate(-50%, -50%) rotate(120deg) translateY(calc(-1 * var(--orbit-distance)))' }}
                >
                  <span className="text-2xl">🚀</span>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-accent-violet to-accent-cyan rounded-lg flex items-center justify-center shadow-lg"
                  style={{ transform: 'translate(-50%, -50%) rotate(240deg) translateY(calc(-1 * var(--orbit-distance)))' }}
                >
                  <span className="text-2xl">💻</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500 cursor-pointer"
          onClick={() => {
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
