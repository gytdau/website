---
layout: home
title: "Gytis Daujotas"
---

<div class="home-grid">

<div class="bio gap-4 flex flex-col">
<h2>
Hi! I'm a technical generalist living in San Francisco. I'm currently building financial infrastructure for logistics at AtoB, and I previously interned at AWS and Stripe. I'm also an <a href="https://newscience.org/emergent-ventures-winners/">Emergent Ventures</a> grant recipient. I moved from windy Dublin, Ireland to SF in 2023 on an O1A visa.
</h2>
</div>
<div class="projects">
<div class="flex flex-col gap-4 pb-6">
{% for item in site.data.projects %}
{% if item.featured %}
    <div class="flex gap-2 flex-row md:flex-col">
    <div>
    <img src="{{ item.image }}" alt="{{ item.title }}" class="image-placeholder">
    </div>
    <div>
    <h3>
      <a href="{{ item.link }}">
        {{item.title}}
      </a>
      </h3>
      <div class="no-decoration">{{ item.description }}</div>
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>

<h3>
<a href="/projects">See more...</a>
</h3>

</div>
<div class="blog">

<h2>Writing</h2>

<ul class="flex flex-col gap-4 pt-6 pb-6">
{% for post in site.posts %}
<li>
 <a href="{{ post.url }}">{{ post.title }}</a>
 <p>{{ post.date | date: "%B %d, %Y" }}</p>
</li>
{% endfor %}
</ul>
<h3><a href="/posts">See all posts...</a></h3>

</div>

</div>
