---
layout: page
title: "Gytis Daujotas - Posts"
---

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8 py-8">
{% for post in site.posts %}
<div>
<a href="{{ post.url }}">{{ post.title }}</a>
 <p>{{ post.date | date: "%B %d, %Y" }}</p>
 </div>
{% endfor %}
</div>
