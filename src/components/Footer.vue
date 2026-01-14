<template>
  <footer class="footer-v2">
    <div class="container px-5">
      <div class="footer-shell">
        <div class="footer-grid">
          <!-- LEFT -->
          <div class="footer-left">
            <span class="footer-name">Dewei</span>
            <span class="footer-role">
              Full-Stack Web Developer | Registered Librarian
            </span>
          </div>

          <!-- RIGHT -->
          <div class="footer-right">
            <span class="footer-copy">
              © 2025 myPortfolio. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* FOOTER SECTION */
.footer-v2{
  padding: 40px 0;
  background: var(--section-bg);
  border-top: 1px solid var(--border);
}

/* SAME WIDTH AS NAVBAR / SECTIONS */
.footer-shell{
  max-width: 1100px;
  margin: 0 auto;
}

/* GRID */
.footer-grid{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* LEFT */
.footer-left{
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

/* NAME = SAME FEEL AS NAVBAR LOGO */
.footer-name{
  font-family: "Pacifico", cursive; /* SAME AS NAVBAR */
  font-size: 22px;
  color: var(--text);
  line-height: 1;
}

/* ROLE */
.footer-role{
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--muted);
}

/* RIGHT */
.footer-copy{
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--muted);
}

/* MOBILE */
@media (max-width: 768px){
  .footer-grid{
    flex-direction: column;
    text-align: center;
  }

  .footer-left{
    justify-content: center;
  }
}
</style>
