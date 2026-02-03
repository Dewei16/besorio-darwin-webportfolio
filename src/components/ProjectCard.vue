<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="project-card h-100">
      <img :src="project.image" class="project-img" :alt="project.title" />

      <div class="project-body">
        <h5 class="project-title">{{ project.title }}</h5>

        <p class="project-desc">
          {{ truncateWords(project.description, 20) }}
        </p>

        <!-- ✅ DIRECTLY BELOW DESCRIPTION -->
        <router-link
          v-if="project.slug"
          class="project-btn"
          :to="{
            name: 'BlogProject',
            params: { slug: project.slug }
          }"
        >
          View Project →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ project: Object });

function truncateWords(text, limit = 20) {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > limit
    ? words.slice(0, limit).join(" ") + "…"
    : text;
}
</script>

<style scoped>
.project-card{
  height: 100%;
  border-radius: 0 0 20px 20px;
  background: var(--surface);
  overflow: visible;
  transition: 0.25s ease;

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  box-shadow: 0 18px 45px rgba(0,0,0,0.06);
}

.project-img{
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-body{
  padding: 20px;
}

.project-title{
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text);
}

.project-desc{
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 14px; /* 👈 spacing before button */
}

/* BUTTON */
.project-btn{
  display: inline-block;
  padding: 10px 22px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);
  transition: 0.25s ease;

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.project-btn:hover{
  transform: translateY(-2px);
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
}
</style>
