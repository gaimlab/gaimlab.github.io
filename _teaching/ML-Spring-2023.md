---
title: "Introduction to Machine Learning"
collection: teaching
type: "Undergraduate Course"
layout: teaching
permalink: /teaching/ML-Spring-2023
venue: "Sharif University of Technology"
semester: "Spring 2023"
description: "An introductory course covering fundamental machine learning algorithms including classification, regression, decision trees, and clustering, with hands-on implementation and applications."
date: 2023-01-01
img: assets/img/IML.png
location: "Tehran, Iran"
category: "Undergraduate"
---

<div id="course-page">
  <section class="course-intro">
    <p>An introductory course covering fundamental machine learning algorithms including classification, regression, decision trees, and clustering, with hands-on implementation and applications.</p>
    <div class="meta-grid">
      <div class="meta-item"><span class="label">Semester</span><span class="value">{{ page.semester }}</span></div>
      <div class="meta-item"><span class="label">Credits</span><span class="value">3</span></div>
      <div class="meta-item"><span class="label">Location</span><span class="value">{{ page.location }}</span></div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Information</h2>
    <div class="info-cards">
      <div class="info-card"><span class="label">Instructor</span><span class="value">Sajjad Amini</span></div>
      <div class="info-card"><span class="label">Lectures</span><span class="value">3 hours per week</span></div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Prerequisites</h2>
    <ul class="checklist">
      <li>Probability and Statistics</li>
      <li>Linear Algebra</li>
    </ul>
  </section>

  <section class="section">
    <h2 class="section-title">Topics Covered</h2>
    <div class="pill-list">
      <span>Foundation</span>
      <span>Supervised Learning</span>
      <span>Unsupervised Learning</span>
    </div>
    <ul class="topics">
      <li>Introduction</li>
      <li>Probability (Univariate, Multivariate)</li>
      <li>Statistics</li>
      <li>Decision Theory</li>
      <li>Optimization</li>
      <li>Linear/Logistic Regression</li>
      <li>Neural Networks</li>
      <li>Exemplar-Based and Kernel Methods</li>
      <li>Trees, Bagging, Forest, Boosting</li>
      <li>Dimensionality Reduction</li>
      <li>Clustering</li>
    </ul>
  </section>

  <section class="section">
    <h2 class="section-title">Grading</h2>
    <div class="grading">
      <table>
        <thead><tr><th>Component</th><th>Weight</th></tr></thead>
        <tbody>
          <tr><td>Assignments</td><td>30%</td></tr>
          <tr><td>Midterm Exam</td><td>20%</td></tr>
          <tr><td>Final Project</td><td>30%</td></tr>
          <tr><td>Final Exam</td><td>20%</td></tr>
          <tr><td>Participation</td><td>5%</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Resources</h2>
    <div class="resources">
      <p><strong>Main Textbook:</strong> Murphy, K. P. (2022). Probabilistic Machine Learning: An Introduction. MIT Press.</p>
      <p><strong>Additional Reading:</strong> Barber, D. (2012). Bayesian Reasoning and Machine Learning. Cambridge University Press.</p>
      <p>Additional materials and lecture notes will be provided throughout the course.</p>
    </div>
  </section>
</div>

<style>
  #course-page { margin-top: .5rem; }
  #course-page .course-intro .meta-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: .5rem; margin-top: .5rem; }
  @media (max-width: 768px) { #course-page .course-intro .meta-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
  #course-page .meta-item { background: #fff; border: 1px solid rgba(0,0,0,.06); border-radius: 10px; padding: .6rem .75rem; box-shadow: 0 2px 8px rgba(0,0,0,.03); }
  #course-page .meta-item .label { display: block; font-size: .8rem; color: #666; }
  #course-page .meta-item .value { font-weight: 600; }

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

  #course-page .pill-list { display: flex; flex-wrap: wrap; gap: .4rem; margin: .5rem 0 .75rem; }
  #course-page .pill-list span { background: rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.08); border-radius: 999px; padding: .3rem .6rem; font-size: .9rem; white-space: nowrap; }

  #course-page .topics { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: .35rem .75rem; margin: .25rem 0 .75rem; padding-left: 0; }
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
