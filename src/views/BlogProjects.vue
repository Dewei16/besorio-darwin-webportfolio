<template>
  <section class="blog-list-page">
    <div class="container px-5">
      <div class="text-center mb-5">
        <h2 class="blog-title fw-bolder mb-2">
          <span class="text-gradient">Blog Projects</span>
        </h2>
        <div class="section-subtitle">Explore my latest insights and developments</div>
      </div>

      <div class="search-container mb-5">
        <div class="search-wrapper">
          <input
            v-model="query"
            type="text"
            class="search-input"
            placeholder="Search projects by title, tech, or category..."
          />
          <span class="search-icon">🔍</span>
        </div>
      </div>

      <div v-if="filteredProjects.length > 0" class="row g-4">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="project-card h-100">
            <img :src="project.image" class="project-img" :alt="project.title" />

            <div class="project-body">
              <div class="post-meta mb-2">
                <span class="post-chip">{{ project.category || "Blog" }}</span>
              </div>
              <h5 class="project-title">{{ project.title }}</h5>
              <p class="project-desc">
                {{ truncateWords(project.description, 20) }}
              </p>

              <router-link
                v-if="project.slug"
                class="project-btn"
                :to="{
                  name: 'BlogProject',
                  params: { slug: project.slug }
                }"
              >
                Read More →
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="empty-results text-center py-5">
        <div class="empty-icon">📂</div>
        <h3>No projects found</h3>
        <p>Try adjusting your search criteria.</p>
        <button @click="query = ''" class="pill-btn mt-3">Clear Search</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import projects from "../data/projects.json";

const query = ref("");

// Filter specifically for "blog" type projects
const blogProjects = computed(() =>
  (projects || []).filter((p) => p && p.type === "blog")
);

// Search logic
const filteredProjects = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return blogProjects.value;

  return blogProjects.value.filter((p) => {
    return (
      (p.title || "").toLowerCase().includes(q) ||
      (p.description || "").toLowerCase().includes(q) ||
      (p.category || "").toLowerCase().includes(q) ||
      (p.technology || "").toLowerCase().includes(q)
    );
  });
});

// Utility to shorten description
function truncateWords(text, limit = 20) {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}
</script>

<style scoped>
.blog-list-page {
  padding: 90px 0;
  background: var(--section-bg);
  min-height: 100vh;
}

.blog-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  letter-spacing: -0.02em;
}

/* Search Bar Styling */
.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 15px 25px;
  padding-right: 50px;
  border-radius: 999px;
  border: 2px solid transparent;
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  outline: none;
  transition: 0.3s;
}

.search-input:focus {
  border-color: var(--apple-green);
}

.search-icon {
  position: absolute;
  right: 20px;
  font-size: 1.2rem;
  opacity: 0.5;
}

/* Grid Card Styling (Syncs with your project theme) */
.project-card {
  background: var(--surface);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.project-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.project-body {
  padding: 25px;
}

.project-title {
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: var(--text);
}

.project-desc {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.post-chip {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 12px;
  border-radius: 50px;
  background: rgba(var(--asparagus-rgb), 0.1);
  color: var(--asparagus);
  border: 1px solid var(--asparagus);
}

/* Button with your specific gradient style */
.project-btn {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);
  transition: 0.25s ease;
  border: 2px solid transparent;
  background-image: linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.project-btn:hover {
  background-image: linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
}

.empty-icon { font-size: 4rem; margin-bottom: 1rem; }

.pill-btn {
  /* Reuse your existing pill-btn style here */
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 999px;
  border: none;
  background: var(--apple-green);
  color: white;
  font-weight: 700;
}
</style>