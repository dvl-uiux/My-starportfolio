<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div v-for="tech in technologies" :key="tech.name" 
      class="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex flex-col items-center space-y-4">
        <div class="w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors duration-300">
          <img :src="tech.icon" :alt="tech.name" class="w-10 h-10 object-contain" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900">{{ tech.name }}</h3>
        <p class="text-sm text-gray-600 text-center">{{ tech.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    description: 'Progressive JavaScript Framework'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'JavaScript Library for UI'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Typed JavaScript at Any Scale'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'JavaScript Runtime'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    description: 'Utility-First CSS Framework'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description: 'Design & Prototyping Tool'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: 'Version Control System'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    description: 'NoSQL Database'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Programming Language'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Containerization Platform'
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    description: 'Cloud Computing Services'
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    description: 'App Development Platform'
  }
]
</script>

<style scoped>
.grid {
  perspective: 1000px;
}

.group {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.group:hover {
  transform: translateY(-4px) rotateX(5deg);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeIn 0.6s ease-out forwards;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }
.grid > div:nth-child(7) { animation-delay: 0.7s; }
.grid > div:nth-child(8) { animation-delay: 0.8s; }
.grid > div:nth-child(9) { animation-delay: 0.9s; }
.grid > div:nth-child(10) { animation-delay: 1s; }
.grid > div:nth-child(11) { animation-delay: 1.1s; }
.grid > div:nth-child(12) { animation-delay: 1.2s; }
</style> 