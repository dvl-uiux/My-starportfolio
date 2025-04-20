<template>
  <AppLayout>
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A selection of my recent work in UI/UX design and digital experiences.
          </p>
        </div>

        <div class="mb-8">
          <div class="max-w-xl mx-auto">
            <div class="relative">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search projects..."
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <span class="absolute right-3 top-2.5 text-gray-400">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>

          <div class="mt-4 flex flex-wrap justify-center gap-2">
            <button
              v-for="tag in allTags"
              :key="tag"
              @click="toggleTag(tag)"
              :class="[
                selectedTags.includes(tag)
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
                'px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200'
              ]"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <transition-group
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 transform scale-95"
          enter-to-class="opacity-100 transform scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 transform scale-100"
          leave-to-class="opacity-0 transform scale-95"
          class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div class="relative h-80 w-full overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">
                {{ project.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ project.description }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="mt-6">
                <a
                  :href="project.link"
                  class="text-indigo-600 hover:text-indigo-500 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </transition-group>

        <div v-if="filteredProjects.length === 0" class="text-center mt-12">
          <p class="text-gray-500 text-lg">No projects found matching your criteria.</p>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../components/layout/AppLayout.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchQuery = ref('')
const selectedTags = ref([])

const projects = computed(() => store.getters.getProjects)

const allTags = computed(() => {
  const tags = new Set()
  projects.value.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesTags = selectedTags.value.length === 0 ||
      selectedTags.value.every(tag => project.tags.includes(tag))

    return matchesSearch && matchesTags
  })
})

const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag)
  if (index === -1) {
    selectedTags.value.push(tag)
  } else {
    selectedTags.value.splice(index, 1)
  }
}
</script>