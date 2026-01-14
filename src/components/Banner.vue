<template>
  <section class="hero-final" id="landing">
    <div class="container hero-container">
      <div class="hero-inner">

        <!-- Avatar -->
        <div class="hero-avatar">
          <img src="/images/self.png" alt="profile" class="hero-avatar-img" />
        </div>

        <!-- Main Title -->
        <h1 class="hero-title">
          Digital Success
          <span>for your Business</span>
        </h1>

        <!-- Subtitle -->
        <div class="hero-sub">
          Turning ideas into
        </div>

        <!-- Description -->
        <p class="hero-desc">
          Responsive web experiences and practical systems that help businesses
          grow—focused on usability, performance, and modern design.
        </p>

        <!-- CTA -->
        <a class="hero-cta" href="#my-projects">
          Let’s Work Together
        </a>


      </div>
    </div>
  </section>
  <div class="section-divider"></div>
</template>

<style scoped>
/* ===== HERO WRAPPER ===== */
.hero-final{
  min-height: calc(100vh - 90px); /* leave space for navbar */
  display: grid;
  place-items: center;
  background: var(--bg);          /* slightly darker than white */
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* subtle center shading like reference */
.hero-final::before{
  content:"";
  position:absolute;
  inset:-120px;
  background:
    radial-gradient(circle at 50% 45%, rgba(0,0,0,0.05), transparent 55%);
  pointer-events:none;
}

.hero-container{
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.hero-inner{
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 70px 0 50px;
  margin: 0 auto;
}

/* ===== AVATAR (gradient border using your colors) ===== */
.hero-avatar{
  width: 150px;
  height: 150px;
  border-radius: 999px;
  padding: 10px;

  border: 3px solid transparent;
  background-image:
    linear-gradient(var(--bg), var(--bg)),
    linear-gradient(135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  margin: 0 auto;
}

.hero-avatar-img{
  width: 100%;
  height: 100%;
  border-radius: 999px;
  object-fit: cover;
  background: #fff;
}

/* ===== TITLE ===== */
.hero-title{
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: clamp(2.6rem, 5vw, 4.4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text);
}

.hero-title span{
  display: block;
  background: linear-gradient(
    135deg,
    var(--asparagus),
    var(--apple-green),
    var(--pear),
    var(--yellow)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* ===== SUBTITLE ===== */
.hero-sub{
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--asparagus);
  margin-bottom: 12px;
}

/* ===== DESCRIPTION ===== */
.hero-desc{
  max-width: 740px;
  margin: 0 auto 28px;
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.05rem;
}

/* ===== CTA BUTTON (gradient border) ===== */
.hero-cta{
  display: inline-block;
  border-radius: 999px;
  padding: 14px 44px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--bg), var(--bg)),
    linear-gradient(135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  transition: 0.2s ease;
  cursor: pointer;
}

.hero-cta:hover{
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
}

/* ===== MINI LINKS ===== */
.hero-mini{
  margin-top: 18px;
  font-weight: 600;
  opacity: 0.85;
}

.hero-mini a{
  color: var(--text);
  text-decoration: none;
}

.hero-mini a:hover{
  color: var(--asparagus);
}

.dot{
  margin: 0 10px;
  opacity: 0.6;
}

/* ===== DARK MODE ===== */
:root[data-theme="dark"] .hero-final{
  background: var(--bg);
}

:root[data-theme="dark"] .hero-final::before{
  background:
    radial-gradient(circle at 50% 45%, rgba(255,255,255,0.08), transparent 55%);
}

:root[data-theme="dark"] .hero-cta{
  color: #fff;
}

:root[data-theme="dark"] .hero-mini a{
  color: rgba(255,255,255,0.92);
}
</style>
