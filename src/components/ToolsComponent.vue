<template>
  <section class="tools-v2" id="tools">
    <div class="container px-5">
      <!-- SAME WIDTH AS NAVBAR / OTHER SECTIONS -->
      <div class="tools-shell">
        <div class="tools-card">
          <!-- ===== TOOLS HEADER ===== -->
          <div class="block-head">
            <div class="block-icon">
              <i class="fa-solid fa-tools"></i>
            </div>
            <h2 class="block-title">
              <span class="text-gradient">Tools</span>
            </h2>
          </div>

          <!-- Tools Logos -->
          <div class="logos-grid">
            <div class="logo-item"><img src="/images/logo-html5.png" alt="HTML5" /></div>
            <div class="logo-item"><img src="/images/logo-css3.png" alt="CSS3" /></div>
            <div class="logo-item"><img src="/images/logo-javascript.png" alt="JavaScript" /></div>
            <div class="logo-item"><img src="/images/logo-mongodb.png" alt="MongoDB" /></div>
            <div class="logo-item wide"><img src="/images/logo-nodejs.png" alt="NodeJS" /></div>
            <div class="logo-item wide"><img src="/images/logo-expressjs.png" alt="ExpressJS" /></div>

            <div class="logo-item wide"><img src="/images/logo-react.png" alt="React" /></div>
            <div class="logo-item wide"><img src="/images/logo-heroku.png" alt="Heroku" /></div>
            <div class="logo-item wide"><img src="/images/logo-git.png" alt="Git" /></div>
            <div class="logo-item wide"><img src="/images/logo-sublime-text-3.png" alt="Sublime Text" /></div>
            <div class="logo-item wide"><img src="/images/logo-postman.png" alt="Postman" /></div>
            <div class="logo-item wide"><img src="/images/logo-gitlab-ci-cd.png" alt="GitLab CI/CD" /></div>
          </div>

          <!-- divider -->
          <div class="tools-divider"></div>

          <!-- ===== SKILLS HEADER ===== -->
          <div class="block-head mt-2">
            <div class="block-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h2 class="block-title">
              <span class="text-gradient">Skills</span>
            </h2>
          </div>

          <!-- Skills Pills -->
          <div class="skills-grid">
            <div class="skill-pill">HTML/CSS</div>
            <div class="skill-pill">Bootstrap</div>
            <div class="skill-pill">JavaScript</div>
            <div class="skill-pill">Postman</div>
            <div class="skill-pill">ExpressJS</div>
            <div class="skill-pill">NodeJS</div>
            <div class="skill-pill">VueJS</div>
            <div class="skill-pill">ReactJS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <div class="section-divider"></div>
</template>

<style scoped>
/* SECTION BG SAME AS ABOUT / SERVICES / PROJECTS */
.tools-v2{
  padding: 90px 0;
  background: var(--section-bg);
}

/* MATCH WIDTH WITH NAVBAR (1100px) */
.tools-shell{
  max-width: 1100px;
  margin: 0 auto;
}

/* CARD WITH GRADIENT BORDER (SAME SYSTEM) */
.tools-card{
  background: var(--surface);
  border-radius: 22px;
  padding: clamp(26px, 4vw, 44px);

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

  box-shadow: 0 22px 60px rgba(0,0,0,0.08);
}

/* HEADER ROW */
.block-head{
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.block-icon{
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: var(--text);

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

.block-icon i{ font-size: 18px; }

.block-title{
  margin: 0;
  font-weight: 900;
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  letter-spacing: -0.02em;
}

/* LOGOS GRID */
.logos-grid{
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
  align-items: center;
  margin-top: 10px;
}

.logo-item{
  height: 64px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: var(--bg);
  border: 1px solid var(--border);
}

.logo-item img{
  max-width: 80%;
  max-height: 40px;
  object-fit: contain;
}

.logo-item.wide img{
  max-height: 34px;
}

/* DIVIDER */
.tools-divider{
  height: 1px;
  background: var(--border);
  margin: 28px 0;
}

/* SKILLS GRID */
.skills-grid{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 10px;
}

.skill-pill{
  border-radius: 16px;
  padding: 14px 14px;
  text-align: center;
  font-weight: 700;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
}

/* RESPONSIVE */
@media (max-width: 991.98px){
  .logos-grid{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .skills-grid{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 420px){
  .logos-grid{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
