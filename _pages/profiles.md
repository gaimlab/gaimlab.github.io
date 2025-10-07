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
  #people-page .grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    align-items: stretch;
  }
  @media (max-width: 992px) { 
    #people-page .grid { 
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1.25rem;
    } 
  }
  @media (max-width: 576px) { 
    #people-page .grid { 
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    #people-page .person-card {
      padding: 1rem;
    }
  }

  #people-page .person-card {
    border: 1px solid var(--global-divider-color, rgba(0,0,0,.08));
    border-radius: 12px;
    background: var(--global-card-bg-color, #fff);
    color: var(--global-text-color, #000);
    box-shadow: 0 2px 10px var(--global-shadow-color, rgba(0,0,0,.04));
    padding: 1.25rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  #people-page .person-card:hover { 
    transform: translateY(-3px); 
    box-shadow: 0 6px 18px var(--global-shadow-hover, rgba(0,0,0,.1));
    border-color: var(--global-theme-color, #4f46e5);
  }
  #people-page .person-card:focus { 
    box-shadow: 0 0 0 3px var(--global-theme-color, rgba(79,70,229,.25)); 
  }

  #people-page .person-media { 
    text-align: center; 
    margin-bottom: 1rem;
    flex-shrink: 0;
  }
  #people-page .person-media img { 
    max-height: 140px; 
    width: auto; 
    max-width: 100%;
    height: auto;
    display: inline-block;
    border-radius: 6px;
    object-fit: cover;
  }
  #people-page .person-header { 
    text-align: center;
    margin-bottom: 1rem;
    flex-grow: 1;
  }
  #people-page .person-name { 
    margin: 0; 
    font-size: 1.1rem;
    color: var(--global-theme-color, #4f46e5);
    font-weight: 600;
  }
  #people-page .person-meta { 
    margin: 0.25rem 0 0; 
    color: var(--global-text-muted, #6c757d); 
    font-size: 0.9rem; 
  }
  #people-page .person-header .actions { 
    margin-top: 1rem; 
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  #people-page .person-details { 
    display: none; 
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--global-divider-color, rgba(0,0,0,.08));
  }
  #people-page .links { 
    display: flex; 
    gap: 0.5rem; 
    flex-wrap: wrap;
    justify-content: center;
  }
  #people-page .btn.btn-sm { 
    padding: 0.4rem 0.8rem; 
    font-size: 0.85rem; 
    border-radius: 6px; 
    background-color: var(--global-theme-color, #4f46e5);
    color: var(--global-hover-text-color, #fff);
    text-decoration: none;
    border: none;
    transition: all 0.2s ease;
  }
  #people-page .btn.btn-sm:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  #people-page .see-more-btn { margin-top: .5rem; padding: .35rem .6rem; font-size: .85rem; border-radius: 8px; border: 1px solid rgba(0,0,0,.1); background: #f7f7f7; cursor: pointer; }

  #people-page .collaborators { margin: 0; padding-left: 1.1rem; }
</style>

<script></script>
