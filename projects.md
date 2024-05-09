---
layout: page
title: "Projects"
---

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 py-8">
{% assign sorted_projects = site.data.projects | sort: 'date' | reverse %}
{% for project in sorted_projects %}
<div>
<a href="{{ project.link }}" class="block mb-1">{{ project.title }}</a>
 <p>{{ project.description }} {% if project.date %}<span class="text-gray-400"> &mdash;&nbsp;{{ project.date | date: "%B %Y" }}</span>{% endif %}</p>
 </div>
{% endfor %}
</div>
