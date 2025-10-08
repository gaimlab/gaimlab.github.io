---
title: "Deep Generative Models"
collection: teaching
type: "Graduate Course"
layout: teaching
permalink: /teaching/DGM-Fall-2024
venue: "Sharif University of Technology"
semester: "Fall 2024"
description: "A comprehensive graduate course on modern deep generative models, covering both theoretical foundations and practical applications."
date: 2024-09-01
location: "Tehran, Iran"
category: "Graduate"
img: assets/img/DGM.png
website: "https://generative-ai-sut.github.io/"
---

<div id="course-page">

  <section class="course-intro">
    <p>A comprehensive graduate course on modern deep generative models, covering both theoretical foundations and practical applications.</p>
    <div class="meta-grid">
      <div class="meta-item"><span class="label">Semester</span><span class="value">{{ page.semester }}</span></div>
      <div class="meta-item"><span class="label">Credits</span><span class="value">3</span></div>
      <div class="meta-item"><span class="label">Location</span><span class="value">{{ page.location }}</span></div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Information</h2>
    <div class="info-cards">
      <div class="info-card">
        <span class="label">Instructor</span>
        <span class="value">Sajjad Amini</span>
      </div>
      <div class="info-card">
        <span class="label">Lectures</span>
        <span class="value">3 hours per week</span>
      </div>
      <div class="info-card">
        <span class="label">Office Hours</span>
        <span class="value">1 hour per week</span>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Prerequisites</h2>
    <ul class="checklist">
      <li>Probability and Statistics</li>
      <li>Machine Learning</li>
      <li>Deep Learning</li>
      <li>Linear Algebra</li>
    </ul>
  </section>

  <section class="section">
    <h2 class="section-title">Objectives</h2>
    <div class="pill-list">
  <span>Foundations</span>
  <span>Multi-modality</span>
  <span>Training & Optimization</span>
  <span>Real-world Applications</span>
  <span>Evaluation</span>
  <span>Responsible AI</span>
  <span>Reproducibility</span>
  <span>Theory & Practice</span>
  <span>Projects</span>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Topics Covered</h2>
    <ul class="topics">
  <li>Deep Autoregressive Models</li>
  <li>Deep Variational Autoencoders</li>
  <li>Normalizing Flow Models</li>
  <li>Generative Adversarial Nets</li>
  <li>Energy-Based Models</li>
  <li>Diffusion Models</li>
  <li>Evaluation Methods</li>
  <li>Practical Training Tricks</li>
    </ul>
  </section>

  <section class="section">
    <h2 class="section-title">Grading</h2>
    <div class="grading">
  <table>
    <thead>
      <tr><th>Component</th><th>Weight</th></tr>
    </thead>
    <tbody>
      <tr><td>Assignments</td><td>40%</td></tr>
      <tr><td>Midterm Exam</td><td>20%</td></tr>
      <tr><td>Final Project</td><td>20%</td></tr>
      <tr><td>Final Exam</td><td>20%</td></tr>
      <tr><td>Participation</td><td>5%</td></tr>
    </tbody>
  </table>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Resources</h2>
    <div class="resources">
  <p>All course materials, including slides, assignments, and additional resources, are available on the course website.</p>
  <p><a class="btn" href="{{ page.website }}" target="_blank" rel="noopener">Open Course Website</a></p>
  <p class="note">New materials are posted weekly. Please check regularly.</p>
    </div>
  </section>

</div>

