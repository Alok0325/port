import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I'm a passionate <span className="text-accent-blue font-semibold">Full Stack Developer</span> with a 
              strong focus on <span className="text-accent-violet font-semibold">backend development</span> and 
              building scalable, high-performance systems. Based in Lucknow, India, I specialize in creating 
              robust APIs, microservices architectures, and modern web applications.
            </p>

            <p>
              My expertise lies in designing and implementing <span className="text-accent-cyan font-semibold">scalable systems</span> that 
              can handle high traffic and complex business logic. I have extensive experience with RESTful APIs, 
              microservices architecture, real-time communication using Socket.IO, and cloud deployment on AWS.
            </p>

            <p>
              I'm passionate about writing clean, maintainable code and following best practices. Whether it's 
              optimizing database queries, implementing authentication systems, or deploying applications to the 
              cloud, I approach every challenge with a problem-solving mindset and attention to detail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Backend Development', desc: 'Node.js, Express, Nest.js, Flask' },
                { title: 'Scalable Systems', desc: 'Microservices, API Design, Architecture' },
                { title: 'Cloud & DevOps', desc: 'AWS, CI/CD, Docker, Deployment' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 glass-effect rounded-lg border border-gray-800 hover:border-accent-blue transition-colors"
                >
                  <h3 className="text-xl font-semibold text-accent-blue mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
