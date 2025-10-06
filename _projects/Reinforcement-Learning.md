---
layout: page
title: Reinforcement Learning
description: Projects on Reinforcement Learning
tags: [Reinforcement Learning]
img: assets/img/Reinforcement.png
importance: 1
category: work
---

# About

Our research in Reinforcement Learning (RL) focuses on developing advanced algorithms that enable intelligent agents to learn optimal behaviors through interaction with their environment. We explore both theoretical foundations and practical applications of RL across various domains, including robotics, game playing, and autonomous systems.

Key areas of investigation include:
- Deep reinforcement learning and policy optimization
- Multi-agent reinforcement learning
- Hierarchical and meta reinforcement learning
- Offline and batch reinforcement learning
- Safe and robust reinforcement learning
- Transfer learning and generalization in RL
- Applications in robotics, healthcare, and autonomous systems

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
    <h3 class="people-title">Collaborators</h3>
    <ul class="people-list">
      <li class="person">
        <i class="fas fa-handshake person-icon"></i>
        <span class="person-name">Borna Khodabandeh</span>
      </li>
      <li class="person">
        <i class="fas fa-handshake person-icon"></i>
        <span class="person-name">Amirabbas Afzali</span>
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
  {% bibliography -f papers -q @*[keywords ~= reinforcement]* %}
</div>
