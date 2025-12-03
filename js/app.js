/* ========================================
   APP.JS - Base JavaScript
   Foundation JavaScript for NFL Injury Recovery Research Site
   ========================================= */

/* ========================================
   CONFIGURATION & STATE
   ========================================= */
const APP = {
    initialized: false,
    scrollObservers: [],
    activeModals: [],
};

/* ========================================
   SCROLL OBSERVER SYSTEM
   Efficient scroll-triggered animations using IntersectionObserver
   ========================================= */

/**
 * Create a reusable scroll observer
 * @param {string} selector - CSS selector for elements to observe
 * @param {function} callback - Function to call when element enters viewport
 * @param {object} options - IntersectionObserver options
 */
function createScrollObserver(selector, callback, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target, entry);
            }
        });
    }, defaultOptions);

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    APP.scrollObservers.push(observer);
    return observer;
}

/**
 * Staggered animation helper
 * Animates elements with delays for cascading effect
 */
function staggerAnimation(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * delay);
    });
}

/* ========================================
   COUNTER ANIMATION
   Animates numbers from 0 to target value
   ========================================= */

/**
 * Animate a counter element
 * @param {HTMLElement} element - Element containing number to animate
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 2000) {
    if (!element || isNaN(target)) return;
    
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? target : target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/**
 * Initialize all counter animations with scroll trigger
 */
function initCounters() {
    createScrollObserver('[data-counter]', (element) => {
        if (element.classList.contains('counted')) return;
        
        const target = parseFloat(element.getAttribute('data-counter'));
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        
        animateCounter(element, target, duration);
        element.classList.add('counted');
    }, { threshold: 0.5 });
}

/* ========================================
   SMOOTH SCROLL
   Smooth scrolling for anchor links
   ========================================= */

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================================
   MODAL SYSTEM
   Reusable modal open/close functionality
   ========================================= */

/**
 * Open a modal
 * @param {string} modalId - ID of modal to open
 * @param {string} content - HTML content to display (optional)
 */
function openModal(modalId, content = null) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    if (content) {
        const body = modal.querySelector('[id$="Body"]');
        if (body) body.innerHTML = content;
    }
    
    modal.classList.add('active');
    APP.activeModals.push(modalId);
    document.body.style.overflow = 'hidden';
}

/**
 * Close a modal
 * @param {string} modalId - ID of modal to close
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.classList.remove('active');
    APP.activeModals = APP.activeModals.filter(id => id !== modalId);
    
    if (APP.activeModals.length === 0) {
        document.body.style.overflow = '';
    }
}

/**
 * Initialize modal close handlers
 */
function initModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        
        // Close on X button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal.id);
            });
        }
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && APP.activeModals.length > 0) {
            closeModal(APP.activeModals[APP.activeModals.length - 1]);
        }
    });
}

/* ========================================
   UTILITY FUNCTIONS
   Helper functions for common tasks
   ========================================= */

/**
 * Debounce function to limit execution rate
 * @param {function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 */
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean}
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add class with delay
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class to add
 * @param {number} delay - Delay in ms
 */
function addClassWithDelay(element, className, delay = 0) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

/**
 * Get computed CSS variable value
 * @param {string} varName - CSS variable name (with or without --)
 * @returns {string}
 */
function getCSSVariable(varName) {
    const name = varName.startsWith('--') ? varName : `--${varName}`;
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/* ========================================
   FEATURE INITIALIZATION FUNCTIONS
   Placeholder functions for features to be built
   ========================================= */

/**
 * Initialize comparison cards scroll animation
 */
function initComparisonCards() {
    const comparisonCards = document.querySelectorAll('.comparison-card');
    if (comparisonCards.length === 0) return;
    
    createScrollObserver('.comparison-card', (element) => {
        if (element.classList.contains('animated')) return;
        element.classList.add('animated');
    }, { threshold: 0.15 });
}

/**
 * Initialize objective cards (About page)
 */
function initObjectiveCards() {
    const objectiveCards = document.querySelectorAll('.objective-card');
    if (objectiveCards.length === 0) return;
    
    createScrollObserver('.objective-card', (element) => {
        const cards = Array.from(document.querySelectorAll('.objective-card'));
        const index = cards.indexOf(element);
        
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    }, { threshold: 0.2 });
}

/**
 * Initialize takeaway blocks (About page)
 */
function initTakeawayBlocks() {
    const takeawayBlocks = document.querySelectorAll('.takeaway-block');
    if (takeawayBlocks.length === 0) return;
    
    createScrollObserver('.takeaway-block', (element) => {
        const blocks = Array.from(document.querySelectorAll('.takeaway-block'));
        const index = blocks.indexOf(element);
        
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 120);
    }, { threshold: 0.15 });
}

/**
 * Initialize implication cards (About page)
 */
