// ========== PAGE ROUTING SYSTEM ==========
const pageContainer = document.getElementById('pageContainer');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Page templates
const pages = {
    home: `
        <section class="hero page active" id="homePage">
            <div class="hero-orb"></div>
            <div class="hero-grid">
                <div class="hero-image-wrapper">
                    <div class="hero-image-glow"></div>
                    <div class="hero-image-frame">
                        <img src="images/Profile.jpeg" alt="Davies">
                    </div>
                </div>
                <div class="hero-text">
                    <p class="hero-badge">SOFTWARE ENGINEERING STUDENT & FULL-STACK DEVELOPER</p>
                    <h1 class="hero-title">Building <span>High-Performance</span> Systems</h1>
                    <p class="hero-description">I'm Davies — I architect full-stack applications and AI-driven systems. From production-grade RAG assistants to medical healthcare dashboards, I build software that delivers real impact.</p>
                    <div class="hero-buttons">
                    <p style="color: var(--slate-400); font-size: 0.9rem; margin-top: -6px; margin-bottom: 30px; text-align: center;">
    <span style="color: var(--cyan-400); font-weight: 600;">Core stack:</span> 
    React · TypeScript · Node.js · PostgreSQL · Python · Docker · Linux
</p>
                        <button class="btn btn-primary" onclick="navigateTo('projects')">
                            View My Work
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                        <button class="btn btn-outline" onclick="navigateTo('contact')">Get In Touch</button>
                    </div>
                    <div class="hero-socials">
                        <a href="https://github.com/Childbaby" target="_blank" rel="noopener">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        <a href="https://linkedin.com/in/davies-manchishi" target="_blank" rel="noopener">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="mailto:daviesmanchishi3@gmail.com">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
        projects: `
        <section id="projectsPage">
            <div class="container" style="padding-top: 100px;">
                <div class="section-heading">
                    <h2>Featured Projects</h2>
                    <p>Production-grade applications showcasing full-stack, AI, and systems engineering capabilities.</p>
                    <div class="divider"></div>
                </div>
                <div class="projects-grid">
                    
                    <!-- Project 1: Campus Operations Platform (In Progress) -->
                    <div class="project-card">
                        <div class="project-image">
                            <!-- Campus/Building Icon -->
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                                <rect x="4" y="2" width="16" height="20" rx="1"/>
                                <line x1="9" y1="6" x2="9" y2="10"/>
                                <line x1="15" y1="6" x2="15" y2="10"/>
                                <line x1="9" y1="14" x2="9" y2="18"/>
                                <line x1="15" y1="14" x2="15" y2="18"/>
                                <line x1="4" y1="22" x2="20" y2="22"/>
                                <rect x="10" y="10" width="4" height="4" rx="0.5"/>
                            </svg>
                            <div class="overlay"></div>
                        </div>
                        <div class="project-body">
                            <h3>Campus Operations Platform</h3>
                            <p>A unified university operations system combining event management with RSVP tracking and a maintenance ticketing system with status workflows. Built with role-based access control and admin analytics dashboard.</p>
                            <div class="project-tags">
                                <span class="project-tag">React</span>
                                <span class="project-tag">TypeScript</span>
                                <span class="project-tag">Node.js</span>
                                <span class="project-tag">PostgreSQL</span>
                                <span class="project-tag">Docker</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/Childbaby/campus-operations" target="_blank" rel="noopener" class="project-link-source">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    Source
                                </a>
                               <span class="status-badge in-progress" style="margin-left: auto;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    In Progress
</span>
                            </div>
                        </div>
                    </div>

                    <!-- Project 2: Enterprise RAG (Completed) -->
                    <div class="project-card">
                        <div class="project-image">
                            <!-- AI Brain/Neural Icon -->
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                                <circle cx="12" cy="12" r="9"/>
                                <path d="M12 3v2"/>
                                <path d="M12 19v2"/>
                                <path d="M3 12h2"/>
                                <path d="M19 12h2"/>
                                <circle cx="12" cy="12" r="3"/>
                                <line x1="8" y1="8" x2="9.5" y2="9.5"/>
                                <line x1="14.5" y1="14.5" x2="16" y2="16"/>
                                <line x1="16" y1="8" x2="14.5" y2="9.5"/>
                                <line x1="9.5" y1="14.5" x2="8" y2="16"/>
                            </svg>
                            <div class="overlay"></div>
                        </div>
                        <div class="project-body">
                            <h3>Enterprise RAG</h3>
                            <p>A production-grade Retrieval-Augmented Generation system enabling intelligent document querying across enterprise knowledge bases. Leverages vector embeddings and LLMs for precise, context-aware answers.</p>
                            <div class="project-tags">
                                <span class="project-tag">Python</span>
                                <span class="project-tag">LangChain</span>
                                <span class="project-tag">Pinecone</span>
                                <span class="project-tag">Next.js</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/Childbaby/enterprise-rag" target="_blank" rel="noopener" class="project-link-source">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    Source
                                </a>
                                <a href="https://enterprise-rag-demo.vercel.app" target="_blank" rel="noopener" class="project-link-demo">
                                    Live Demo
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 3: ProcBlock (Completed) -->
                    <div class="project-card">
                        <div class="project-image">
                            <!-- Medical/Health Dashboard Icon -->
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                                <rect x="2" y="3" width="20" height="14" rx="2"/>
                                <line x1="8" y1="21" x2="16" y2="21"/>
                                <line x1="12" y1="17" x2="12" y2="21"/>
                                <polyline points="6 10 10 14 14 10 18 14"/>
                                <circle cx="10" cy="14" r="0.5" fill="currentColor"/>
                                <circle cx="14" cy="10" r="0.5" fill="currentColor"/>
                            </svg>
                            <div class="overlay"></div>
                        </div>
                        <div class="project-body">
                            <h3>ProcBlock</h3>
                            <p>A high-performance medical dashboard for healthcare procurement tracking. Built with real-time analytics, role-based access control, and an intuitive interface designed for clinical environments.</p>
                            <div class="project-tags">
                                <span class="project-tag">React</span>
                                <span class="project-tag">Node.js</span>
                                <span class="project-tag">PostgreSQL</span>
                                <span class="project-tag">Docker</span>
                            </div>
                            <div class="project-links">
                                <a href="https://github.com/Childbaby/procblock" target="_blank" rel="noopener" class="project-link-source">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    Source
                                </a>
                                <a href="https://procblock-demo.vercel.app" target="_blank" rel="noopener" class="project-link-demo">
                                    Live Demo
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 4: URL Shortener + Analytics (Not Started) -->
                    <div class="project-card">
                        <div class="project-image">
                            <!-- Link/Chain Icon -->
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                <circle cx="12" cy="12" r="1" fill="currentColor"/>
                            </svg>
                            <div class="overlay"></div>
                        </div>
                        <div class="project-body">
                            <h3>URL Shortener + Analytics</h3>
                            <p>A production-grade URL shortening service with real-time click analytics, geolocation tracking, Redis caching achieving sub-10ms redirects, and rate limiting middleware. Built for high-throughput performance.</p>
                            <div class="project-tags">
                                <span class="project-tag">Node.js</span>
                                <span class="project-tag">PostgreSQL</span>
                                <span class="project-tag">Redis</span>
                                <span class="project-tag">Docker</span>
                            </div>
                                                        <div class="project-links" style="justify-content: center;">
                                <span class="status-badge coming-soon">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Project 5: Davies CLI (Not Started) -->
                    <div class="project-card">
                        <div class="project-image">
                            <!-- Terminal/CLI Icon -->
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                                <polyline points="4 17 10 11 4 5"/>
                                <line x1="12" y1="19" x2="20" y2="19"/>
                                <rect x="2" y="3" width="20" height="18" rx="2"/>
                                <circle cx="7" cy="7" r="0.5" fill="currentColor"/>
                                <circle cx="9.5" cy="7" r="0.5" fill="currentColor"/>
                                <circle cx="12" cy="7" r="0.5" fill="currentColor"/>
                            </svg>
                            <div class="overlay"></div>
                        </div>
                        <div class="project-body">
                            <h3>Davies CLI</h3>
                            <p>A personal command-line productivity tool published to npm. Automates project scaffolding, portfolio deployment, GitHub project listing, and development environment setup. Built to solve real workflow friction points.</p>
                            <div class="project-tags">
                                <span class="project-tag">Node.js</span>
                                <span class="project-tag">Commander.js</span>
                                <span class="project-tag">npm</span>
                                <span class="project-tag">Shell</span>
                            </div>
                                                        <div class="project-links" style="justify-content: center;">
                                <span class="status-badge coming-soon">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    Coming Soon
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `,
        experience: `
        <section id="experiencePage">
            <div class="container" style="padding-top: 100px;">
                <div class="section-heading">
                    <h2>Experience & Education</h2>
                    <p>My journey as a developer, learner, and builder.</p>
                    <div class="divider"></div>
                </div>
                <div class="timeline">
                    
                    <!-- Timeline Item 1: Education -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <span class="timeline-year">2024 - Present</span>
                        <h3>Software Engineering</h3>
                        <p class="timeline-company">Zambia University Of Technology</p>
                        <p>Pursuing a degree in Software Engineering with a focus on full-stack development and artificial intelligence. Building production-grade projects including AI-driven systems and healthcare dashboards.</p>
                        <div class="timeline-tags">
                            <span class="timeline-tag">React</span>
                            <span class="timeline-tag">Node.js</span>
                            <span class="timeline-tag">Python</span>
                            <span class="timeline-tag">AI/ML</span>
                            <span class="timeline-tag">PostgreSQL</span>
                        </div>
                    </div>

                    <!-- Timeline Item 2: Mentorship -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <span class="timeline-year">2024 - Present</span>
                        <h3>Software Development Mentee</h3>
                        <p class="timeline-company">Sam Cards Organization</p>
                        <p>Under active mentorship from senior developers, gaining hands-on exposure to production workflows, code reviews, system architecture, and modern development practices. Contributing to real-world projects while accelerating technical growth.</p>
                        <div class="timeline-tags">
                            <span class="timeline-tag">Code Reviews</span>
                            <span class="timeline-tag">System Design</span>
                            <span class="timeline-tag">Agile</span>
                            <span class="timeline-tag">Linux</span>
                        </div>
                    </div>

                    <!-- Timeline Item 3: Projects & Self-Development -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <span class="timeline-year">2023 - Present</span>
                        <h3>Independent Full-Stack Developer</h3>
                        <p class="timeline-company">Self-Initiated Projects</p>
                        <p>Designing and building full-stack applications from concept to deployment. Developed an AI-powered RAG system, medical dashboards, and developer tooling. Continuously learning TypeScript, Docker, and cloud infrastructure.</p>
                        <div class="timeline-tags">
                            <span class="timeline-tag">Full-Stack</span>
                            <span class="timeline-tag">AI Integration</span>
                            <span class="timeline-tag">Docker</span>
                            <span class="timeline-tag">TypeScript</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `,
    contact: `
        <section id="contactPage">
            <div class="container" style="padding-top: 100px;">
                <div class="section-heading">
                    <h2>Get In Touch</h2>
                    <p>Have a project in mind? Let's build something great together.</p>
                    <div class="divider"></div>
                </div>
                <div class="contact-container">
                    <div class="contact-info">
                        <span class="contact-info-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            daviesmanchishi3@gmail.com
                        </span>
                        <span class="contact-info-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Ndola, Zambia
                        </span>
                    </div>

                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <div class="form-input-wrapper">
                                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <input type="text" id="name" name="name" placeholder="John Doe" required>
                            </div>
                            <span class="error-message" id="nameError">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                Please enter your name
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <div class="form-input-wrapper">
                                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <input type="email" id="email" name="email" placeholder="john@example.com" required>
                            </div>
                            <span class="error-message" id="emailError">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                Please enter a valid email
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" placeholder="Tell me about your project, idea, or just say hello..." required></textarea>
                            <span class="error-message" id="messageError">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                Please write a message
                            </span>
                        </div>
                        <button type="submit" class="btn-submit">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            Send Message
                        </button>
                    </form>

                    <div class="success-message" id="successMessage">
                        <div class="success-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-400)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Navigation function
function navigateTo(page) {
    pageContainer.innerHTML = pages[page];
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${page}`) {
            link.classList.add('active');
        }
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    mobileMenu.classList.remove('active');
    
    if (page === 'contact') {
        setTimeout(initContactForm, 100);
    }
    
    window.location.hash = page;
}

// ========== MOBILE MENU ==========
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('href').replace('#', '');
        navigateTo(page);
    });
});

// ========== DESKTOP NAV ==========
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('href').replace('#', '');
        navigateTo(page);
    });
});

// ========== CONTACT FORM ==========
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        document.querySelectorAll('.error-message').forEach(el => el.classList.remove('visible'));
        document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

        if (!name.value.trim()) {
            document.getElementById('nameError').classList.add('visible');
            name.classList.add('error');
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            document.getElementById('emailError').classList.add('visible');
            email.classList.add('error');
            valid = false;
        }

        if (!message.value.trim()) {
            document.getElementById('messageError').classList.add('visible');
            message.classList.add('error');
            valid = false;
        }

        if (valid) {
            contactForm.style.display = 'none';
            successMessage.classList.add('active');
            console.log('Form submitted:', {
                name: name.value,
                email: email.value,
                message: message.value
            });
        }
    });
}

// ========== INITIAL LOAD ==========
function init() {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);
});

init();