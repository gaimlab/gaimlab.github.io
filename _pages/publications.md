---
layout: page
title: Publications
permalink: /publications/
description: Publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->
{% if site.bib_search %}
  {% include bib_search.liquid %}
{% endif %}

<div class="publications">
  {% bibliography %}
</div>
