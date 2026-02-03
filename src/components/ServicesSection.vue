<template>
  <section class="services-v3" id="services">
    <div class="container px-5">
      <div class="section-header text-center mb-5">
        <h2 class="section-title fw-bolder mb-2">
          <span class="text-gradient">What I Do</span>
        </h2>
        <div class="section-subtitle">My Services</div>
      </div>

      <div class="services-grid">
        <article 
          class="service-card" 
          v-for="(s, i) in services.topServices" 
          :key="'top-' + i"
        >
          <div class="service-icon">
            <i :class="s.icon"></i>
          </div>
          <h3 class="service-name">{{ s.title }}</h3>
          <p class="service-desc">{{ s.description }}</p>
        </article>

        <article class="service-card">
          <div class="service-icon">
            <i :class="services.bottomServices.left.icon"></i>
          </div>
          <h3 class="service-name">{{ services.bottomServices.left.title }}</h3>
          <p class="service-desc">{{ services.bottomServices.left.description }}</p>
        </article>

        <article class="service-card">
          <div class="service-icon">
            <i :class="services.bottomServices.right.icon"></i>
          </div>
          <h3 class="service-name">{{ services.bottomServices.right.title }}</h3>
          <p class="service-desc">{{ services.bottomServices.right.description }}</p>
        </article>

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
.services-v3 {
  padding: 90px 0;
  background: var(--section-bg);
}

.services-v3 .container {
  max-width: 1200px; /* Increased slightly for 3 columns */
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
  opacity: 0.85;
}

/* 2 ROWS AND 3 COLUMNS GRID */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Force 3 columns */
  gap: 24px;
  align-items: stretch;
}



/* CARD STYLING */
.service-card {
  background: var(--surface);
  border-radius: 18px;
  padding: 35px 25px;
  text-align: center;
  transition: 0.25s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  border: 2px solid transparent;
  background-image: linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.06);
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 52px;
  height: 52px;
  margin: 0 auto 16px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(var(--asparagus-rgb), 0.1);
  border: 1px solid var(--border);
  color: var(--text);
}

.service-icon i { font-size: 20px; }

.service-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 10px;
}

.service-desc {
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.9rem;
  margin: 0;
}

/* IMAGE TILE */
.image-tile {
  border-radius: 18px;
  overflow: hidden;
  height: 100%;
  min-height: 240px;
  border: 2px solid transparent;
  background-image: linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.image-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* RESPONSIVE: Adapt to screen size */
@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 cols for tablets */
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr; /* 1 col for mobile */
  }
}
</style>