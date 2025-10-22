---
layout: page
permalink: /publications/
title: publications
description: Publications of the IoE Group.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->


{% include bib_search.liquid %}

<div class="publications">
  {%- capture pubs -%}
    {% bibliography --group_by none --sort_by year,month,day --order descending %}
  {%- endcapture -%}

  {{ pubs | replace: '<ol class="bibliography">', '<ol class="bibliography" reversed>' }}
</div>