---
layout: about
title: About
permalink: /
subtitle: Generative AI Models Lab, Sharif University of Technology

profile:
  align: right
  image: GAIM.svg
  image_circular: false # crops the image to make it circular
  hide_image_in_body: true
  more_info:

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div id="about-gaim">
  <p>Welcome to the <strong>Generative AI Models Lab</strong> at Sharif University of Technology. Our research focuses on advancing the field of artificial intelligence through cutting-edge research in the following key areas:</p>

  <div class="pillbar" role="navigation" aria-label="Research areas">
    <a href="/projects/Vector-Field-Generative-AI-Models/" class="pill">Vector Field Generative AI</a>
    <a href="/projects/Trustworthy-Machine-Learning/" class="pill">Trustworthy ML</a>
    <a href="/projects/Reinforcement-Learning/" class="pill">Reinforcement Learning</a>
  </div>


  <div class="grid">
    <section class="card" id="area-vfgaim" aria-labelledby="pill-vfgaim" style="background-color: var(--global-card-bg-color); color: var(--global-text-color); border: 1px solid var(--global-divider-color);">
      <h3 class="card-title" style="color: var(--global-theme-color);">Vector Field Generative AI</h3>
      <ul>
        <li>Continuous-time generative modeling</li>
        <li>Flow-based models and normalizing flows</li>
        <li>Differential equation-based generative models</li>
      </ul>
      <div class="card-actions">
        <a class="btn" href="/research/#vfgaim" style="background-color: var(--global-theme-color); color: var(--global-hover-text-color);">See related research</a>
      </div>
    </section>

    <section class="card" id="area-trustworthy-ml" aria-labelledby="pill-trustworthy-ml" style="background-color: var(--global-card-bg-color); color: var(--global-text-color); border: 1px solid var(--global-divider-color);">
      <h3 class="card-title" style="color: var(--global-theme-color);">Trustworthy Machine Learning</h3>
      <ul>
        <li>Robustness and adversarial robustness</li>
        <li>Explainability and interpretability</li>
        <li>Fairness and bias mitigation</li>
        <li>Privacy-preserving machine learning</li>
      </ul>
      <div class="card-actions">
        <a class="btn" href="/research/#trustworthy-ml" style="background-color: var(--global-theme-color); color: var(--global-hover-text-color);">See related research</a>
      </div>
    </section>

    <section class="card" id="area-rl" aria-labelledby="pill-rl" style="background-color: var(--global-card-bg-color); color: var(--global-text-color); border: 1px solid var(--global-divider-color);">
      <h3 class="card-title" style="color: var(--global-theme-color);">Reinforcement Learning</h3>
      <ul>
        <li>Model-based reinforcement learning</li>
        <li>Multi-agent systems</li>
        <li>Safe and robust RL</li>
        <li>Applications in real-world decision making</li>
      </ul>
      <div class="card-actions">
        <a class="btn" href="/research/#rl" style="background-color: var(--global-theme-color); color: var(--global-hover-text-color);">See related research</a>
      </div>
    </section>
  </div>

  <div class="mission">
    <p>Our mission is to develop theoretically sound and practically impactful AI technologies while ensuring their reliability, safety, and ethical deployment. We collaborate with academic and industry partners to address challenging problems at the intersection of these research areas.</p>
    <div class="mission-media">
      {% include figure.liquid path="assets/img/GAIM.png" alt="GAIM" class="img-fluid z-depth-1 rounded" loading="lazy" cache_bust=true %}
    </div>
  </div>

  <div class="cta">
    <div class="cta-content">
      <h3>Join Us</h3>
      <p>We are always looking for talented and motivated students and researchers to join our lab. If you're passionate about generative AI and want to work on exciting research problems, please reach out.</p>
      <div class="cta-actions">
        <a class="btn" href="/blog/">See open roles</a>
        <a class="btn btn-secondary" href="mailto:{{ site.email | default: 's_amini@sharif.edu' }}">Email the lab</a>
      </div>
    </div>
  </div>
</div>

<style>
  /* Scoped styles for the about page only */
  #about-gaim { margin-top: 1rem; margin-bottom: 2rem; }

  #about-gaim .pillbar { display: flex; flex-wrap: wrap; gap: .5rem; margin: 1rem 0 1.25rem; }
  #about-gaim .pill {
    background: var(--pill-bg, rgba(0,0,0,.05));
    color: var(--pill-fg, inherit);
    border: 1px solid rgba(0,0,0,.08);
    padding: .35rem .6rem;
    border-radius: 999px;
    font-size: .9rem;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  #about-gaim .pill:hover {
    background: var(--global-theme-color);
    color: var(--global-hover-text-color);
    transform: translateY(-1px);
  }
  #about-gaim .pill:focus { 
    outline: 2px solid var(--accent, #4f46e5); 
    outline-offset: 2px; 
  }

  #about-gaim .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
  #about-gaim .grid.single { grid-template-columns: 1fr; }
  @media (max-width: 992px) { #about-gaim .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 576px) { #about-gaim .grid { grid-template-columns: 1fr; } }

  #about-gaim .card {
    background: var(--card-bg, #fff);
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 12px;
    padding: 1rem 1.1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,.04);
    transition: transform .2s ease, box-shadow .2s ease;
    display: none; /* hidden by default */
  }
  #about-gaim .card.show { display: block; }
  #about-gaim .grid.single .card.show { grid-column: 1 / -1; }
  #about-gaim .card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.08); }
  #about-gaim .card-title { margin-top: 0; margin-bottom: .5rem; font-size: 1.05rem; }
  #about-gaim .card ul { margin: 0; padding-left: 1.1rem; }
  #about-gaim .card li { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  #about-gaim .card-actions { margin-top: .8rem; display: none; }
  #about-gaim .grid.single .card.show .card-actions { display: flex; }

  #about-gaim .mission {
    margin: 1.25rem 0 1.5rem;
    padding: .9rem 1rem;
    border-left: 4px solid var(--accent, #4f46e5);
    background: rgba(79,70,229,.06);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
  }
  #about-gaim .mission p { margin: 0; }
  #about-gaim .mission-media { flex: 0 0 auto; }
  #about-gaim .mission-media img { max-height: 140px; width: auto; display: block; }
  @media (max-width: 576px) { #about-gaim .mission { flex-direction: column; align-items: flex-start; } #about-gaim .mission-media img { max-height: 100px; } }

  #about-gaim .cta {
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(79,70,229,.08), rgba(79,70,229,.03));
    padding: 1rem;
  }
  #about-gaim .cta-content { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
  #about-gaim .cta h3 { margin: 0; }
  #about-gaim .cta-actions { display: flex; gap: .5rem; }
  #about-gaim .btn {
    display: inline-block;
    padding: .5rem .8rem;
    border-radius: 10px;
    background: var(--accent, #4f46e5);
    color: #fff;
    text-decoration: none;
    border: 1px solid rgba(0,0,0,.06);
  }
  #about-gaim .btn:hover { filter: brightness(.95); }
  #about-gaim .btn.btn-secondary { background: #fff; color: inherit; }
</style>
