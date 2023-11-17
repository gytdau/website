---
layout: page
title: "Gytis Daujotas - Posts"
---

{% for post in site.posts %}

<li>
    <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
