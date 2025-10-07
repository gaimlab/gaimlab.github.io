---
layout: page
permalink: /people/
title: people
description: Our team, categorized by role. Click a card to see details.
nav: true
nav_order: 7

# Populate these lists with your members. Images should live in assets/img/
faculty:
  - name: Sajjad Amini
    university: Sharif University of Technology
    department: Electrical Engineering
    links:
    - label: Email
      url: mailto:s_amini@sharif.edu 
phd:
  - name: Mohammad Eshtehardian
    image: mohammad.jpg
    university: Sharif University of Technology
    department: Electrical Engineering
    bio: PhD student focusing on generative modeling and trustworthy ML.
    content: about_mohammad.md
    links:
      - label: Email
        url: mailto:m.eshtehardian@yahoo.com
msc:
  - name: Mohammad Hossein Momeni Hamaneh
    image: mohammadhossein.jpg
    university: Sharif University of Technology
    department: Electrical Engineering
    bio: MSc student working on robust learning and RL.
    content: about_mohammadhossein.md
    links:
      - label: Email
        url: mailto:momenihamaneh1381@gmail.com
bsc: []
collaborators: []
---
<div id="people-page">
  {% if page.faculty and page.faculty.size > 0 %}
  <section class="people-section">
    <h2>Faculty</h2>
    <div class="grid" data-category="faculty">
      {% for p in page.faculty %}
      <article class="person-card" tabindex="0">
        <div class="person-media">
          {% if p.image %}
            {% assign img_path = p.image | prepend: 'assets/img/' %}
            {% include figure.liquid path=img_path alt=p.name class='img-fluid z-depth-1 rounded' loading='lazy' cache_bust=true %}
          {% endif %}
        </div>
        <div class="person-header">
          <h3 class="person-name">{{ p.name }}</h3>
          <p class="person-meta">{{ p.university }}{% if p.department %} · {{ p.department }}{% endif %}</p>
          <div class="actions">
            {% if p.links %}
              {% assign email = p.links | where: "label", "Email" | first %}
              {% if email %}<a class="btn btn-sm btn-secondary" href="{{ email.url }}">Email</a>{% endif %}
            {% endif %}
            {% if p.content %}
              {% capture content_path %}/people/{{ p.name | downcase | replace: ' ', '-' }}/{% endcapture %}
              <a class="btn btn-sm" href="{{ content_path | relative_url }}">See more</a>
            {% endif %}
          </div>
        </div>
        <div class="person-details" id="details-faculty-{{ forloop.index }}">
          {% if p.bio %}<p>{{ p.bio }}</p>{% endif %}
          {% if p.links %}
          <div class="links">
            {% for l in p.links %}
              <a class="btn btn-sm" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  {% if page.phd and page.phd.size > 0 %}
  <section class="people-section">
    <h2>PhD</h2>
    <div class="grid" data-category="phd">
      {% for p in page.phd %}
      <article class="person-card" tabindex="0">
        <div class="person-media">
          {% if p.image %}
            {% assign img_path = p.image | prepend: 'assets/img/' %}
            {% include figure.liquid path=img_path alt=p.name class='img-fluid z-depth-1 rounded' loading='lazy' cache_bust=true %}
          {% endif %}
        </div>
        <div class="person-header">
          <h3 class="person-name">{{ p.name }}</h3>
          <p class="person-meta">{{ p.university }}{% if p.department %} · {{ p.department }}{% endif %}</p>
          <div class="actions">
            {% if p.links %}
              {% assign email = p.links | where: "label", "Email" | first %}
              {% if email %}<a class="btn btn-sm btn-secondary" href="{{ email.url }}">Email</a>{% endif %}
            {% endif %}
            {% if p.content %}
              {% capture content_path %}/people/{{ p.name | downcase | replace: ' ', '-' }}/{% endcapture %}
              <a class="btn btn-sm" href="{{ content_path | relative_url }}">See more</a>
            {% endif %}
          </div>
        </div>
        <div class="person-details" id="details-phd-{{ forloop.index }}">
          {% if p.bio %}<p>{{ p.bio }}</p>{% endif %}
          {% if p.links %}
          <div class="links">
            {% for l in p.links %}
              <a class="btn btn-sm" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  {% if page.msc and page.msc.size > 0 %}
  <section class="people-section">
    <h2>MSc</h2>
    <div class="grid" data-category="msc">
      {% for p in page.msc %}
      <article class="person-card" tabindex="0">
        <div class="person-media">
          {% if p.image %}
            {% assign img_path = p.image | prepend: 'assets/img/' %}
            {% include figure.liquid path=img_path alt=p.name class='img-fluid z-depth-1 rounded' loading='lazy' cache_bust=true %}
          {% endif %}
        </div>
        <div class="person-header">
          <h3 class="person-name">{{ p.name }}</h3>
          <p class="person-meta">{{ p.university }}{% if p.department %} · {{ p.department }}{% endif %}</p>
          <div class="actions">
            {% if p.links %}
              {% assign email = p.links | where: "label", "Email" | first %}
              {% if email %}<a class="btn btn-sm btn-secondary" href="{{ email.url }}">Email</a>{% endif %}
            {% endif %}
            {% if p.content %}
              {% capture content_path %}/people/{{ p.name | downcase | replace: ' ', '-' }}/{% endcapture %}
              <a class="btn btn-sm" href="{{ content_path | relative_url }}">See more</a>
            {% endif %}
          </div>
        </div>
        <div class="person-details" id="details-msc-{{ forloop.index }}">
          {% if p.bio %}<p>{{ p.bio }}</p>{% endif %}
          {% if p.links %}
          <div class="links">
            {% for l in p.links %}
              <a class="btn btn-sm" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  {% if page.bsc and page.bsc.size > 0 %}
  <section class="people-section">
    <h2>BSc</h2>
    <div class="grid" data-category="bsc">
      {% for p in page.bsc %}
      <article class="person-card" tabindex="0">
        <div class="person-media">
          {% if p.image %}
            {% assign img_path = p.image | prepend: 'assets/img/' %}
            {% include figure.liquid path=img_path alt=p.name class='img-fluid z-depth-1 rounded' loading='lazy' cache_bust=true %}
          {% endif %}
        </div>
        <div class="person-header">
          <h3 class="person-name">{{ p.name }}</h3>
          <p class="person-meta">{{ p.university }}{% if p.department %} · {{ p.department }}{% endif %}</p>
          <div class="actions">
            {% if p.links %}
              {% assign email = p.links | where: "label", "Email" | first %}
              {% if email %}<a class="btn btn-sm btn-secondary" href="{{ email.url }}">Email</a>{% endif %}
            {% endif %}
            {% if p.content %}
              {% capture content_path %}/people/{{ p.name | downcase | replace: ' ', '-' }}/{% endcapture %}
              <a class="btn btn-sm" href="{{ content_path | relative_url }}">See more</a>
            {% endif %}
          </div>
        </div>
        <div class="person-details" id="details-bsc-{{ forloop.index }}">
          {% if p.bio %}<p>{{ p.bio }}</p>{% endif %}
          {% if p.links %}
          <div class="links">
            {% for l in p.links %}
              <a class="btn btn-sm" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  {% if page.collaborators and page.collaborators.size > 0 %}
  <section class="people-section">
    <h2>Collaborators</h2>
    <ul class="collaborators">
      {% for name in page.collaborators %}
        <li>{{ name }}</li>
      {% endfor %}
    </ul>
  </section>
  {% endif %}
