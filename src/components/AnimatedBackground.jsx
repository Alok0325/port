import { motion } from 'framer-motion'

const AnimatedBackground = ({ darkMode = true }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-accent-blue rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-violet rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent-cyan rounded-full blur-3xl"
      />

      {/* Medium floating orbs */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          rotate: [0, 180, 360],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-blue rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
          rotate: [360, 180, 0],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent-violet rounded-full blur-2xl"
      />

      {/* Small floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          className={`absolute w-32 h-32 rounded-full blur-xl ${
            i % 3 === 0 ? 'bg-accent-blue' : i % 3 === 1 ? 'bg-accent-violet' : 'bg-accent-cyan'
          }`}
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className={`absolute inset-0 ${darkMode ? 'opacity-5' : 'opacity-10'}`}
        style={{
          backgroundImage: `
            linear-gradient(${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(139, 92, 246, 0.2)'} 1px, transparent 1px),
            linear-gradient(90deg, ${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(139, 92, 246, 0.2)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}

export default AnimatedBackground
