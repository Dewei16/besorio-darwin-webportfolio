<template>
  <section class="contact-v2" id="contact">
    <div class="container px-5">
      <div class="contact-shell">
        <!-- Header -->
        <div class="text-center mb-4">
          <h2 class="contact-title fw-bolder mb-2">
            <span class="text-gradient">Get in touch</span>
          </h2>
          <div class="section-subtitle">Let's work together!</div>
        </div>

        <!-- CARD (Gradient Border) -->
        <div class="contact-card">
          <div class="row g-4 align-items-stretch">
            <!-- Google Map -->
            <div class="col-12 col-lg-6">
              <div class="map-frame h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.9446027400186!2d120.99178971532284!3d14.599512589814065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f88f0aaf93%3A0x1c6aa97f6ac5311a!2sCentro%20Escolar%20University!5e0!3m2!1sen!2sph!4v1634559098753!5m2!1sen!2sph"
                  width="100%"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="col-12 col-lg-6">
              <form class="contact-form" @submit.prevent="submitForm">
                <div class="form-floating mb-3">
                  <input
                    v-model="name"
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div class="form-floating mb-3">
                  <input
                    v-model="email"
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div class="form-floating mb-3">
                  <input
                    v-model="phone"
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div class="form-floating mb-3">
                  <textarea
                    v-model="message"
                    class="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style="height: 10rem"
                    required
                  ></textarea>
                </div>

                <!-- Submit Button (CTA style) -->
                <button class="cta-btn w-100" type="submit" :disabled="isLoading">
                  {{ isLoading ? "Sending..." : "Submit" }}
                </button>
                <div class="d-flex justify-content-end mb-3">
                  <div ref="recaptchaContainer"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /card -->
      </div>
    </div>
  </section>
    <div class="section-divider"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const WEB3FORMS_ACCESS_KEY = "87af57f9-6cdb-46cf-916e-df0609be70a9";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const isLoading = ref(false);
const notyf = new Notyf();

//reCAPTCHA configs
const SITE_KEY = "6LeUc0osAAAAAMy_zsVUsGpvoLKho4Wu1bLZPhMv";
const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref("");

// reCAPTCHA callbacks
function onRecaptchaSuccess(token) {
  recaptchaToken.value = token;
}
function onRecaptchaExpired() {
  recaptchaToken.value = "";
}

// Function to render the reCAPTCHA widget
function renderRecaptcha() {
  if (!window.grecaptcha) {
    console.error('reCAPTCHA not loaded');
    return;
  }

  recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
    sitekey: SITE_KEY,
    size: 'normal', // or 'compact'
    callback: onRecaptchaSuccess,
    'expired-callback': onRecaptchaExpired,
  });
}

// Function to reset reCAPTCHA 
function resetRecaptcha() {
  if (recaptchaWidgetId.value !== null) {
    window.grecaptcha.reset(recaptchaWidgetId.value);
    recaptchaToken.value = '';
  }
}


onMounted(() => {
  const interval = setInterval(() => {
    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
      clearInterval(interval);
    }
  }, 100);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});

const submitForm = async () => {
  if (!recaptchaToken.value) {
    notyf.error("Please verify that you are not a robot");
    return;
  }

  isLoading.value = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
        "g-recaptcha-response": recaptchaToken.value, // ✅ REQUIRED
      }),
    });

    const result = await response.json();

    if (result.success) {
      notyf.success("Message Sent!");
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
      resetRecaptcha();
    } else {
      notyf.error(result?.message || "Failed to send message.");
    }
  } catch (err) {
    console.log(err);
    notyf.error("Failed to send message.");
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
/* SAME SECTION LOOK AS OTHER COMPONENTS */
.contact-v2 {
  padding: 90px 0;
  background: var(--section-bg);
}

/* SAME WIDTH AS NAVBAR */
.contact-shell {
  max-width: 1100px;
  margin: 0 auto;
}

.contact-title {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  letter-spacing: -0.02em;
}

/* CARD WITH GRADIENT BORDER */
.contact-card {
  background: var(--surface);
  border-radius: 22px;
  padding: clamp(18px, 3vw, 26px);

  border: 2px solid transparent;
  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;

  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.08);
}

/* MAP */
.map-frame {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  height: 100%;
}

/* INPUTS */
.contact-form .form-control {
  background: var(--bg);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.contact-form .form-control:focus {
  box-shadow: none;
  border-color: rgba(0, 0, 0, 0.22);
}

:root[data-theme="dark"] .contact-form .form-control:focus {
  border-color: rgba(255, 255, 255, 0.25);
}

.contact-form label {
  color: var(--muted);
}

/* SUBMIT BUTTON (CTA STYLE) */
.cta-btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 999px;
  font-weight: 800;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s ease;
  color: var(--text);

  background-image:
    linear-gradient(var(--surface), var(--surface)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.cta-btn:hover {
  transform: translateY(-2px);
  background-image:
    linear-gradient(var(--btn-hover), var(--btn-hover)),
    linear-gradient(135deg, var(--asparagus), var(--apple-green), var(--pear), var(--yellow));
}

.cta-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

/* MOBILE */
@media (max-width: 991.98px) {
  .map-frame iframe {
    height: 320px;
  }
}

/* ===== CONTACT FORM – DARK MODE FIX ===== */
:root[data-theme="dark"] #contact .form-control,
:root[data-theme="dark"] #contact textarea {
  background: var(--surface);        /* dark surface */
  color: var(--text);                /* white text */
  border: 1px solid var(--border);
}

/* Placeholder text */
:root[data-theme="dark"] #contact .form-control::placeholder,
:root[data-theme="dark"] #contact textarea::placeholder {
  color: var(--muted);
}

/* Floating labels */
:root[data-theme="dark"] #contact .form-floating > label {
  color: var(--muted);
}

/* Focus state */
:root[data-theme="dark"] #contact .form-control:focus,
:root[data-theme="dark"] #contact textarea:focus {
  background: var(--surface);
  color: var(--text);
  border-color: var(--pear);
  box-shadow: none;
}

</style>
