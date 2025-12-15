import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Technology icon component
const TechIcon = ({ skill, className = "w-5 h-5" }) => {
  const [imgError, setImgError] = useState(false)
  
  // Map skill names to Simple Icons names
  const iconMap = {
    'C++': 'cplusplus',
    'Java': 'java',
    'Python': 'python',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'React.js': 'react',
    'Next.js': 'nextdotjs',
    'HTML': 'html5',
    'CSS': 'css3',
    'Bootstrap': 'bootstrap',
    'Node.js': 'nodedotjs',
    'Express.js': 'express',
    'Nest.js': 'nestjs',
    'Flask': 'flask',
    'JWT': 'json',
    'OAuth': 'auth0',
    'REST APIs': 'postman',
    'Microservices': 'kubernetes',
    'Socket.IO': 'socketdotio',
    'MySQL': 'mysql',
    'MongoDB': 'mongodb',
    'AWS (EC2, S3)': 'amazonaws',
    'Firebase': 'firebase',
    'Git': 'git',
    'CI/CD': 'circleci',
  }

  const iconName = iconMap[skill] || skill.toLowerCase().replace(/\s+/g, '').replace(/\./g, 'dot').replace(/\//g, '')
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`

  if (imgError) {
    return (
      <div className={`${className} rounded bg-gray-700 flex items-center justify-center text-xs text-gray-400 font-semibold`}>
        {skill.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={iconUrl}
      alt={skill}
      className={`${className} flex-shrink-0`}
      onError={() => setImgError(true)}
      style={{ 
        filter: 'brightness(0) invert(1)',
        objectFit: 'contain'
      }}
    />
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Category icons mapping - using actual technology icons
  const categoryIcons = {
    'Programming Languages': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg',
    'Frontend Technologies': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg',
    'Backend & Tools': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg',
    'Databases': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg',
    'Cloud & DevOps': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg',
  }

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: categoryIcons['Programming Languages'],
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
      color: 'from-accent-blue to-accent-cyan',
    },
    {
      title: 'Frontend Technologies',
      icon: categoryIcons['Frontend Technologies'],
      skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Bootstrap'],
      color: 'from-accent-violet to-accent-blue',
    },
    {
      title: 'Backend & Tools',
      icon: categoryIcons['Backend & Tools'],
      skills: ['Node.js', 'Express.js', 'Nest.js', 'Flask', 'JWT', 'OAuth', 'REST APIs', 'Microservices', 'Socket.IO'],
      color: 'from-accent-cyan to-accent-violet',
    },
    {
      title: 'Databases',
      icon: categoryIcons['Databases'],
      skills: ['MySQL', 'MongoDB'],
      color: 'from-accent-blue to-accent-violet',
    },
    {
      title: 'Cloud & DevOps',
      icon: categoryIcons['Cloud & DevOps'],
      skills: ['AWS (EC2, S3)', 'Firebase', 'Git', 'CI/CD'],
      color: 'from-accent-violet to-accent-cyan',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-xl p-6 border border-gray-800 hover:border-accent-blue transition-all group relative overflow-hidden"
            >
              {/* Background decorative icon */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  src={category.icon} 
                  alt={category.title}
                  className="w-full h-full"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>

              {/* Category header with icon */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className={`w-12 h-12 p-2 rounded-lg bg-gradient-to-br ${category.color} opacity-80 flex items-center justify-center`}>
                  <img 
                    src={category.icon} 
                    alt={category.title}
                    className="w-8 h-8"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gradient bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-violet">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 2, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg text-sm font-medium text-gray-300 border border-gray-700 hover:border-accent-blue transition-all cursor-default group/skill"
                  >
                    <TechIcon skill={skill} className="w-5 h-5 flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { skill: 'Backend Development', level: 95 },
            { skill: 'Frontend Development', level: 85 },
            { skill: 'System Architecture', level: 90 },
          ].map((item, index) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="glass-effect rounded-lg p-6 border border-gray-800"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">{item.skill}</span>
                <span className="text-accent-blue font-semibold">{item.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
