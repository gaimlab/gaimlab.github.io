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
    image: sajjad.jpg
    university: Sharif University of Technology
    department: Electronics Research Institute
    content: about_sajjad.md
    links:
    - label: Email
      url: mailto:s-amini@sharif.edu 
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
  #people-page .people-section { 
    margin-bottom: 3rem;
  }
  #people-page .grid { 
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
  #people-page .person-card {
    flex: 0 0 calc(33.333% - 30px);
    margin: 0 15px 30px;
  }
  @media (max-width: 992px) { 
    #people-page .person-card {
      flex: 0 0 calc(50% - 30px);
    }
  }
  @media (max-width: 768px) { 
    #people-page .grid {
      margin: 0 -10px;
    }
    #people-page .person-card {
      flex: 0 0 calc(50% - 20px);
      margin: 0 10px 20px;
    }
  }
  @media (max-width: 576px) { 
    #people-page .grid {
      margin: 0;
    }
    #people-page .person-card {
      flex: 0 0 100%;
      margin: 0 0 20px;
    }
  }

  #people-page .person-card {
    border: 1px solid var(--global-divider-color, rgba(0,0,0,.08));
    border-radius: 12px;
    background: var(--global-card-bg-color, #fff);
    color: var(--global-text-color, #000);
    box-shadow: 0 2px 10px var(--global-shadow-color, rgba(0,0,0,.04));
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }
  #people-page .person-card:hover { 
    transform: translateY(-5px); 
    box-shadow: 0 12px 24px var(--global-shadow-hover, rgba(0,0,0,.1));
    border-color: var(--global-theme-color, #4f46e5);
  }
  #people-page .person-card:hover .person-media img {
    transform: scale(1.05);
  }
  #people-page .person-card:focus { 
    box-shadow: 0 0 0 3px var(--global-theme-color, rgba(79,70,229,.25)); 
  }

  #people-page .person-media { 
    text-align: center; 
    margin: -1.5rem -1.5rem 1rem -1.5rem;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    min-height: 180px;
  }
  #people-page .person-media img { 
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 0;
    transition: transform 0.3s ease;
    padding: 1rem;
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

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Make cards clickable
    const cards = document.querySelectorAll('.person-card');
    
    cards.forEach(card => {
      // Find the 'See more' button within this card
      const seeMoreBtn = card.querySelector('.btn:not(.btn-secondary)');
      
      // If there's a 'See more' button, make the card clickable
      if (seeMoreBtn && seeMoreBtn.href) {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
          // Don't trigger if clicking on links or buttons inside the card
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
            return;
          }
          window.location.href = seeMoreBtn.href;
        });
        
        // Add hover effect to indicate clickability
        card.addEventListener('mouseenter', function() {
          this.style.boxShadow = '0 6px 18px var(--global-shadow-hover, rgba(0,0,0,.1))';
          this.style.borderColor = 'var(--global-theme-color, #4f46e5)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.boxShadow = '0 2px 10px var(--global-shadow-color, rgba(0,0,0,.04))';
          this.style.borderColor = 'var(--global-divider-color, rgba(0,0,0,.08))';
        });
      }
    });
  });
</script>
