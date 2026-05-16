---
layout: page
title: Projects
permalink: /projects/
description: 
  The Centre for neXt Communications represents the latest stage in a long-term research vision led by Professor Özgür B. Akan.

  The journey began at the Next-generation and Wireless Communications Laboratory (NWCL) at Middle East Technical University (METU), where foundational work was carried out in wireless sensor networks, cognitive radio, and next-generation wireless systems.

  As communication research expanded toward pervasive connectivity, the vision evolved into the Internet of Everything research direction at Cambridge and Koç University. This stage broadened the scope from connecting devices to connecting humans, processes, data, biological entities, autonomous systems, and intelligent environments.

  Today, CXC reflects the next evolution of this vision. While the label “Internet of Everything” has become industry standard, our work now extends beyond connected systems to the deeper scientific question of communication itself. CXC explores how information is exchanged across Molecular, Quantum, Biological, and Space domains, moving from the connection of “things” toward the understanding of communication as a fundamental process in nature.
nav: true
nav_order: 3
display_categories: [Current, Previous]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
