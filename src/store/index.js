import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        title: 'E-commerce Redesign',
        description: 'A complete redesign of an e-commerce platform focusing on improving user experience and conversion rates.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['UI Design', 'UX Research', 'E-commerce'],
        link: '#'
      },
      {
        id: 2,
        title: 'Mobile Banking App',
        description: 'A modern banking application designed with focus on security and ease of use.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['Mobile Design', 'UI/UX', 'Fintech'],
        link: '#'
      },
      {
        id: 3,
        title: 'Healthcare Dashboard',
        description: 'An intuitive dashboard for healthcare professionals to manage patient data efficiently.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        tags: ['Dashboard', 'Healthcare', 'Data Visualization'],
        link: '#'
      }
    ],
    skills: [
      { name: 'UI Design', level: 95 },
      { name: 'UX Research', level: 90 },
      { name: 'Prototyping', level: 85 },
      { name: 'User Testing', level: 88 },
      { name: 'Figma', level: 92 },
      { name: 'Adobe XD', level: 85 }
    ],
    loading: {
      projects: false,
      contact: false
    },
    error: null
  },
  getters: {
    getProjects: state => state.projects,
    getSkills: state => state.skills,
    isLoading: state => key => state.loading[key],
    getError: state => state.error
  },
  mutations: {
    SET_LOADING(state, { key, value }) {
      state.loading[key] = value
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects
    },
    SET_SKILLS(state, skills) {
      state.skills = skills
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      commit('SET_LOADING', { key: 'projects', value: true })
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        // In a real app, you would fetch from an API
        // const response = await fetch('/api/projects')
        // const projects = await response.json()
        // commit('SET_PROJECTS', projects)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', { key: 'projects', value: false })
      }
    },
    async submitContactForm({ commit }, formData) {
      commit('SET_LOADING', { key: 'contact', value: true })
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        // In a real app, you would submit to an API
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   body: JSON.stringify(formData)
        // })
        return { success: true }
      } catch (error) {
        commit('SET_ERROR', error.message)
        return { success: false, error: error.message }
      } finally {
        commit('SET_LOADING', { key: 'contact', value: false })
      }
    }
  }
}) 