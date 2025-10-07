---
layout: page
title:
permalink: /people/mohammad-hossein-momeni-hamaneh/
nav: false
---

<div id="profile-page">
  <header class="profile-header">
    <div class="profile-title">
      <h1>Mohammad Hossein Momeni Hamaneh</h1>
      <p class="subtitle">MSc Student · Sharif University of Technology · Electrical Engineering</p>
    </div>
    <div class="profile-photo">
      {% include figure.liquid path="assets/img/mohammadhossein.jpg" alt="Mohammad Hossein Momeni Hamaneh" class="img-fluid z-depth-1 rounded" loading="lazy" cache_bust=true %}
    </div>
  </header>

  <section class="profile-grid">
    <aside class="profile-aside">
      <div class="panel">
        <h3 class="panel-title">Research Interests</h3>
        <ul class="tags">
          <li>Reinforcement Learning</li>
          <li>Probability & Statistics</li>
          <li>High Dimensional Probability</li>
          <li>Machine Learning Theory</li>
          <li>Information Theory</li>
        </ul>
      </div>

      <div class="panel">
        <h3 class="panel-title">Contact</h3>
        <p><a class="btn btn-sm" href="mailto:momenihamaneh1381@gmail.com">Email</a></p>
        <div class="links">
          <a class="btn btn-sm btn-secondary" href="https://github.com/momenihamaneh1381" target="_blank" rel="noopener">GitHub</a>
          <a class="btn btn-sm btn-secondary" href="https://www.linkedin.com/in/mohammadhossein-momenihamaneh" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </aside>

    <article class="profile-main">
      <div class="panel">
        <h3 class="panel-title">Education</h3>
        <ul class="timeline">
          <li>
            <strong>MSc in Electrical Engineering - Communication Systems</strong>
            <p>Sharif University of Technology<br>2024 - Present</p>
          </li>
          <li>
            <strong>BSc in Electrical Engineering - Communication Systems</strong>
            <p>Sharif University of Technology<br>2020 - 2024</p>
          </li>
        </ul>
      </div>

      <div class="panel">
        <h3 class="panel-title">About Me</h3>
        <p>I am a Master's student in the Electrical Engineering Department at Sharif University of Technology. My research focuses on the intersection of machine learning and probability theory, with a particular emphasis on their theoretical foundations. My interests include Reinforcement Learning, Machine Learning Theory, and Deep Generative Models. I am especially interested in applications of Information Theory and High-Dimensional Probability to AI.</p>
      </div>

      <div class="panel">
        <h3 class="panel-title">Achievements</h3>
        <ul class="bullets">
          <li><strong>🥇 Gold Medal</strong>, National Olympiad of Electrical Engineering of Iran's Universities, 2024</li>
        </ul>
      </div>
    </article>
  </section>
</div>

