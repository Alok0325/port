import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiStar } from 'react-icons/fi'
import { FaTrophy } from 'react-icons/fa'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      title: '1st Rank',
      event: 'Python Coding Contest',
      icon: FaTrophy,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Achieved first position in competitive Python programming contest',
    },
    {
      title: '1st Rank',
      event: 'CodeChef MMMUT Chapter',
      icon: FiAward,
      color: 'from-accent-blue to-accent-violet',
      description: 'Secured top position in CodeChef chapter competition',
    },
    {
      title: '2nd Rank',
      event: 'Samsung Innovation Campus Hackathon',
      icon: FiStar,
      color: 'from-accent-violet to-accent-cyan',
      description: 'Runner-up in prestigious Samsung innovation hackathon',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="achievements" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Achievements & Awards
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition for excellence in coding and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.event}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
                className="glass-effect rounded-xl p-8 border border-gray-800 hover:border-accent-blue transition-all text-center group relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    className="relative inline-flex items-center justify-center mb-6"
                  >
                    {/* Circle wrapper to keep everything perfectly round and centered */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      {/* Outer glow ring */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color} opacity-40 blur-xl`}
                      />
                      {/* Solid circle */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/80 flex items-center justify-center shadow-lg shadow-accent-blue/20">
                        {/* Make the icon clearly visible instead of transparent gradient */}
                        <Icon className="text-4xl text-white" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="text-3xl font-bold mb-2 text-gradient bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-violet"
                  >
                    {achievement.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    className="text-xl font-semibold text-gray-300 mb-3"
                  >
                    {achievement.event}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    {achievement.description}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '5+', label: 'Technologies Mastered' },
            { number: '3', label: 'Awards Won' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="glass-effect rounded-lg p-6 text-center border border-gray-800 hover:border-accent-blue transition-all"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-4xl font-bold text-gradient mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
