<template>
  <AppLayout>
    <section class="relative min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <!-- Text Content -->
          <div class="lg:w-1/2 space-y-6">
            <h1 class="text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span class="text-indigo-600">Kelvin Adegbemisola Sanni</span>
            </h1>
            <h2 class="text-2xl text-gray-600">
              Frontend Developer & UI/UX Designer
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl">
              I create beautiful, intuitive digital experiences that users love. With expertise in both development and design, 
              I bring a unique perspective to every project.
            </p>
            <div class="flex gap-4">
              <a href="#projects" class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                View Projects
              </a>
              <a href="#contact" class="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </a>
            </div>
          </div>
          
          <!-- Image -->
          <div class="lg:w-1/2">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform rotate-6 rounded-3xl"></div>
              <img 
                src="@/assets/kelvin-profile.jpg" 
                alt="Kelvin Sanni - Frontend Developer & UI/UX Designer"
                class="relative z-10 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Rest of the content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Featured Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="9jakokatoo - Language Translation App" 
                  class="w-full h-48 object-cover" 
                />
                <div class="absolute top-4 right-4 flex space-x-2">
                  <a href="#" class="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                  <h3 class="text-xl font-semibold text-gray-900">9jakokatoo</h3>
                </div>
                <p class="mt-2 text-gray-600">A language translation app designed to bridge communication gaps across Nigerian languages, featuring intuitive UI and real-time translation capabilities.</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Vue.js</span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">TypeScript</span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">AWS</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Medimom 9ja - Healthcare App" 
                  class="w-full h-48 object-cover" 
                />
                <div class="absolute top-4 right-4 flex space-x-2">
                  <a href="#" class="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <h3 class="text-xl font-semibold text-gray-900">Medimom 9ja</h3>
                </div>
                <p class="mt-2 text-gray-600">A comprehensive pregnancy tracking and healthcare app for Nigerian mothers, providing personalized care plans and medical resources.</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">React</span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Node.js</span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div class="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Modern Company Website" 
                  class="w-full h-48 object-cover" 
                />
                <div class="absolute top-4 right-4 flex space-x-2">
                  <a href="#" class="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <h3 class="text-xl font-semibold text-gray-900">Company Website</h3>
                </div>
                <p class="mt-2 text-gray-600">A modern, responsive corporate website showcasing company services and portfolio with seamless user experience and engaging design.</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Vue.js</span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">AWS</span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">About Me</h2>
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-indigo-600">Professional Overview</h3>
                  <p class="text-gray-700 leading-relaxed">
                    As a forward-thinking Frontend Developer and UI/UX Designer, I specialize in transforming business visions into cutting-edge digital experiences. With a proven track record of elevating companies to next-generation digital solutions, I combine strategic design thinking with advanced technical expertise.
                  </p>
                  <p class="text-gray-700 leading-relaxed">
                    My approach integrates user-centered design principles with modern frontend technologies, ensuring that every project not only meets current industry standards but sets new benchmarks for user engagement and business growth.
                  </p>
                </div>
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold text-indigo-600">Core Competencies</h3>
                  <div class="space-y-4">
                    <div class="relative pt-1">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-700">Frontend Development</span>
                        <span class="text-sm font-medium text-indigo-600">95%</span>
                      </div>
                      <div class="overflow-hidden h-2 bg-gray-200 rounded">
                        <div class="h-full bg-indigo-600 rounded animate-width" style="width: 95%; transition: width 1s ease-in-out;"></div>
                      </div>
                    </div>
                    <div class="relative pt-1">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-700">UI/UX Design</span>
                        <span class="text-sm font-medium text-indigo-600">90%</span>
                      </div>
                      <div class="overflow-hidden h-2 bg-gray-200 rounded">
                        <div class="h-full bg-indigo-600 rounded animate-width" style="width: 90%; transition: width 1s ease-in-out;"></div>
                      </div>
                    </div>
                    <div class="relative pt-1">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-700">Project Management</span>
                        <span class="text-sm font-medium text-indigo-600">85%</span>
                      </div>
                      <div class="overflow-hidden h-2 bg-gray-200 rounded">
                        <div class="h-full bg-indigo-600 rounded animate-width" style="width: 85%; transition: width 1s ease-in-out;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <div class="text-indigo-600 mb-4">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Innovation Driven</h3>
                <p class="text-gray-600">Consistently pushing boundaries to create innovative solutions that drive business growth and user engagement.</p>
              </div>
              
              <div class="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <div class="text-indigo-600 mb-4">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">User-Centric</h3>
                <p class="text-gray-600">Crafting intuitive interfaces and experiences that resonate with users while meeting business objectives.</p>
              </div>
              
              <div class="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-all duration-300">
                <div class="text-indigo-600 mb-4">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Quality Focused</h3>
                <p class="text-gray-600">Delivering high-quality, scalable solutions with clean code and pixel-perfect design implementation.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">Technologies I Work With</h2>
          <TechnologyStack />
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="wave-parallax">
            <use href="#wave" x="48" y="0" fill="rgba(79, 70, 229, 0.1)" />
            <use href="#wave" x="48" y="3" fill="rgba(79, 70, 229, 0.05)" />
            <use href="#wave" x="48" y="5" fill="rgba(79, 70, 229, 0.025)" />
          </g>
        </svg>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '../components/layout/AppLayout.vue'
import TechnologyStack from '../components/TechnologyStack.vue'
</script>

<style scoped>
.waves {
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: -7px;
}

.wave-parallax use {
  animation: wave 25s cubic-bezier(.55,.5,.45,.5) infinite;
}

.wave-parallax use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.wave-parallax use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.wave-parallax use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

@keyframes wave {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}

.animate-width {
  animation: expandWidth 1.5s ease-out;
}

@keyframes expandWidth {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.bg-indigo-600 {
  background: linear-gradient(90deg, #4f46e5 0%, #6366f1 100%);
}

.rounded-xl:hover {
  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.1);
}

.text-indigo-600 svg {
  filter: drop-shadow(0 2px 4px rgba(79, 70, 229, 0.2));
}
</style> 