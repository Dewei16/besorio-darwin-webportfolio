<template>
  <section class="about-v2" id="about">
    <div class="container px-5">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xxl-8">
          <div class="about-card text-center">
            <div class="section-header">
              <h2 class="section-title">
                <span class="text-gradient">About Me</span>
              </h2>
            </div>
            <p class="about-subtitle fw-bolder mb-3">
              My name is Darwin Besorio and I help brands grow.
            </p>

            <p class="about-text mb-4">
              A registered librarian with self-taught programming skills and six years
              of managerial experience especially operating Koha Integrated Library System and
              creating Library Website. I excel in conducting and executing projects while managing
              the Library System and maintaining comprehensive bibliographic records. I am
              passionate about integrating programming with librarianship to develop innovative
              applications and systems for enhancing library spaces.
            </p>

            <div class="about-social d-flex justify-content-center gap-4">
              <a href="#!" class="social-link" aria-label="Facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#!" class="social-link" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#!" class="social-link" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
                    <!-- CTA -->
            <a class="hero-cta" target="_blank" href="./FS_BESORIO_RESUME.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="section-divider"></div>
</template>

<style scoped>
/* ===== SECTION ===== */
.about-v2 {
  padding: 90px 0;
  text-align: center;

  background: linear-gradient(
    135deg,
    var(--asparagus),
    var(--apple-green),
    var(--pear),
    var(--yellow)
  );
}

.about-card {
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  padding: clamp(28px, 4vw, 46px);
  border-radius: 26px;

  background: var(--surface); /* white / dark surface */

  border: 3px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(
      90deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

/* ===== TYPOGRAPHY ===== */
.about-title {
  font-size: clamp(1.9rem, 3.5vw, 2.6rem);
}

.about-subtitle {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);          /* 🔑 dark text */
  margin-bottom: 14px;
}

.about-text {
  color: var(--muted);
  line-height: 1.8;
  font-size: 1.03rem;
  max-width: 820px;
  margin: 0 auto 20px;
}

/* ===== SOCIAL ICONS (HORIZONTAL, CENTERED) ===== */
.about-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 6px;
}

.social-link {
  width: 46px;
  height: 46px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-size: 1.35rem;
  text-decoration: none;
  color: var(--text);

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--bg), var(--bg)),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;

  transition: 0.25s ease;
}

.social-link:hover {
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(
      135deg,
      var(--asparagus),
      var(--apple-green),
      var(--pear),
      var(--yellow)
    );
  transform: translateY(-2px);
}

/* ===== CTA BUTTON (gradient border) ===== */
.hero-cta{
  display: inline-block;
  border-radius: 999px;
  margin-top: 20px;
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

/* ===== DARK MODE ===== */


:root[data-theme="dark"] .about-subtitle {
  color: #fff;
}

:root[data-theme="dark"] .social-link {
  color: #fff;
}




</style>