<style>
  /* Scoped styles for the course page */
  #course-page { 
    margin-top: .5rem;
    color: var(--global-text-color);
  }
  #course-page .course-hero { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    gap: 1rem; 
    margin-bottom: .75rem; 
  }
  #course-page .course-hero .title-wrap h1 { 
    margin: 0;
    color: var(--global-text-color);
  }
  #course-page .course-hero .subtitle { 
    margin: .25rem 0 0; 
    color: var(--global-text-color-light);
  }
  #course-page .course-hero .hero-media img { 
    max-height: 140px; 
    width: auto; 
    display: block; 
  }
  #course-page .section {
    background-color: var(--global-card-bg-color);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px var(--global-divider-color);
  }
  #course-page .section-title {
    color: var(--global-theme-color);
    margin-top: 0;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 0.5rem;
  }
  #course-page .meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
  }
  #course-page .meta-item {
    background-color: var(--global-code-bg-color);
    padding: 1rem;
    border-radius: 6px;
    text-align: center;
  }
  #course-page .meta-item .label {
    display: block;
    font-weight: 600;
    color: var(--global-text-color-light);
    margin-bottom: 0.25rem;
  }
  #course-page .meta-item .value {
    color: var(--global-theme-color);
    font-weight: 500;
  }
  #course-page .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  #course-page .info-card {
    background-color: var(--global-code-bg-color);
    padding: 1rem;
    border-radius: 6px;
  }
  #course-page .info-card .label {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
  }
  #course-page .info-card .value {
    color: var(--global-text-color);
    font-weight: 500;
    margin-top: 0.25rem;
    display: block;
  }
  #course-page .checklist {
    list-style: none;
    padding: 0;
  }
  #course-page .checklist li {
    padding: 0.25rem 0 0.25rem 1.5rem;
    position: relative;
  }
  #course-page .checklist li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--global-theme-color);
  }
  #course-page .pill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }
  #course-page .pill-list span {
    background-color: var(--global-code-bg-color);
    color: var(--global-text-color);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.85rem;
    border: 1px solid var(--global-divider-color);
  }
  #course-page .topics {
    columns: 2;
    list-style: none;
    padding: 0;
  }
  #course-page .topics li {
    padding: 0.25rem 0;
    position: relative;
    padding-left: 1.25rem;
  }
  #course-page .topics li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--global-theme-color);
  }
  #course-page .grading table {
    width: 100%;
    border-collapse: collapse;
  }
  #course-page .grading th,
  #course-page .grading td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--global-divider-color);
  }
  #course-page .grading th {
    color: var(--global-text-color-light);
    font-weight: 600;
  }
  #course-page .resources {
    text-align: center;
  }
  #course-page .resources .btn {
    display: inline-block;
    background-color: var(--global-theme-color);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    margin: 1rem 0;
    transition: background-color 0.2s;
  }
  #course-page .resources .btn:hover {
    background-color: var(--global-hover-color);
  }
  #course-page .resources .note {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin-top: 0.5rem;
  }
  @media (max-width: 768px) {
    #course-page .topics {
      columns: 1;
    }
  }
  @media (max-width: 576px) { #course-page .course-hero { flex-direction: column-reverse; align-items: flex-start; } #course-page .course-hero .hero-media img { max-height: 110px; } }

  #course-page .course-intro .meta-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: .5rem; margin-top: .5rem; }
  @media (max-width: 768px) { #course-page .course-intro .meta-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
  #course-page .meta-item { background: #fff; border: 1px solid rgba(0,0,0,.06); border-radius: 10px; padding: .6rem .75rem; box-shadow: 0 2px 8px rgba(0,0,0,.03); }
  #course-page .meta-item .label { display: block; font-size: .8rem; color: #666; }
  #course-page .meta-item .value { font-weight: 600; }

  #course-page .pill-list { display: flex; flex-wrap: wrap; gap: .4rem; margin: .5rem 0 .75rem; }
  #course-page .pill-list span { background: rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.08); border-radius: 999px; padding: .3rem .6rem; font-size: .9rem; white-space: nowrap; }

  #course-page .section { margin-top: .75rem; }
  #course-page .section-title { margin: 0 0 .4rem; font-size: 1.2rem; }
  #course-page .info-cards { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: .5rem; }
  @media (max-width: 768px) { #course-page .info-cards { grid-template-columns: 1fr; } }
  #course-page .info-card { background: #fff; border: 1px solid rgba(0,0,0,.06); border-radius: 10px; padding: .6rem .75rem; box-shadow: 0 2px 8px rgba(0,0,0,.03); }
  #course-page .info-card .label { display: block; font-size: .8rem; color: #666; }
  #course-page .info-card .value { font-weight: 600; }

  #course-page .checklist { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: .35rem .75rem; }
  @media (max-width: 576px) { #course-page .checklist { grid-template-columns: 1fr; } }
  #course-page .checklist li { position: relative; padding-left: 1.2rem; }
  #course-page .checklist li:before { content: "✔"; position: absolute; left: 0; top: 0; color: var(--accent, #4f46e5); font-weight: 700; }

  #course-page .topics { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: .35rem .75rem; margin: .25rem 0 .75rem; }
  @media (max-width: 576px) { #course-page .topics { grid-template-columns: 1fr; } }
  #course-page .topics li { list-style: none; position: relative; padding-left: .9rem; }
  #course-page .topics li:before { content: ""; position: absolute; left: 0; top: .55rem; width: .45rem; height: .45rem; border-radius: 50%; background: var(--accent, #4f46e5); box-shadow: 0 0 0 3px rgba(79,70,229,.12); }

  #course-page .grading table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid rgba(0,0,0,.06); border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,.04); }
  #course-page .grading th, #course-page .grading td { padding: .6rem .75rem; text-align: left; }
  #course-page .grading thead { background: rgba(79,70,229,.08); }
  #course-page .grading tbody tr + tr td { border-top: 1px solid rgba(0,0,0,.06); }

  #course-page .resources { border: 1px solid rgba(0,0,0,.06); border-radius: 12px; background: linear-gradient(180deg, rgba(79,70,229,.08), rgba(79,70,229,.03)); padding: .8rem .9rem; margin-top: .75rem; }
  #course-page .btn { display: inline-block; padding: .45rem .75rem; border-radius: 10px; background: var(--accent, #4f46e5); color: #fff; text-decoration: none; border: 1px solid rgba(0,0,0,.06); }
  #course-page .resources .note { color: #555; font-size: .9rem; margin: .35rem 0 0; }
</style>