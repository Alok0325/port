import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'QuantumChain-AI',
      description: 'AI-powered cryptocurrency trading platform with real-time market analysis, automated trading strategies, and advanced portfolio management features.',
      techStack: ['React.js', 'Node.js', 'Python', 'TensorFlow', 'WebSocket', 'MongoDB', 'AWS'],
      category: 'Full Stack / AI',
      github: '#',
      demo: '#',
    },
    {
      title: 'PPL (Pro Player League)',
      description: 'Comprehensive sports management platform for organizing leagues, managing teams, tracking statistics, and facilitating player interactions.',
      techStack: ['Next.js', 'Node.js', 'Express.js', 'MySQL', 'Socket.IO', 'AWS'],
      category: 'Full Stack',
      github: '#',
      demo: '#',
    },
    {
      title: 'Group Chat Application',
      description: 'Real-time group messaging application with features like file sharing, emoji reactions, message threads, and user presence indicators.',
      techStack: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'JWT', 'Express.js'],
      category: 'Real-time / Backend',
      github: '#',
      demo: '#',
    },
    {
      title: 'Daily Expense Tracker',
      description: 'Personal finance management application with expense categorization, budget tracking, analytics dashboard, and export capabilities.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Chart.js', 'JWT'],
      category: 'Full Stack',
      github: '#',
      demo: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section id="projects" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-effect rounded-xl p-6 border border-gray-800 hover:border-accent-blue transition-all overflow-hidden relative"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-accent-cyan mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-400 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    <FiGithub size={20} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-accent-violet transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
