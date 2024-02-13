---
layout: page
title: "Gytis Daujotas"
---

Hi! I'm Gytis.

- I won an EV grant from Tyler Cowen in 2021.
- In 2023, in pursuit of better weather, economic growth, and refining my skill in software craftsmanship, I moved from Dublin to San Francisco on an O1A visa.
- I'm currently building financial infrastructure for logistics at AtoB, and I also previously interned at AWS and Stripe.
- I spend a lot of my time reading, writing, and creating a large variety of software projects.

### Lists

- [Books](/lists/books.html)
- [Long term relationships](/lists/Long_term_relationships.html)
- [Social technologies](/lists/Social_technologies.html)

## Technical

<div>
 <div style="margin-bottom: 1.5em;">
   <a href="http://systemsynthesis.app">System Synthesis</a>
   <p>Learn the soft skill of writing good docs</p>
 </div>
 <div style="margin-bottom: 1.5em;">
   <a href="/2023/12/29/On-the-GPU-Memory-Hierarchy.html">On the GPU Memory Hierarchy</a>
   <p>A guide to the interesting parts</p>
 </div>
 <div style="margin-bottom: 1.5em;">
   <a href="/2024/01/09/The-wild-west-of-crypto.html">In the Wild West of Crypto Scams</a>
   <p>On front-running the scammers</p>
 </div>
</div>

[See more on my Github...](https://github.com/gytdau)

## Writing

<ul>
{% for post in site.posts %}
{% if post.tags contains 'favourite' %}
<li>
 <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
<a href="/posts">See all posts...</a>

---

[Contact me here](mailto:gytdau@gmail.com)
