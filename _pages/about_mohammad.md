---
layout: page
title:
permalink: /people/mohammad-eshtehardian/
nav: false
---

<div id="profile-page">
  <header class="profile-header">
    <div class="profile-title">
      <h1>Mohammad Eshtehardian</h1>
      <p class="subtitle">PhD Student · Sharif University of Technology · Electrical Engineering</p>
    </div>
    <div class="profile-photo">
      {% include figure.liquid path="assets/img/mohammad.jpg" alt="Mohammad Eshtehardian" class="img-fluid z-depth-1 rounded" loading="lazy" cache_bust=true %}
    </div>
  </header>

  <section class="profile-grid">
    <aside class="profile-aside">
      <div class="panel">
        <h3 class="panel-title">Research Interests</h3>
        <ul class="tags">
          <li>Vector-Field Generative AI Models</li>
          <li>Machine Learning Theory</li>
          <li>Reinforcement Learning</li>
          <li>Information Theory</li>
        </ul>
      </div>

      <div class="panel">
        <h3 class="panel-title">Contact</h3>
        <p><a class="btn btn-sm" href="mailto:m.eshtehardian@yahoo.com">Email</a></p>
        <div class="links">
          <a class="btn btn-sm btn-secondary" href="https://github.com/MohammadEshtehardian" target="_blank" rel="noopener">GitHub</a>
          <a class="btn btn-sm btn-secondary" href="https://www.linkedin.com/in/mohammad-eshtehardian/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </aside>

    <article class="profile-main">
      <div class="panel">
        <h3 class="panel-title">Education</h3>
        <ul class="timeline">
          <li><strong>PhD in Electrical Engineering -  Communication Systems</strong>, Sharif University of Technology, Present</li>
          <li><strong>MSc in Electrical Engineering - Communication Systems</strong>, Sharif University of Technology, 2023-2025</li>
          <li><strong>BSc in Electrical Engineering - Communication Systems</strong>, Sharif University of Technology, 2019-2023</li>
        </ul>
      </div>

      <div class="panel">
        <h3 class="panel-title">About Me</h3>
        <p>As a PhD candidate in Electrical Engineering at Sharif University of Technology, I'm at the forefront of AI research, specializing in Vector-Field Generative Models and their theoretical underpinnings. My work bridges deep learning, information theory, and reinforcement learning to pioneer more efficient and interpretable AI systems. With a comprehensive academic journey that spans from my Bachelor's to PhD at Sharif University, I've cultivated a unique blend of theoretical depth and practical ML expertise. My research not only advances the mathematical foundations of AI but also translates these innovations into real-world applications, pushing the boundaries of what's possible in generative modeling and intelligent systems.</p>
      </div>

      <div class="panel">
        <h3 class="panel-title">Achievements</h3>
        <ul class="bullets">
          <li>🥇 Gold Medal, Iranian Physics Olympiad, 2018</li>
        </ul>
      </div>
    </article>
  </section>
</div>

<style>
  /* Scoped styles for the individual profile page */
  #profile-page { margin-top: 1rem; }
  #profile-page .profile-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
  #profile-page .profile-title h1 { margin: 0; }
  #profile-page .profile-title .subtitle { margin: .25rem 0 0; color: #555; }
  #profile-page .profile-photo img { max-height: 160px; width: auto; display: block; }
  @media (max-width: 576px) { #profile-page .profile-header { flex-direction: column-reverse; align-items: flex-start; } #profile-page .profile-photo img { max-height: 120px; } }

  #profile-page .profile-grid { display: grid; grid-template-columns: 280px 1fr; gap: 1rem; }
  @media (max-width: 992px) { #profile-page .profile-grid { grid-template-columns: 1fr; } }

  #profile-page .panel { background: #fff; border: 1px solid rgba(0,0,0,.06); border-radius: 12px; padding: 1rem; box-shadow: 0 2px 10px rgba(0,0,0,.04); }
  #profile-page .panel-title { margin: 0 0 .6rem; font-size: 1rem; letter-spacing: .2px; }
  #profile-page .profile-main .panel { margin-bottom: 1.25rem; }
  #profile-page .profile-aside .panel { margin-bottom: 1.25rem; }

  #profile-page .tags { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: .4rem; }
  #profile-page .tags li { background: rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.08); border-radius: 999px; padding: .3rem .6rem; font-size: .9rem; white-space: nowrap; }

  /* Enhanced timeline */
  #profile-page .timeline { position: relative; margin: 0; padding-left: 1rem; list-style: none; }
  #profile-page .timeline:before { content: ""; position: absolute; top: .25rem; bottom: .25rem; left: .25rem; width: 2px; background: linear-gradient(180deg, var(--accent, #4f46e5), rgba(79,70,229,.25)); border-radius: 1px; }
  #profile-page .timeline li { margin: .5rem 0; padding-left: .5rem; font-size: .95rem; border: 0 !important; position: relative; }
  #profile-page .timeline li::before { content: none !important; border: 0 !important; }
  #profile-page .timeline li::marker { content: '' !important; }
  #profile-page .bullets { margin: 0; padding-left: 1.1rem; font-size: .95rem; }

  #profile-page .links { display: flex; gap: .4rem; flex-wrap: wrap; }
  #profile-page .btn.btn-sm { padding: .35rem .6rem; font-size: .85rem; border-radius: 8px; background: var(--accent, #4f46e5); color: #fff; text-decoration: none; border: 1px solid rgba(0,0,0,.06); }
  #profile-page .btn.btn-sm.btn-secondary { background: #fff; color: inherit; }
</style>
