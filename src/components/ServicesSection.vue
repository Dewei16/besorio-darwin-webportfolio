<template>
  <section class="services-v3" id="services">
    <div class="container px-5">
      <!-- Title -->
      <div class="section-header text-center mb-5">
        <h2 class="section-title fw-bolder mb-2">
          <span class="text-gradient">What I Do</span>
        </h2>
        <div class="section-subtitle">My Services</div>
      </div>

      <div class="services-grid">
        <!-- Top 3 -->
        <article class="service-card" v-for="(s, i) in services.topServices" :key="i">
          <div class="service-icon">
            <i :class="s.icon"></i>
          </div>
          <h3 class="service-name">{{ s.title }}</h3>
          <p class="service-desc">{{ s.description }}</p>
        </article>

        <!-- Bottom left (wide) -->
        <article class="service-card wide">
          <div class="service-icon">
            <i :class="services.bottomServices.left.icon"></i>
          </div>
          <h3 class="service-name">{{ services.bottomServices.left.title }}</h3>
          <p class="service-desc mb-0">{{ services.bottomServices.left.description }}</p>
        </article>

        <!-- Bottom center image tile -->
        <div class="image-tile">
          <img :src="services.image.src" :alt="services.image.alt" />
        </div>
      </div>
    </div>
  </section>
    <div class="section-divider"></div>
</template>

<script setup>
import services from "../data/services.json";
</script>

<style scoped>
/* SECTION BACKGROUND = SAME AS ABOUT */
.services-v3{
  padding: 90px 0;
  background: var(--section-bg);
}

/* SAME WIDTH AS NAVBAR */
.services-v3 .container{
  max-width: 1100px;
  margin: 0 auto;
}

/* Header spacing like About */
.section-title{
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  letter-spacing: -0.02em;
}
.section-subtitle{
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
  opacity: 0.85;
}

/* GRID LAYOUT */
.services-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  justify-items: stretch;
  align-items: stretch;
}

/* ===== CARD (WHITE + CENTERED TEXT) ===== */
.service-card{
  background: var(--surface);
  border-radius: 18px;
  padding: 30px;
  text-align: center;
  transition: 0.25s ease;

  /* Gradient border */
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

  width: 100%;
  justify-self: stretch;
}

.service-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 28px 80px rgba(0,0,0,0.10);
}

/* ICON */
.service-icon{
  width: 52px;
  height: 52px;
  margin: 0 auto 16px;
  border-radius: 14px;
  display: grid;
  place-items: center;

  /* subtle card icon background like reference */
  background: rgba(0, 113, 133, 0.12);
  border: 1px solid var(--border);
  color: var(--text);
}

.service-icon i{
  font-size: 18px;
}

/* TEXT */
.service-name{
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 10px;
}

.service-desc{
  color: var(--muted);
  line-height: 1.75;
  margin: 0;
}

/* WIDE CARD */
.service-card.wide{
  grid-column: 1 / span 2; /* AI Chatbots spans col 1-2 */
}

/* IMAGE TILE */
.image-tile{
  grid-column: 3; /* image stays on the right */
  border-radius: 18px;
  overflow: hidden;
  min-height: 220px;
  display: grid;
  place-items: center;

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

.image-tile img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* FIX: Machine Learning aligns with AI Chatbots (left column) */
.service-card.machine{
  grid-column: 1;
}

/* DARK MODE polish */
:root[data-theme="dark"] .service-card,
:root[data-theme="dark"] .image-tile{
  box-shadow: 0 18px 45px rgba(0,0,0,0.35);
}

/* RESPONSIVE */
@media (max-width: 992px){
  .services-grid{
    grid-template-columns: 1fr;
  }

  .service-card.wide,
  .image-tile,
  .service-card.machine{
    grid-column: auto; /* reset stacking */
  }
}
</style>
