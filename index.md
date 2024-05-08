---
layout: page
title: "Gytis Daujotas"
---

I'm a technical generalist living in San Francisco. I'm currently building financial infrastructure for logistics at AtoB, and I also previously interned at AWS and Stripe. I'm also an [Emergent Ventures](https://newscience.org/emergent-ventures-winners/) grant recipient. I moved to SF from Dublin in 2023 on an O1A visa.

## Technical

<div class="flex-row">
{% for item in site.data.projects %}
 <div class="flex-item">
    <a href="{{ item.link }}" class="no-decoration">
      <img src="{{ item.image }}" alt="Placeholder" class="image-placeholder">
    </a>
    <div class="description">
      <a href="{{ item.link }}">
        {{item.title}}
      </a>
      <div class="no-decoration">{{ item.description }}</div>
    </div>
 </div>
{% endfor %}
</div>

[See more on my Github...](https://github.com/gytdau)

## Writing

<ul>
{% for post in site.posts %}
<li>
 <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
<a href="/posts">See all posts...</a>

---

[Contact me here](mailto:gytdau@gmail.com)
