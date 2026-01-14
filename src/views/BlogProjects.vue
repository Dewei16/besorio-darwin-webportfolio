<template>
  <section class="blog-page">
    <div class="container px-5">
      <!-- Header -->
      <div class="text-center mb-4">
        <h2 class="blog-title fw-bolder mb-2">
          <span class="text-gradient">Blog Projects</span>
        </h2>
        <div class="section-subtitle">All blog projects</div>
      </div>

      <!-- Blog layout -->
      <div class="blog-grid">
        <!-- LEFT: Opened Project -->
        <div class="blog-main" ref="mainRef">
          <!-- If no project selected -->
          <div v-if="!activePost" class="empty-state">
            <h3 class="empty-title">Select a project to read</h3>
            <p class="empty-desc">
              Choose from the list to view the project details here.
            </p>
          </div>

          <!-- Opened project -->
          <article v-else class="post-card">
            <img
              v-if="activePost.image"
              :src="activePost.image"
              class="post-img"
              :alt="activePost.title"
            />

            <div class="post-body">
              <div class="post-meta">
                <span class="post-chip">{{ activePost.category || "Blog" }}</span>
                <span class="post-tech">{{ activePost.technology || "" }}</span>
              </div>

              <h3 class="post-title">{{ activePost.title }}</h3>
              <p class="post-desc">{{ activePost.description }}</p>

              <div class="post-actions">
                <button class="pill-btn" type="button" @click="closePost">
                  Close
                </button>

                <router-link class="pill-btn" to="/">
                  Back to Home
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <!-- RIGHT: Sidebar Widget -->
        <aside class="blog-side">
          <div class="widget-card">
            <h4 class="widget-title">Search</h4>

            <input
              v-model="query"
              class="widget-input"
              type="text"
              placeholder="Search projects..."
            />

            <div class="widget-list">
              <button
                v-for="p in filteredBlogProjects"
                :key="p.id"
                class="widget-item"
                :class="{ active: activePost && activePost.id === p.id }"
                type="button"
                @click="openPost(p)"
              >
                <div class="widget-item-title">{{ p.title }}</div>
                <div class="widget-item-sub">
                  {{ p.category || "Blog" }} • {{ shortTech(p.technology) }}
                </div>
              </button>

              <div v-if="filteredBlogProjects.length === 0" class="widget-empty">
                No results found.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from "vue";
import projects from "../data/projects.json";

const query = ref("");
const activePost = ref(null);
const mainRef = ref(null);

const blogProjects = computed(() =>
  (projects || []).filter((p) => p && p.type === "blog")
);

const filteredBlogProjects = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return blogProjects.value;

  return blogProjects.value.filter((p) => {
    const title = (p.title || "").toLowerCase();
    const desc = (p.description || "").toLowerCase();
    const cat = (p.category || "").toLowerCase();
    const tech = (p.technology || "").toLowerCase();
    return title.includes(q) || desc.includes(q) || cat.includes(q) || tech.includes(q);
  });
});

async function openPost(p) {
  activePost.value = p;

  // smoother + safer (DOM already updated)
  await nextTick();
  mainRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closePost() {
  activePost.value = null;
}

function shortTech(text) {
  const t = text || "";
  return t.length > 28 ? t.slice(0, 28) + "…" : t;
}

onMounted(() => {
  if (blogProjects.value.length) activePost.value = blogProjects.value[0];
});
</script>

<style scoped>
.blog-page{
  padding: 90px 0;
  background: var(--section-bg);
}

.blog-title{
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  letter-spacing: -0.02em;
}

/* Layout */
.blog-grid{
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
}

/* MAIN */
.blog-main{
  min-width: 0;
}

/* Empty */
.empty-state{
  background: var(--surface);
  border-radius: 18px;
  padding: 34px;
  text-align: center;

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.empty-title{
  font-weight: 800;
  margin: 0 0 10px;
  color: var(--text);
}
.empty-desc{
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

/* Opened Post Card */
.post-card{
  overflow: hidden;
  border-radius: 18px;
  background: var(--surface);

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;

  box-shadow: 0 18px 45px rgba(0,0,0,0.06);
}

.post-img{
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.post-body{
  padding: 22px;
}

.post-meta{
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.post-chip{
  font-size: 0.85rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  color: var(--text);

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.post-tech{
  color: var(--muted);
  font-weight: 600;
  font-size: 0.9rem;
}

.post-title{
  font-weight: 900;
  color: var(--text);
  margin: 6px 0 10px;
}

.post-desc{
  color: var(--muted);
  line-height: 1.8;
  margin: 0;
}

.post-actions{
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

/* Sidebar */
.blog-side{
  position: sticky;
  top: 90px;
  align-self: start;
}

.widget-card{
  border-radius: 18px;
  padding: 18px;
  background: var(--surface);

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;

  box-shadow: 0 18px 45px rgba(0,0,0,0.06);
}

.widget-title{
  margin: 0 0 12px;
  font-weight: 800;
  color: var(--text);
}

.widget-input{
  width: 100%;
  border-radius: 14px;
  padding: 12px 14px;
  border: 1px solid var(--border);
  outline: none;
  background: var(--bg);
  color: var(--text);
}

.widget-list{
  margin-top: 14px;
  display: grid;
  gap: 10px;
  max-height: 430px;
  overflow: auto;
  padding-right: 6px;
}

.widget-item{
  width: 100%;
  text-align: left;
  border-radius: 14px;
  padding: 12px;
  cursor: pointer;
  transition: 0.2s ease;
  background: transparent;
  border: 1px solid var(--border);
}

.widget-item:hover{
  background: var(--btn-hover);
}

.widget-item.active{
  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.widget-item-title{
  font-weight: 800;
  color: var(--text);
  margin-bottom: 4px;
}

.widget-item-sub{
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 600;
}

.widget-empty{
  text-align: center;
  color: var(--muted);
  padding: 14px 0;
}

/* gradient border button */
.pill-btn{
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: var(--text);
  cursor: pointer;
  transition: 0.2s ease;

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.pill-btn:hover{
  transform: translateY(-2px);
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
}

/* Responsive */
@media (max-width: 991.98px){
  .blog-grid{
    grid-template-columns: 1fr;
  }

  .blog-side{
    position: static;
  }

  .post-img{
    height: 220px;
  }
}
</style>
