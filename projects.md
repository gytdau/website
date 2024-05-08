---
layout: page
title: "Gytis Daujotas - Projects"
---

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8 py-8">
{% for project in site.data.projects %}
<div>
<a href="{{ project.link }}">{{ project.title }}</a>
 <p>{{ project.description }}</p>
 </div>
{% endfor %}
</div>
