---
layout: home
title: "Gytis Daujotas"
---

<div class="home-grid">

<div class="bio gap-4 flex flex-col">
<h2>
Hi, I am a technical generalist. I like making computers do stuff and want to be very good at it.
</h2>
<p>
I am very happy to be alive. I care deeply about alleviating human frustration with shitty software or bad craft. Most theories of impact underrate the commonplace and the beautiful, and undervalue obsession with doing the basic stuff well.
</p>
<p>
In 2023, I moved from Dublin, Ireland to San Francisco. I'm currently building financial infrastructure for logistics at AtoB, and I previously interned at Stripe. I'm also an <a href="https://newscience.org/emergent-ventures-winners/">Emergent Ventures</a> grant recipient.
</p>
<p>
You can email me here: <a href="mailto:gytdau@gmail.com">gytdau@gmail.com</a>.
</p>
</div>

<div class="projects">
<div class="flex flex-col gap-4 pb-6">
{% for item in site.data.projects %}
{% if item.featured %}
    <div class="flex gap-2 flex-row md:flex-col">
    <a href="{{ item.link }}">
      <img src="{{ item.image }}" alt="{{ item.title }}" class="image-placeholder">
    </a>
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

<ul class="list-none flex flex-col gap-4 pt-6 pb-6">
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
