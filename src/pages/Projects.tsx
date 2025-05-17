import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('mareme ada table.jpg')",
              opacity: 0.3
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Projets</h1>
            <p className="text-xl text-neutral-300">
              Découvrez comment nos projets créent un changement durable et répondent à des défis concrets grâce à des solutions entrepreneuriales innovantes..
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Projets courants" 
            subtitle="Découvrez nos solutions innovantes pour répondre aux défis sociaux et environnementaux"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {/* Project Process */}
          <div className="mt-20">
            <SectionHeader 
              title="Notre processus de développement de projet" 
              subtitle="Comment nous transformons les idées en solutions durables"
            />
            
            <div className="mt-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-enactus-yellow rounded hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {[
                  {
                    title: "Ciblage",
                    description: "Nous identifions les défis sociaux, économiques et environnementaux dans les communautés en menant des recherches et en nous engageant directement auprès des parties prenantes..",
                    image: "/Goums femmes.jpg"
                  },
                  {
                    title: "Immersion",
                    description: "Nous prenons le temps de faire de minis séjours durant nos voyages auprès de nos cibles pour mieux comprendre leurs besoins et pouvoir les satisfaire.",
                    image: "/immersion.jpg"
                  },
                  {
                    title: "Transfert de technologie",
                    description: "Notre équipe développe des solutions entrepreneuriales qui s'attaquent aux causes profondes des défis ciblés tout en créant une valeur durable.",
                    image: "/transfert.jpg"
                  },
                  {
                    title: "Impact",
                    description: "Nous mesurons et évaluons le succès de nos projets à travers des indicateurs quantitatifs et qualitatifs, garantissant un changement positif durable dans les communautés.",
                    image: "/Terasen enfant.jpg"
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="md:grid md:grid-cols-7 gap-8 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Timeline dot for desktop */}
                    <div className="hidden md:flex md:col-span-1 justify-center">
                      <div className="w-12 h-12 bg-enactus-yellow rounded-full flex items-center justify-center text-neutral-900 font-bold text-xl">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:col-span-3 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                      <div className="flex md:hidden items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-enactus-yellow rounded-full flex items-center justify-center text-neutral-900 font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <h3 className="text-2xl font-bold hidden md:block mb-3">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                    
                    {/* Image */}
                    <div className={`md:col-span-3 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;