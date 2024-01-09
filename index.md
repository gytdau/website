---
layout: page
title: "Gytis Daujotas"
---

Hi! I live in San Francisco. I'm currently working at AtoB, a financial infrastructure startup for logistics. I previously interned at AWS and Stripe.

[Bookshelf](/books) / [Contact](mailto:gytdau@gmail.com)

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
