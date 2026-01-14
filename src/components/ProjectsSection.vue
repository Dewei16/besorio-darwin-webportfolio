<template>
  <section class="projects-v2" id="my-projects">
    <div class="container px-5">
      <!-- Title -->
      <div class="text-center mb-4">
        <h2 class="projects-title fw-bolder mb-2">
          <span class="text-gradient">Projects</span>
        </h2>
        <div class="section-subtitle">Some of my Work</div>
      </div>

      <!-- Category Pills (UI only) -->
      <div class="projects-filters mb-5">
        <button
          v-for="(c, i) in categories"
          :key="i"
          class="pill"
          :class="{ active: activeCategory === c }"
          type="button"
          @click="activeCategory = c"
        >
          {{ c }}
        </button>
      </div>

      <!-- Grid: show max 6 -->
      <div class="row g-5">
        <ProjectCard
          v-for="p in visibleProjects"
          :key="p.id"
          :project="p"
        />
      </div>

      <!-- View all -> Blog Projects page -->
      <div class="text-center mt-5">
      <router-link class="view-all-btn" to="/blog-projects">
        View all
      </router-link>
      </div>
    </div>
  </section>
  <div class="section-divider"></div>
</template>

<script setup>
import { computed, ref } from "vue";
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.json";

const categories = ["All", "API", "Apps", "UI/UX", "Other"];
const activeCategory = ref("All");

const filtered = computed(() => {
  if (activeCategory.value === "All") return projects;

  // exact category match
  return projects.filter((p) => p.category === activeCategory.value);
});

const visibleProjects = computed(() => filtered.value.slice(0, 6));
</script>


<style scoped>

.projects-v2{
  padding: 90px 0;
  background: var(--section-bg);
}

.projects-title{
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  letter-spacing: -0.02em;
}

/* Pills like reference */
.projects-filters{
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}
.pill{
  border-radius: 999px;
  padding: 10px 22px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.25s ease;
  background: transparent;
  color: var(--text);

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--section-bg), var(--section-bg)),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.pill:hover{
  transform: translateY(-1px);
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
}

/* ACTIVE */
.pill.active{
  color: #fff;
  background-image:
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    ),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
}


:root[data-theme="dark"] .pill.active{
  background: rgba(255,255,255,0.16);
  border-color: rgba(255,255,255,0.20);
  color: #fff;
}

/* View all pill button */
.view-all-btn{
  display: inline-block;
  border-radius: 999px;
  padding: 12px 34px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);
  cursor: pointer;
  transition: 0.25s ease;

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--section-bg), var(--section-bg)),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.view-all-btn:hover{
  transform: translateY(-2px);
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
}

</style>
