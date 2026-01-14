<template>
  <nav class="navbar navbar-expand-lg nav-v2 py-3" :data-bs-theme="isDark ? 'dark' : 'light'">
    <div class="container px-5">
      <div class="nav-shell w-100">
        <!-- LOGO -->
        <RouterLink class="navbar-brand logo-text m-0" to="/" @click="closeMenu">Dewei</RouterLink>

        <!-- HAMBURGER (shows on < lg) -->
        <button
          class="navbar-toggler nav-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navLinks"
          aria-controls="navLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon"></span>
        </button>


        <!-- COLLAPSE AREA -->
        <div class="collapse navbar-collapse nav-collapse" id="navLinks">
          <!-- CENTER LINKS -->
          <ul class="navbar-nav nav-links mx-lg-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="closeMenu">Home</RouterLink>
            </li>

            <li class="nav-item">
              <button class="nav-link nav-link-btn" type="button" @click="goTo('#about')">
                About
              </button>
            </li>

            <li class="nav-item">
              <button class="nav-link nav-link-btn" type="button" @click="goTo('#my-projects')">
                Projects
              </button>
            </li>

            <li class="nav-item">
              <button class="nav-link nav-link-btn" type="button" @click="goTo('#services')">
                Services
              </button>
            </li>

            <!-- optional: a link to blog list -->
            <li class="nav-item">
              <RouterLink class="nav-link" to="/blog-projects" @click="closeMenu">Blog</RouterLink>
            </li>
          </ul>


          <!-- RIGHT (becomes centered inside hamburger menu on small screens) -->
          <div class="nav-actions ms-lg-auto">
            <a class="contact-btn" href="#contact" @click.prevent="goTo('#contact')">Contact</a>

            <button
              class="moon-btn"
              type="button"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="toggleTheme"
              title="Toggle dark mode"
            >
              <span class="moon">{{ isDark ? "☀" : "☾" }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="section-divider"></div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";

const router = useRouter();
const route = useRoute();

const isDark = ref(false);

function applyTheme(dark) {
  isDark.value = dark;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  localStorage.setItem("theme", dark ? "dark" : "light");
}

function toggleTheme() {
  applyTheme(!isDark.value);
}

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") applyTheme(saved === "dark");
  else applyTheme(!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches);
});

// ✅ close bootstrap collapse when clicking any link (mobile)
function closeMenu() {
  const el = document.getElementById("navLinks");
  if (!el) return;

  // Bootstrap 5 collapse instance (works if bootstrap JS is loaded)
  const bs = window.bootstrap;
  const instance = bs?.Collapse?.getInstance(el);
  if (instance) instance.hide();
}

// ✅ navigate to home + hash (works from blog pages)
async function goTo(hash) {
  await router.push({ path: "/", hash });
  await nextTick();
  closeMenu();
}
</script>


<style scoped>
/* NAV BG */
.nav-v2{
  background: var(--nav-bg);
  border-bottom: 1px solid var(--border);
  padding-bottom: 10px; /* a little extra below */
}

/* keep same width as your hero/navbar design */
.nav-shell{
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 14px;
}

/* LOGO */
.logo-text{
  font-family: "Pacifico", cursive;
  font-size: 28px;
  color: var(--text);
  text-decoration: none;
  line-height: 1;
}

/* LINKS */
.nav-links{
  gap: 34px;
  align-items: center;
}

.nav-link{
  font-weight: 600;
  color: var(--text);
  opacity: 0.85;
  padding: 10px 6px;
  transition: 0.2s ease;
  text-decoration: none;
}

.nav-link:hover{
  opacity: 1;
  color: var(--accent);
}

/* RIGHT ACTIONS */
.nav-actions{
  display: flex;
  align-items: center;
  gap: 18px;
}

/* CONTACT (gradient border in LIGHT) */
.contact-btn{
  padding: 10px 22px;
  font-weight: 600;
  border-radius: 14px;
  text-decoration: none;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  transition: 0.25s ease;

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--nav-bg), var(--nav-bg)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.contact-btn:hover{
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
}

/* Dark mode contact (simple solid border) */
:root[data-theme="dark"] .contact-btn{
  background-image: none;
  border: 2px solid var(--pear);
  color: #fff;
}
:root[data-theme="dark"] .contact-btn:hover{
  background: rgba(186,215,32,0.12);
}

/* MOON */
.moon-btn{
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  border-radius: 999px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.2s ease;
}
.moon-btn:hover{ background: var(--btn-hover); }

.moon{
  font-size: 20px;
  color: var(--text);
  opacity: 0.75;
}

/* HAMBURGER */
.nav-toggle{
  margin-left: auto; /* push to right on small screens */
}
.navbar-toggler{
  border: 0;
  padding: 8px 10px;
  border-radius: 14px;
}
.navbar-toggler:focus{
  box-shadow: none;
}

/* ========= DESKTOP (keep your current big-screen UI) ========= */
@media (min-width: 992px){
  /* hide hamburger */
  .nav-toggle{ display: none; }

  /* keep collapse "inline" without breaking alignment */
  .nav-collapse{
    display: flex !important;
    flex: 1;
    align-items: center;
  }
}

/* ========= MOBILE (menu centered BELOW logo) ========= */
@media (max-width: 991.98px){
  .nav-shell{
    flex-wrap: wrap;           /* allows collapse to go to next line */
  }

  .nav-collapse{
    width: 100%;
    margin-top: 10px;          /* space below top row */
  }

  /* center all items inside opened menu */
  .nav-links{
    gap: 12px;
    padding-top: 6px;
    text-align: center;
  }

  .nav-links .nav-item{
    width: 100%;
  }

  .nav-links .nav-link{
    display: inline-block;
    width: 100%;
    padding: 10px 0;
  }

  /* put Contact + Moon centered under links */
  .nav-actions{
    width: 100%;
    justify-content: center;
    margin-top: 14px;
    gap: 14px;
    padding-bottom: 6px;
  }
}

/* ===== CUSTOM HAMBURGER → X TOGGLE ===== */
.toggler-icon{
  position: relative;
  width: 26px;
  height: 2px;
  background: var(--text);
  display: inline-block;
  transition: all 0.3s ease;
}

.toggler-icon::before,
.toggler-icon::after{
  content: "";
  position: absolute;
  left: 0;
  width: 26px;
  height: 2px;
  background: var(--text);
  transition: all 0.3s ease;
}

.toggler-icon::before{ top: -8px; }
.toggler-icon::after{ top: 8px; }

/* ===== WHEN MENU IS OPEN → SHOW X ===== */
.navbar-toggler[aria-expanded="true"] .toggler-icon{
  background: transparent;
}

.navbar-toggler[aria-expanded="true"] .toggler-icon::before{
  transform: rotate(45deg);
  top: 0;
}

.navbar-toggler[aria-expanded="true"] .toggler-icon::after{
  transform: rotate(-45deg);
  top: 0;
}

.nav-link-btn{
  background: transparent;
  border: 0;
  cursor: pointer;
}


</style>
