<template>
  <section class="blog-page">
    <div class="container px-5">
      <div class="blog-grid">
        <main class="blog-main">
          <article v-if="post" class="post-card">
            <img :src="post.image" class="post-img" :alt="post.title" />

            <div class="post-body">
              <div class="post-meta">
                <span class="post-chip">{{ post.category || "Blog" }}</span>
                <span class="post-tech">{{ post.technology }}</span>
              </div>

              <h1 class="post-title">{{ post.title }}</h1>
              <p class="post-desc">{{ post.description }}</p>

              <div class="post-actions">
                <a 
                  v-if="post.link"
                  :href="post.link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="pill-btn live-btn"
                >
                  View Live Project <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                </a>

                <router-link class="pill-btn" to="/blog-projects">Back to Blog Projects</router-link>
                <router-link class="pill-btn" to="/">Back to Home</router-link>
              </div>
            </div>
          </article>

          <div v-else class="empty-state">
            <h3 class="empty-title">Project not found</h3>
            <p class="empty-desc">The link may be invalid or the project was removed.</p>
            <router-link class="pill-btn" to="/blog-projects">Back</router-link>
          </div>
        </main>

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
              <router-link
                v-for="p in filtered"
                :key="p.id"
                class="widget-item"
                :class="{ active: p.slug === props.slug }"
                :to="{ name: 'BlogProject', params: { slug: p.slug } }"
              >
                <div class="widget-item-title">{{ p.title }}</div>
                <div class="widget-item-sub">
                  {{ p.category || "Blog" }} • {{ shortTech(p.technology) }}
                </div>
              </router-link>

              <div v-if="filtered.length === 0" class="widget-empty">
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
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import projects from "../data/projects.json";

const route = useRoute();
const query = ref("");

const props = defineProps({
  slug: String 
});

const blogProjects = computed(() => projects.filter((p) => p.type === "blog"));

const post = computed(() =>
  blogProjects.value.find((p) => p.slug === props.slug)
);

watch(() => props.slug, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return blogProjects.value;

  return blogProjects.value.filter((p) =>
    (p.title || "").toLowerCase().includes(q) ||
    (p.description || "").toLowerCase().includes(q) ||
    (p.category || "").toLowerCase().includes(q) ||
    (p.technology || "").toLowerCase().includes(q)
  );
});

function shortTech(text = "") {
  return text.length > 28 ? text.slice(0, 28) + "…" : text;
}
</script>

<style scoped>
/* --- RETAINED YOUR ORIGINAL STYLES --- */
.blog-page{ padding: 90px 0; background: var(--section-bg); }

.blog-grid{
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
}

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

.empty-title{ font-weight: 900; margin: 0 0 10px; color: var(--text); }
.empty-desc{ margin: 0; color: var(--muted); line-height: 1.7; }

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

.post-img{ width: 100%; height: 280px; object-fit: cover; display: block; }
.post-body{ padding: 22px; }

.post-meta{ display: flex; gap: 10px; flex-wrap: wrap; align-items: center; margin-bottom: 10px; }

.post-chip{
  font-size: 0.85rem;
  font-weight: 800;
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

.post-tech{ color: var(--muted); font-weight: 600; font-size: 0.9rem; }

.post-title{ font-weight: 900; color: var(--text); margin: 8px 0 10px; }
.post-desc{ color: var(--muted); line-height: 1.8; margin: 0; }

.post-actions{ display: flex; gap: 12px; flex-wrap: wrap; margin-top: 18px; }

.blog-side{ position: sticky; top: 90px; align-self: start; }

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

.widget-title{ margin: 0 0 12px; font-weight: 900; color: var(--text); }

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
  display: block;
  text-decoration: none;
  border-radius: 14px;
  padding: 12px;
  transition: 0.2s ease;
  background: transparent;
  border: 1px solid var(--border);
}

.widget-item:hover{ background: var(--btn-hover); }

.widget-item.active{
  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.widget-item-title{ font-weight: 900; color: var(--text); margin-bottom: 4px; }
.widget-item-sub{ color: var(--muted); font-size: 0.88rem; font-weight: 600; }
.widget-empty{ text-align: center; color: var(--muted); padding: 14px 0; }

.pill-btn{
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  color: var(--text);
  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: 0.2s ease;
}

.pill-btn:hover{
  transform: translateY(-2px);
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
}

/* ✅ ADDED: Live Button Highlight */
.live-btn {
  background-image: 
    linear-gradient(var(--apple-green), var(--apple-green)), 
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow)) !important;
  color: #fff !important;
}

.ms-1 { margin-left: 0.5rem; }

@media (max-width: 991.98px){
  .blog-grid{ grid-template-columns: 1fr; }
  .blog-side{ position: static; }
  .post-img{ height: 220px; }
}
</style>