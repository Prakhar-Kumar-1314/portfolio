import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Scene } from './components/Scene';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: "Gamblers-Dilemma",
      description: "A comprehensive website to understand the house edge in gambling through various games.",
      tech: ["React", "Express.js", "Vite (Runtime)", "MongoDb"],
      link: "https://anti-gambling-frontend.onrender.com/",
      github: "https://github.com/Prakhar-Kumar-1314/Gamblers-Dilemma"
    },
    {
      title: "Second Brain",
      description: "A web application to help users store and organize their favorite links in a single,  centralized location.",
      tech: ["TypeScript", "React", "Express", "MongoDB"],
      link: "https://project2.example.com",
      github: "https://github.com/Prakhar-Kumar-1314/second-brain"
    },
    {
      title: "Ink",
      description: "A real-time collaborative whiteboard tool for sketching ideas, diagrams, and visuals with simplicity and style.",
      tech: ["Next.js", "WebSocket", "PostgreSQL/Prisma"],
      link: "https://project3.example.com",
      github: "https://github.com/Prakhar-Kumar-1314/Draw-app"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrolled = window.scrollY;
        const parallaxElements = scrollRef.current.getElementsByClassName('parallax');
        Array.from(parallaxElements).forEach((element: any) => {
          const speed = element.dataset.speed || 1;
          element.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className="relative">
      <Scene />
      
      {/* Hero Section */}
      <header className="min-h-screen relative flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/IMG_1468.jpeg"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500/50 parallax object-cover"
              data-speed="0.1"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Prakhar Kumar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Student Developer & Tech Enthusiast
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {[
              { Icon: Github, href: "https://github.com/Prakhar-Kumar-1314", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/prakhar-kumar-059aa4265/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:prakharkumar1314@gmail.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 group-hover:opacity-100 blur transition duration-300" />
                <div className="relative bg-gray-900 rounded-full p-3">
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-invert mx-auto"
          >
            <div className="relative group bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-900/70 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-50 transition duration-300 blur" />
              <div className="relative space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                  Hey there! I'm a second-year Computer Science student at PES University, where I'm exploring the fascinating world of technology. My journey in web development started with simple HTML pages, and now I'm diving deep into creating interactive and meaningful web experiences.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Recently, I've been captivated by the potential of emerging technologies. I'm particularly excited about decentralized systems and their promise of a more open internet. Alongside that, I'm exploring the world of artificial intelligence and machine learning, amazed by how these technologies are reshaping our digital landscape.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  When I'm not coding or studying, you'll find me experimenting with new frameworks, contributing to open-source projects, or brainstorming ideas for my next project. I believe in learning by doing and am always eager to take on new challenges that push my boundaries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 backdrop-blur-sm bg-gray-900/50">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 Prakhar Kumar. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;