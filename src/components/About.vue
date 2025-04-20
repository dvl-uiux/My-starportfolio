<template>
  <section id="about" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Passionate About Creating Beautiful Experiences
        </p>
      </div>

      <div class="mt-10">
        <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="relative">
            <div class="prose prose-lg text-gray-500">
              <p>
                I'm a UI/UX designer with a passion for creating beautiful and functional digital experiences. 
                With expertise in user interface design, user experience research, and prototyping, I help businesses 
                transform their ideas into engaging products that users love.
              </p>
              <p class="mt-4">
                My approach combines creativity with user-centered design principles to deliver solutions that are 
                both aesthetically pleasing and highly functional. I believe in the power of design to solve problems 
                and create meaningful connections between people and technology.
              </p>
            </div>
          </div>

          <div class="relative">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Skills</h3>
            <div class="space-y-4">
              <div v-for="(skill, index) in skills" :key="index" class="relative">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">{{ skill.name }}</span>
                  <span class="text-sm font-medium text-gray-700">{{ skill.level }}%</span>
                </div>
                <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    :style="{ width: `${skill.level}%` }"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'UX Research', level: 90 },
  { name: 'Prototyping', level: 85 },
  { name: 'User Testing', level: 88 },
  { name: 'Figma', level: 92 },
  { name: 'Adobe XD', level: 85 }
]
</script> 