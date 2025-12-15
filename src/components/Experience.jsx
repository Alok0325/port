import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'SarthiQ',
      location: 'Lucknow, India',
      period: '2023 - Present',
      description: [
        'Led development of scalable backend systems using Node.js and Express.js',
        'Optimized application performance, resulting in 40% faster response times',
        'Implemented microservices architecture for improved system scalability',
        'Deployed and maintained applications on AWS cloud infrastructure',
        'Collaborated with cross-functional teams to deliver high-quality products',
      ],
      technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'AWS', 'Microservices'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Techfin Innovation Pvt. Ltd.',
      location: 'Remote',
      period: '2022 - 2023',
      description: [
        'Developed and maintained full-stack web applications',
        'Built RESTful APIs and integrated third-party services',
        'Implemented authentication and authorization systems',
        'Worked on real-time features using Socket.IO',
        'Participated in code reviews and agile development processes',
      ],
      technologies: ['JavaScript', 'React.js', 'Node.js', 'MySQL', 'Socket.IO', 'REST APIs'],
    },
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable solutions and leading technical initiatives
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-violet to-accent-cyan hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-6 w-4 h-4 bg-accent-blue rounded-full border-4 border-gray-950 z-10" />

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="ml-0 md:ml-16 glass-effect rounded-xl p-6 md:p-8 border border-gray-800 hover:border-accent-blue transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-accent-blue mb-2">{exp.title}</h3>
                        <p className="text-xl text-gray-300 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <FiCalendar />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <FiMapPin />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + pointIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-accent-blue mt-2">▹</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: index * 0.2 + techIndex * 0.05,
                            type: 'spring',
                          }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gray-800 rounded-lg text-xs font-medium text-accent-cyan border border-gray-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
