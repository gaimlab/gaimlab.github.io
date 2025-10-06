---
layout: page
title: teaching
permalink: /teaching/
description: A collection of courses I have taught at various institutions.
nav: true
nav_order: 6
---

<div class="teaching">
  <!-- Display categorized teaching -->
  <h2 class="category">Graduate Courses</h2>
  <div class="grid">
    {% assign sorted_teaching = site.teaching | where: "category", "Graduate" | sort: "date" | reverse %}
    {% for teaching in sorted_teaching %}
      {% include teaching.liquid %}
    {% endfor %}
  </div>

  <h2 class="category">Undergraduate Courses</h2>
  <div class="grid">
    {% assign sorted_teaching = site.teaching | where: "category", "Undergraduate" | sort: "date" | reverse %}
    {% for teaching in sorted_teaching %}
      {% include teaching.liquid %}
    {% endfor %}
  </div>
</div>

<style>
  .teaching .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .teaching .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  .teaching .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .teaching .card-text {
    font-size: 0.9rem;
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
  }
  .teaching .icon a:hover {
    color: #212529;
  }
</style>
