---
layout: page
title: teaching
permalink: /teaching/
description: "Explore our comprehensive courses in deep generative models, machine learning, and artificial intelligence. Our curriculum bridges theoretical foundations with practical applications, preparing students for cutting-edge research and industry challenges in AI. Browse our graduate and undergraduate course offerings to advance your expertise in modern machine learning."
nav: true
nav_order: 6
---

<div class="teaching">
  <div class="teaching-section">
    <h2 class="category">Graduate Courses</h2>
    <div class="grid">
      {% assign sorted_teaching = site.teaching | where: "category", "Graduate" | sort: "date" | reverse %}
      {% for teaching in sorted_teaching %}
        {% include teaching.liquid %}
      {% endfor %}
    </div>
  </div>

  <div class="teaching-section">
    <h2 class="category">Undergraduate Courses</h2>
    <div class="grid">
      {% assign sorted_teaching = site.teaching | where: "category", "Undergraduate" | sort: "date" | reverse %}
      {% for teaching in sorted_teaching %}
        {% include teaching.liquid %}
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .teaching-section {
    display: flow-root;
    clear: both;
    padding-top: 1rem;
    margin-bottom: 5rem;
  }

  .teaching .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    width: 100%;
  }
  
  .teaching .col {
    display: block;
    position: static !important;
    float: none !important;
    width: auto !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  
  .teaching .col > a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  
  .teaching .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .teaching .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  
  .teaching .card-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .teaching .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .teaching .card-text {
    font-size: 0.9rem;
    flex-grow: 1;
  }
  
  .teaching .text-muted {
    font-size: 0.85rem;
  }
  
  .teaching .github-icon {
    display: inline-block;
    margin-right: 10px;
  }
  
  .teaching .icon a {
    color: #6c757d;
    text-decoration: none;
  }
  
  .teaching .icon a:hover {
    color: #212529;
  }
  
  .teaching .category {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    font-weight: 600;
    clear: both;
  }
  
  .teaching .category:first-of-type {
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .teaching .grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
