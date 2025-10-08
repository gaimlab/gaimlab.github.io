---
layout: page
title: Vector-Field Generative AI Models
description: Projects on Vector-Field Generative AI Models
tags: [Generative AI, Vector-Field]
img: assets/img/Vector-Field-Generative-AI-Models.png
importance: 1
category: work
---

# About

Our research in Vector-Field Generative AI Models focuses on developing novel approaches to generative modeling by leveraging the power of continuous-time dynamics. We explore how vector fields can be used to model complex probability distributions and generate high-quality samples across various domains, including images, 3D shapes, and scientific data.

Key areas of investigation include:
- Continuous normalizing flows
- Score-based generative models
- Diffusion models
- Neural ODEs for generative modeling
- Applications in scientific computing and physics

## People

<div class="people-container">
  <div class="people-category">
    <h3 class="people-title">Faculty</h3>
    <ul class="people-list">
      <li class="person">
        <i class="fas fa-user-tie person-icon"></i>
        <span class="person-name">Dr. Sajjad Amini</span>
      </li>
    </ul>
  </div>

  <div class="people-category">
    <h3 class="people-title">PhD Students</h3>
    <ul class="people-list">
      <li class="person">
        <i class="fas fa-user-graduate person-icon"></i>
        <span class="person-name">Mohammad Eshtehardian</span>
      </li>
    </ul>
  </div>

  <div class="people-category">
    <h3 class="people-title">MSc Students</h3>
    <ul class="people-list">
      <li class="person">
        <i class="fas fa-user-graduate person-icon"></i>
        <span class="person-name">Mohammad Hossein Momeni Hamaneh</span>
      </li>
    </ul>
  </div>

  <div class="people-category">
    <h3 class="people-title">BSc Students</h3>
    <ul class="people-list">
      <li class="person">
        <i class="fas fa-handshake person-icon"></i>
        <span class="person-name">Borna Khodabandeh</span>
      </li>
      <li class="person">
        <i class="fas fa-handshake person-icon"></i>
        <span class="person-name">Amir Abbas Afzali</span>
      </li>
    </ul>
  </div>
</div>

<style>
  .people-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .people-category {
    background: var(--global-card-bg);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .people-category:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .people-title {
    color: var(--global-theme-color);
    font-size: 1.2rem;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--global-divider-color);
  }

  .people-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
  }

  .person {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    font-size: 0.95rem;
  }

  .person-icon {
    margin-right: 0.75rem;
    color: var(--global-theme-color);
    width: 1.1em;
    text-align: center;
  }

  .person-name {
    color: var(--global-text-color);
  }

  @media (max-width: 768px) {
    .people-container {
      grid-template-columns: 1fr;
    }
  }
</style>

## Related Publications

<div class="publications">
  {% bibliography -f papers -q @*[keywords ~= vector-field]* %}
</div>