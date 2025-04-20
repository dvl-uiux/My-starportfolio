<template>
  <footer id="contact" class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <h2 class="text-2xl font-bold text-white">Let's Connect</h2>
          <p class="text-gray-300 text-base">
            I'm always interested in new projects and opportunities. Feel free to reach out!
          </p>
          <div class="flex space-x-6">
            <a v-for="social in socials" :key="social.name" :href="social.href" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">{{ social.name }}</span>
              <component :is="social.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
              <div class="mt-4 space-y-4">
                <p class="text-base text-gray-300">
                  Email: <a href="sannikelvindavid@gmail.com" class="hover:text-white">sannikelvindavid@gmail.com</a>
                </p>
                <p class="text-base text-gray-300">
                  Location: Lekki phase 1, Lagos
                </p>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
              <div class="mt-4 space-y-4">
                <a v-for="link in quickLinks" :key="link.name" :href="link.href" class="text-base text-gray-300 hover:text-white block">
                  {{ link.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-700 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; {{ new Date().getFullYear() }} Kelvin Adegbemisola Sanni. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: 'LinkedInIcon'
  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'TwitterIcon'
  },
  {
    name: 'GitHub',
    href: '#',
    icon: 'GitHubIcon'
  },
  {
    name: 'Dribbble',
    href: '#',
    icon: 'DribbbleIcon'
  }
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#' },
  { name: 'Contact', href: '#+2349039122204' }
]
</script> 