function initImplicationCards() {
    const implicationCards = document.querySelectorAll('.implication-card');
    if (implicationCards.length === 0) return;
    
    createScrollObserver('.implication-card', (element) => {
        const cards = Array.from(document.querySelectorAll('.implication-card'));
        const index = cards.indexOf(element);
        
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    }, { threshold: 0.2 });
}

/**
 * Initialize citation cards (Resources page)
 */
function initCitationCards() {
    const citationCards = document.querySelectorAll('.citation-card');
    if (citationCards.length === 0) return;
    
    createScrollObserver('.citation-card', (element) => {
        const cards = Array.from(document.querySelectorAll('.citation-card'));
        const index = cards.indexOf(element);
        
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 80);
    }, { threshold: 0.1 });
}

/**
 * Initialize info cards (Resources page)
 */
function initInfoCards() {
    const infoCards = document.querySelectorAll('.info-card');
    if (infoCards.length === 0) return;
    
    createScrollObserver('.info-card', (element) => {
        const cards = Array.from(document.querySelectorAll('.info-card'));
        const index = cards.indexOf(element);
        
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    }, { threshold: 0.2 });
}

/**
 * Initialize stat cards scroll animation
 */
function initStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length === 0) return;
    
    createScrollObserver('.stat-card', (element) => {
        const cards = Array.from(document.querySelectorAll('.stat-card'));
        const index = cards.indexOf(element);
        
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 120);
    }, { threshold: 0.3 });
}

/**
 * Initialize page transitions
 */
function initPageTransitions() {
    // Fade in on page load
    document.body.classList.add('page-loaded');
    
    // Smooth fade out on navigation
    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !link.target) {
                e.preventDefault();
                document.body.classList.add('page-transitioning');
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

/**
 * Initialize racing bar charts
 */
function initRacingBars() {
    const barElements = document.querySelectorAll('[data-bar-width]');
    if (barElements.length === 0) return;
    
    createScrollObserver('[data-bar-width]', (element) => {
        if (element.classList.contains('animated')) return;
        
        const targetWidth = element.getAttribute('data-bar-width');
        element.style.width = targetWidth;
        element.classList.add('animated');
    }, { threshold: 0.5 });
}

/**
 * Initialize hover glow effects for icons
 */
function initIconGlows() {
    const icons = document.querySelectorAll('.finding-icon, .objective-number, .citation-number');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('glow');
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.classList.remove('glow');
        });
    });
}

/**
 * Initialize navigation with scroll effects
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', debounce(() => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, 10));
}

/**
 * Initialize finding cards scroll animation
 * Adds staggered fade-in effect when cards enter viewport
 */
function initFindingCards() {
    const findingCards = document.querySelectorAll('.finding-card');
    if (findingCards.length === 0) return;
    
    createScrollObserver('.finding-card', (element, entry) => {
        // Get index of card for stagger delay
        const cards = Array.from(document.querySelectorAll('.finding-card'));
        const index = cards.indexOf(element);
        
        // Add visible class with delay based on index
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 150); // 150ms stagger between cards
    }, { threshold: 0.2 });
}

/**
 * Initialize case cards scroll animation (Research page)
 * Adds staggered fade-in effect when case cards enter viewport
 */
function initCaseCards() {
    const caseCards = document.querySelectorAll('.case-card');
    if (caseCards.length === 0) return;
    
    createScrollObserver('.case-card', (element, entry) => {
        // Get index of card for stagger delay
        const cards = Array.from(document.querySelectorAll('.case-card'));
        const index = cards.indexOf(element);
        
        // Add visible class with delay based on index
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); // 200ms stagger between case cards
    }, { threshold: 0.1 });
}

/* ========================================
   APP INITIALIZATION
   Main initialization function - runs on DOM ready
   ========================================= */

/**
 * Initialize all app features
 */
function initApp() {
    if (APP.initialized) return;
    
    console.log('🏈 NFL Injury Recovery Research - Initializing...');
    
    // Core features (always initialize)
    initSmoothScroll();
    initCounters();
    initModals();
    initNavigation();
    initPageTransitions();
    
    // Home page animations
    initStatCards();
    initComparisonCards();
    initFindingCards();
    
    // Research page animations
    initCaseCards();
    
    // About page animations
    initObjectiveCards();
    initTakeawayBlocks();
    initImplicationCards();
    
    // Resources page animations
    initCitationCards();
    initInfoCards();
    
    // Interactive features
    initRacingBars();
    initIconGlows();
    
    APP.initialized = true;
    console.log('✅ App initialized successfully');
}

/* ========================================
   ENTRY POINT
   Run when DOM is fully loaded
   ========================================= */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

/* ========================================
   EXPORT FOR DEBUGGING
   Make key functions available in console
   ========================================= */
window.APP = APP;
window.openModal = openModal;
window.closeModal = closeModal;
