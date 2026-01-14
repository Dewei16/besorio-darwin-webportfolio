<template>
  <section class="cta-section">
    <div class="container px-5">
      <div class="cta-card text-center">
        <h2 class="cta-title">
          Let’s build something together
        </h2>

        <a href="#contact" class="cta-btn">
          Contact Me
        </a>
      </div>
    </div>
  </section>
    <div class="section-divider"></div>
</template>

<style scope>
	/* SECTION GRADIENT BACKGROUND */
.cta-section{
  padding: 90px 0;
  background: linear-gradient(
    135deg,
    var(--viridian),
    var(--asparagus),
    var(--apple-green),
    var(--pear),
    var(--yellow)
  );
}

/* CENTER CARD (SAME WIDTH AS NAVBAR / CONTENT) */
.cta-card{
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 28px;

  background: var(--surface);
  border-radius: 22px;
  text-align: center;

  /* gradient border */
  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  box-shadow: 0 28px 80px rgba(0,0,0,0.12);
}

/* TITLE */
.cta-title{
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--text);
  margin-bottom: 26px;
  letter-spacing: -0.02em;
}

/* CTA BUTTON (MATCH PROJECT / CONTACT BUTTON STYLE) */
.cta-btn{
  display: inline-block;
  padding: 14px 36px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  color: var(--text);
  transition: 0.25s ease;

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
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

.cta-btn:hover{
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

/* DARK MODE */
:root[data-theme="dark"] .cta-card{
  box-shadow: 0 28px 90px rgba(0,0,0,0.45);
}

</style>