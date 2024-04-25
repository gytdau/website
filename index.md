---
layout: page
title: "Gytis Daujotas"
---

Hi! I'm Gytis.

- I received an [Emergent Ventures](https://newscience.org/emergent-ventures-winners/) grant to, among other things, make books first class citizens of the web. I'm no longer convinced this is so important, but I still love to read -- check out my [book list.](/lists/books.html)
- In 2023, in pursuit of better weather, economic growth, and refining my skill in software craftsmanship, I moved from Dublin to San Francisco on an O1A visa.
- I'm currently building financial infrastructure for logistics at AtoB, and I also previously interned at AWS and Stripe.

### Lists

- [Books](/lists/books.html)
- [Long term relationships](/lists/Long_term_relationships.html)
- [Social technologies](/lists/Social_technologies.html)

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
