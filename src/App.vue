<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

const initReveal = () => {
    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
}

onMounted(() => {
    initReveal()
})

watch(() => route.path, async () => {
    await nextTick()
    setTimeout(() => initReveal(), 100)
})
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <NavBar />
    
    <main class="flex-grow flex flex-col">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style>
/* Any global styles can go here, but we are using tailwind in style.css */
</style>
