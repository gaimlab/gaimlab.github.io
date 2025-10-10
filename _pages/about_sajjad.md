---
layout: page
title:
permalink: /people/sajjad-amini/
nav: false
---

<div id="profile-page">
  <header class="profile-header">
    <div class="profile-title">
      <h1>Sajjad Amini</h1>
      <p class="subtitle">Assistant Professor · Sharif University of Technology · Electronics Research Institute</p>
    </div>
    <div class="profile-photo">
      {% include figure.liquid path="assets/img/sajjad.jpg" alt="Sajjad Amini" class="img-fluid z-depth-1 rounded" loading="lazy" cache_bust=true %}
    </div>
  </header>

  <section class="profile-grid">
    <aside class="profile-aside">
      <div class="panel">
        <h3 class="panel-title">Research Interests</h3>
        <ul class="tags">
          <li>Trustworthy Machine Learning</li>
          <li>Generative Modeling</li>
        </ul>
      </div>

      <div class="panel">
        <h3 class="panel-title">Contact</h3>
        <p><a class="btn btn-sm" href="mailto:s_amini@sharif.edu">Email</a></p>
        <div class="links">
          <a class="btn btn-sm btn-secondary" href="https://scholar.google.com/citations?user=24GngZYAAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a>
          <a class="btn btn-sm btn-secondary" href="https://www.linkedin.com/in/s-amini/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </aside>

    <article class="profile-main">

      <div class="panel">
        <h3 class="panel-title">About Me</h3>
        <p>Greetings! I'm Sajjad Amini, proudly serving as an Assistant Professor at the Electronics Research Institute, Sharif University of Technology. As a dedicated professional, I specialize in Machine Learning, with a keen focus on Deep Generative Models and Robust Deep Learning, constantly striving to advance knowledge and innovation in these dynamic fields. At Sharif University, my work revolves around groundbreaking research in adversarial attacks and defenses, deepfake detection, and advancing contrastive learning in speech processing. My teaching portfolio features courses like Introduction to Machine Learning and Linear Algebra. Alongside my academic pursuits, I have authored several papers in esteemed journals and conferences, emphasizing the robustness of deep neural networks and other innovative topics.</p>
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
    color: var(--global-theme-color, #4f46e5);
    margin-bottom: 0.25rem;
    font-weight: 600;
  }

  #profile-page .timeline li p {
    margin: 0.25rem 0 0;
    color: var(--global-text-muted, #6c757d);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  #profile-page .bullets {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #profile-page .bullets li {
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: var(--global-text-color, #333);
  }

  #profile-page .bullets li:before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--global-theme-color, #4f46e5);
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1;
  }

  #profile-page .links { 
    display: flex; 
    gap: 0.75rem; 
    margin-top: 1rem; 
    flex-wrap: wrap;
  }
  
  #profile-page .btn { 
    padding: 0.5rem 1rem; 
    border-radius: 8px; 
    text-decoration: none; 
    font-size: 0.9rem; 
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
  
  #profile-page .btn-sm { 
    padding: 0.4rem 0.8rem; 
    font-size: 0.85rem; 
  }
  
  #profile-page .btn { 
    background: var(--global-theme-color, #4f46e5); 
    color: var(--global-hover-text-color, #fff); 
    border: none; 
  }
  
  #profile-page .btn-secondary { 
    background: var(--global-bg-color, #f8f9fa); 
    color: var(--global-text-color, #333); 
    border: 1px solid var(--global-divider-color, rgba(0,0,0,.1));
  }
  
  #profile-page .btn:hover { 
    opacity: 0.9; 
    transform: translateY(-2px); 
    box-shadow: 0 4px 8px var(--global-shadow-hover, rgba(0,0,0,.1));
  }
  
  /* Smooth transitions for theme changes */
  #profile-page,
  #profile-page * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
</style>
