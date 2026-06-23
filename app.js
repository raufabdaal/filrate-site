// app.js - Filrate Premium Core Interactivity and Scroll Intercept Engine
// This script processes revenue calculations, drives simulated software states on scroll,
// and powers the premium scroll-reveal animations.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Filrate system initialized — Premium Edition");

  // --- 1. Leakage Calculator Logic ---
  const revenueInput = document.getElementById("input-revenue");
  const missedCallsInput = document.getElementById("input-missed-calls");
  const noShowInput = document.getElementById("input-noshow-rate");

  const revenueLabel = document.getElementById("label-revenue");
  const missedCallsLabel = document.getElementById("label-missed-calls");
  const noShowLabel = document.getElementById("label-noshow-rate");

  const totalLeakageOutput = document.getElementById("output-total-leakage");
  const recoveryScaleOutput = document.getElementById("output-recovery-scale");
  const efficiencyOutput = document.getElementById("output-efficiency");

  function formatCurrency(val) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(val);
  }

  function updateCalculator() {
    const revenue = parseInt(revenueInput.value, 10);
    const missedCalls = parseInt(missedCallsInput.value, 10);
    const noShowRate = parseInt(noShowInput.value, 10);

    revenueLabel.textContent = formatCurrency(revenue);
    missedCallsLabel.textContent = `${missedCalls} calls`;
    noShowLabel.textContent = `${noShowRate}%`;

    const missedCallLeak = missedCalls * 250 * 22;
    const noShowLeak = revenue * (noShowRate / 100);
    const administrativeLeak = revenue * 0.028;
    const totalLeakage = missedCallLeak + noShowLeak + administrativeLeak;
    const recoveryMin = totalLeakage * 0.70;
    const recoveryMax = totalLeakage * 0.90;
    const efficiencyFactor = Math.max(40, Math.min(98, 100 - (noShowRate + (missedCalls * 2.5) + 3)));

    totalLeakageOutput.textContent = formatCurrency(totalLeakage);
    recoveryScaleOutput.textContent = `${formatCurrency(recoveryMin)} - ${formatCurrency(recoveryMax)}`;
    efficiencyOutput.textContent = `${Math.round(efficiencyFactor)}%`;
  }

  revenueInput.addEventListener("input", updateCalculator);
  missedCallsInput.addEventListener("input", updateCalculator);
  noShowInput.addEventListener("input", updateCalculator);
  updateCalculator();


  // --- 2. Scroll Intercept Engine (5 Leaks Simulations) ---
  const scrollOptions = {
    root: null,
    rootMargin: "-15% 0px -25% 0px",
    threshold: 0.4
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const elementId = entry.target.id;
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        triggerSimulationSequence(elementId, true);
      } else {
        entry.target.classList.remove("active");
        triggerSimulationSequence(elementId, false);
      }
    });
  }, scrollOptions);

  document.querySelectorAll(".leak-sim-container").forEach(section => {
    observer.observe(section);
  });

  function triggerSimulationSequence(id, isActive) {
    if (id === "leak-1") {
      const alertRow = document.getElementById("z1-alert-row");
      if (isActive) {
        setTimeout(() => {
          if (document.getElementById("leak-1").classList.contains("active")) {
            alertRow.classList.remove("alert-active");
            alertRow.classList.add("alert-dimmed");
          }
        }, 1200);
      } else {
        alertRow.classList.add("alert-active");
        alertRow.classList.remove("alert-dimmed");
      }
    } 
    else if (id === "leak-2") {
      const apptBlock = document.getElementById("z2-appointment");
      if (isActive) {
        setTimeout(() => {
          if (document.getElementById("leak-2").classList.contains("active")) {
            apptBlock.classList.add("fade-out");
          }
        }, 800);
      } else {
        apptBlock.classList.remove("fade-out");
      }
    }
    else if (id === "leak-3") {
      const treatRow = document.getElementById("z3-treatment-row");
      if (isActive) {
        setTimeout(() => {
          if (document.getElementById("leak-3").classList.contains("active")) {
            treatRow.classList.add("abandoned");
          }
        }, 800);
      } else {
        treatRow.classList.remove("abandoned");
      }
    }
    else if (id === "leak-4") {
      const patientCard = document.getElementById("z4-patient-card");
      const badge = document.getElementById("z4-badge");
      if (isActive) {
        patientCard.classList.add("drifted");
        setTimeout(() => {
          if (document.getElementById("leak-4").classList.contains("active")) {
            patientCard.classList.remove("drifted");
            badge.textContent = "Booked";
            badge.classList.remove("bg-red-50", "text-red-600", "border-red-200");
            badge.classList.add("bg-teal-50", "text-[#0D9488]", "border-teal-200");
          }
        }, 1400);
      } else {
        patientCard.classList.remove("drifted");
        badge.textContent = "Drifting";
        badge.classList.add("bg-red-50", "text-red-600", "border-red-200");
        badge.classList.remove("bg-teal-50", "text-[#0D9488]", "border-teal-200");
      }
    }
    else if (id === "leak-5") {
      const reviews = document.getElementById("z5-reviews-count");
      const rating = document.getElementById("z5-rating-count");
      const badge = document.getElementById("z5-badge-active");
      if (isActive) {
        setTimeout(() => {
          if (document.getElementById("leak-5").classList.contains("active")) {
            reviews.textContent = "Reviews: 214";
            rating.textContent = "★ 4.9";
            badge.classList.remove("hidden");
          }
        }, 1000);
      } else {
        reviews.textContent = "Reviews: 42";
        rating.textContent = "★ 4.1";
        badge.classList.add("hidden");
      }
    }
  }


  // --- 3. Scroll-Reactive Nav-Pill Engine — PREMIUM ---
  const navPill = document.getElementById("nav-pill");
  let lastScrollY = 0;
  let ticking = false;

  function handleNavScroll() {
    const currentY = window.scrollY;
    if (currentY > 60) {
      navPill.classList.add("scrolled");
    } else {
      navPill.classList.remove("scrolled");
    }
    lastScrollY = currentY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(handleNavScroll);
      ticking = true;
    }
  }, { passive: true });

  handleNavScroll();


  // --- 4. Scroll Reveal Animations — Premium Entrance Effects ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "-10% 0px -10% 0px",
    threshold: 0.1
  });

  document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
    revealObserver.observe(el);
  });


  // --- 5. Contact Form Handler — Formspree ---
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = "SUBMITTING...";
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.7";
      
      try {
        const response = await fetch("https://formspree.io/f/xrevnwky", {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" }
        });
        
        if (response.ok) {
          submitBtn.textContent = "AUDIT SCHEDULED ✓";
          submitBtn.style.background = "#059669";
          submitBtn.style.borderColor = "#059669";
          contactForm.reset();
        } else {
          const data = await response.json().catch(() => ({}));
          console.error("Formspree error:", data);
          submitBtn.textContent = "ERROR. PLEASE RETRY.";
          submitBtn.style.background = "#DC2626";
          submitBtn.style.borderColor = "#DC2626";
        }
      } catch (err) {
        console.error("Network error:", err);
        submitBtn.textContent = "ERROR. PLEASE RETRY.";
        submitBtn.style.background = "#DC2626";
        submitBtn.style.borderColor = "#DC2626";
      }
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.background = "";
        submitBtn.style.borderColor = "";
      }, 4000);
    });
  }


  // --- 6. Event-Driven Vapi Dialer Overlay (Iframe Embed) ---
  const openVapiBtn = document.getElementById("open-vapi-btn");
  const vapiModal = document.getElementById("vapi-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const closeModalX = document.getElementById("close-modal-x");
  const vapiIframe = document.getElementById("vapi-iframe");

  function openDemo() {
    vapiModal.classList.remove("hidden");
    vapiModal.classList.add("flex");
    
    if (typeof CONFIG !== "undefined" && CONFIG.VAPI_DEMO_URL) {
      vapiIframe.src = CONFIG.VAPI_DEMO_URL;
    } else {
      vapiIframe.src = "https://vapi.ai";
    }
  }

  function closeDemo() {
    vapiModal.classList.remove("flex");
    vapiModal.classList.add("hidden");
    vapiIframe.src = "about:blank";
  }

  if (openVapiBtn) openVapiBtn.addEventListener("click", openDemo);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeDemo);
  if (closeModalX) closeModalX.addEventListener("click", closeDemo);

  vapiModal.addEventListener("click", (e) => {
    if (e.target === vapiModal) {
      closeDemo();
    }
  });


  // --- 7. FAQ Accordion Logic ---
  const faqRows = document.querySelectorAll(".faq-row");
  faqRows.forEach(row => {
    const icon = row.querySelector(".faq-icon");
    
    row.addEventListener("click", () => {
      const isActive = row.classList.contains("active");
      
      faqRows.forEach(r => {
        r.classList.remove("active");
        const rIcon = r.querySelector(".faq-icon");
        if (rIcon) rIcon.textContent = "+";
      });
      
      if (!isActive) {
        row.classList.add("active");
        if (icon) icon.textContent = "−";
      }
    });
  });


  // --- 8. Active Nav Link Highlighting on Scroll ---
  const sections = document.querySelectorAll("section[id], div[id='checkout-sentry'], div[id='checkout-standard']");
  const navLinks = document.querySelectorAll("#nav-pill nav a");
  
  const navHighlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("text-slate-900");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("text-slate-900");
          }
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(section => {
    navHighlightObserver.observe(section);
  });
});