<style>
  /* Scoped styles for the individual profile page */
  #profile-page { 
    margin-top: 1.5rem;
    color: var(--global-text-color, #333);
    background: var(--global-bg-color, #f8f9fa);
  }
  
  #profile-page .profile-header { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    gap: 2rem; 
    margin-bottom: 2rem;
    padding: 1rem;
    background: var(--global-card-bg-color, #fff);
    border-radius: 12px;
    box-shadow: 0 2px 12px var(--global-shadow-color, rgba(0,0,0,.05));
  }
  
  #profile-page .profile-title h1 { 
    margin: 0; 
    color: var(--global-theme-color, #4f46e5);
  }
  
  #profile-page .profile-title .subtitle { 
    margin: 0.5rem 0 0; 
    color: var(--global-text-muted, #6c757d);
    font-size: 1.1rem;
  }
  
  #profile-page .profile-photo img { 
    max-height: 180px; 
    width: auto; 
    display: block;
    border-radius: 8px;
    border: 1px solid var(--global-divider-color, rgba(0,0,0,.08));
    box-shadow: 0 2px 8px var(--global-shadow-color, rgba(0,0,0,.05));
  }
  
  @media (max-width: 768px) { 
    #profile-page .profile-header { 
      flex-direction: column-reverse; 
      align-items: flex-start; 
      gap: 1.5rem;
    } 
    #profile-page .profile-photo img { 
      max-height: 140px; 
    } 
  }

  #profile-page .profile-grid { 
    display: grid; 
    grid-template-columns: 300px 1fr; 
    gap: 1.5rem;
  }
  
  @media (max-width: 992px) { 
    #profile-page .profile-grid { 
      grid-template-columns: 1fr; 
    } 
  }

  #profile-page .panel { 
    background: var(--global-card-bg-color, #fff); 
    border: 1px solid var(--global-divider-color, rgba(0,0,0,.08)); 
    border-radius: 12px; 
    padding: 1.5rem; 
    box-shadow: 0 2px 12px var(--global-shadow-color, rgba(0,0,0,.04));
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  #profile-page .panel:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px var(--global-shadow-hover, rgba(0,0,0,.08));
  }
  
  #profile-page .panel-title { 
    margin: 0 0 1rem; 
    font-size: 1.2rem; 
    color: var(--global-theme-color, #4f46e5);
    font-weight: 600;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--global-divider-color, rgba(0,0,0,.08));
  }
  
  #profile-page .panel + .panel { 
    margin-top: 1.5rem; 
  }

  #profile-page .tags { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
    display: flex; 
    flex-wrap: wrap; 
    gap: 0.5rem; 
  }
  
  #profile-page .tags li { 
    background: var(--global-bg-color, #f8f9fa); 
    padding: 0.4rem 0.8rem; 
    border-radius: 20px; 
    font-size: 0.85rem; 
    color: var(--global-text-color, #333);
    border: 1px solid var(--global-divider-color, rgba(0,0,0,.08));
  }

  #profile-page .timeline {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  #profile-page .timeline:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1.1rem;
    width: 2px;
    background: var(--global-theme-color, #4f46e5);
    opacity: 0.2;
    z-index: 1;
  }

  #profile-page .timeline li {
    position: relative;
    padding: 0 0 1.5rem 2.5rem;
    margin: 0;
  }

  #profile-page .timeline li:last-child {
    padding-bottom: 0.5rem;
  }

  #profile-page .timeline li:before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--global-card-bg-color, #fff);
    border: 2px solid var(--global-theme-color, #4f46e5);
    z-index: 2;
  }

  #profile-page .timeline li:after {
    content: '';
    position: absolute;
    left: 0.9rem;
    top: 0.65rem;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: var(--global-theme-color, #4f46e5);
    z-index: 3;
  }

  #profile-page .timeline li strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--global-heading-color, #2d3748);
  }

  #profile-page .timeline li p {
    margin: 0;
    color: var(--global-text-muted, #6c757d);
    font-size: 0.9rem;
  }

  #profile-page .bullets {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #profile-page .bullets li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }

  #profile-page .bullets li:before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--global-theme-color, #4f46e5);
    font-weight: bold;
  }

  #profile-page .btn { 
    display: inline-block;
    background: var(--global-theme-color, #4f46e5);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  #profile-page .btn:hover {
    background: var(--global-theme-hover, #4338ca);
    transform: translateY(-1px);
  }

  #profile-page .btn-sm { 
    padding: 0.4rem 0.8rem; 
    font-size: 0.85rem; 
  }
  
  #profile-page .btn-secondary {
    background: var(--global-bg-color, #f8f9fa);
    color: var(--global-text-color, #333);
    border: 1px solid var(--global-divider-color, rgba(0,0,0,.08));
  }
  
  #profile-page .btn-secondary:hover {
    background: var(--global-bg-hover, #e9ecef);
    transform: translateY(-1px);
  }
  
  #profile-page .links {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
</style>
