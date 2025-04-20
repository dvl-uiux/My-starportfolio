<template>
  <section id="projects" class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center mb-16">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Frontend & UI/UX Portfolio</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Featured Projects
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          A showcase of modern web applications and interfaces, built with cutting-edge technologies and user-centered design principles.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <transition-group name="project-list" tag="div" class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 w-full">
          <div v-for="project in projects" :key="project.id" 
            class="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
            <div class="relative h-80 w-full overflow-hidden">
              <transition name="fade">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                />
              </transition>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <div class="p-8">
              <transition name="slide-up" appear>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {{ project.title }}
                </h3>
              </transition>
              <transition name="slide-up" appear>
                <p class="mt-3 text-base text-gray-600">
                  {{ project.description }}
                </p>
              </transition>
              <div class="mt-4 flex flex-wrap gap-2">
                <transition-group name="tag-list" tag="div" class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 transform hover:scale-105 transition-transform duration-300"
                  >
                    {{ tag }}
                  </span>
                </transition-group>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <transition name="slide-right" appear>
                  <a
                    :href="project.link"
                    class="text-indigo-600 hover:text-indigo-500 font-medium flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </transition>
                <div class="flex space-x-4">
                  <transition name="fade" appear>
                    <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-600 transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </transition>
                  <transition name="fade" appear>
                    <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-600 transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Vue.js and Tailwind CSS, featuring modern animations and a clean design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Tailwind CSS', 'Responsive Design', 'Animations'],
    link: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description: 'A dynamic admin dashboard with real-time analytics, built using React and Chart.js for data visualization.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Chart.js', 'Dashboard UI', 'Data Visualization'],
    link: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A modern task management application with drag-and-drop functionality and real-time updates using Vue.js and Firebase.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Firebase', 'UI/UX Design', 'Real-time'],
    link: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Weather App Interface',
    description: 'A beautiful weather application interface with animated weather icons and smooth transitions.',
    image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['UI Design', 'Animations', 'Mobile First', 'API Integration'],
    link: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A clean and intuitive social media analytics dashboard with interactive charts and user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['UI/UX', 'Data Visualization', 'Responsive', 'Analytics'],
    link: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    description: 'A mobile-first fitness tracking application with custom animations and progress visualization.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb643f06b51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Mobile UI', 'Animations', 'User Experience', 'Progressive Web App'],
    link: '#',
    github: '#',
    demo: '#'
  }
]
</script>

<style scoped>
/* Project List Transition */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Up Transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Slide Right Transition */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Tag List Transition */
.tag-list-enter-active,
.tag-list-leave-active {
  transition: all 0.3s ease;
}

.tag-list-enter-from,
.tag-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.tag-list-move {
  transition: transform 0.3s ease;
}
</style> 