</div>

<style>
  #people-page .people-section { margin-bottom: 2rem; }
  #people-page .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
  @media (max-width: 992px) { #people-page .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 576px) { #people-page .grid { grid-template-columns: 1fr; } }

  #people-page .person-card {
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,.04);
    padding: .8rem;
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease;
    outline: none;
  }
  #people-page .person-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.08); }
  #people-page .person-card:focus { box-shadow: 0 0 0 3px rgba(79,70,229,.25); }

  #people-page .person-media { text-align: center; margin-bottom: .6rem; }
  #people-page .person-media img { max-height: 140px; width: auto; display: inline-block; }
  #people-page .person-header { text-align: center; }
  #people-page .person-name { margin: 0; font-size: 1.05rem; }
  #people-page .person-meta { margin: .2rem 0 0; color: #555; font-size: .9rem; }
  #people-page .person-header .actions { margin-top: .5rem; display: inline-flex; gap: .4rem; }
  #people-page .person-details { display: none; margin-top: .6rem; }
  #people-page .links { display: flex; gap: .4rem; flex-wrap: wrap; }
  #people-page .btn.btn-sm { padding: .35rem .6rem; font-size: .85rem; border-radius: 8px; background: var(--accent, #4f46e5); color: #fff; text-decoration: none; }
  #people-page .see-more-btn { margin-top: .5rem; padding: .35rem .6rem; font-size: .85rem; border-radius: 8px; border: 1px solid rgba(0,0,0,.1); background: #f7f7f7; cursor: pointer; }

  #people-page .collaborators { margin: 0; padding-left: 1.1rem; }
</style>

<script></script>
