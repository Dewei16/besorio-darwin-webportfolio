<template>
  <div class="d-flex flex-column min-vh-100">
    <main class="flex-grow-1">
      <Banner />
      <About />
      <ServicesSection />
      <ProjectsSection />
      <CallActionComponent />
      <ToolsComponent />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import CallActionComponent from "../components/CallActionComponent.vue";
import ToolsComponent from "../components/ToolsComponent.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
</script>
