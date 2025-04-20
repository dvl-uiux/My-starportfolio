<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Kelvin Sanni
              </span>
            </router-link>
          </div>
          <div class="flex items-center space-x-8">
            <router-link to="/about" class="text-gray-700 hover:text-indigo-600 transition-colors">About</router-link>
            <router-link to="/projects" class="text-gray-700 hover:text-indigo-600 transition-colors">Projects</router-link>
            <router-link to="/contact" class="text-gray-700 hover:text-indigo-600 transition-colors">Contact</router-link>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '../Footer.vue'
</script> 