---
layout: page
title: teaching
permalink: /teaching/
description: "Explore our comprehensive courses in deep generative models, machine learning, and artificial intelligence. Our curriculum bridges theoretical foundations with practical applications, preparing students for cutting-edge research and industry challenges in AI. Browse our graduate and undergraduate course offerings to advance your expertise in modern machine learning."
nav: true
nav_order: 6
display_categories: [Graduate, Undergraduate]
horizontal: false
---

<!-- pages/teaching.md -->
<div class="teaching">
{% if site.enable_teaching_categories and page.display_categories %}
  <!-- Display categorized teaching -->
  {% for category in page.display_categories %}
  <a id="{{ category | downcase }}" href="#{{ category | downcase }}">
    <h2 class="category">{{ category }} Courses</h2>
  </a>
  {% assign categorized_teaching = site.teaching | where: "category", category | sort: "date" | reverse %}
  <!-- Generate cards for each teaching item -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for teaching in categorized_teaching %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row">
    {% for teaching in categorized_teaching %}
    <div class="col-12 col-md-6 mb-4">
      {% include teaching.liquid %}
    </div>
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}
<!-- Display teaching without categories -->
{% assign sorted_teaching = site.teaching | sort: "date" | reverse %}

  <!-- Generate cards for each teaching item -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for teaching in sorted_teaching %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row">
    {% for teaching in sorted_teaching %}
    <div class="col-12 col-md-6 mb-4">
      {% include teaching.liquid %}
    </div>
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<style>
  .teaching .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    padding: 1.5rem;
    box-sizing: border-box;
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
    margin-bottom: 1rem;
  }
  
  .teaching .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
  
  .teaching .col-md-6 {
    padding-left: 15px;
    padding-right: 15px;
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
  }
  
  .teaching .category:first-of-type {
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .teaching .row {
      margin-left: -0.5rem;
      margin-right: -0.5rem;
    }
    .teaching .col {
      padding: 0 0.5rem;
    }
  }
</style>
