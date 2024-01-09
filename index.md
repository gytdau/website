---
layout: page
title: "Gytis Daujotas"
---

Hi! I live in San Francisco. I'm currently working at AtoB, a financial infrastructure startup for logistics. I previously interned at AWS and Stripe.

[Bookshelf](/books) / [Contact](mailto:gytdau@gmail.com)

## Technical

- [System Synthesis](http://systemsynthesis.app) - _Learn the soft skill of writing good docs_
- [On the GPU Memory Hierarchy](/2023/12/29/On-the-GPU-Memory-Hierarchy.html)

[See more on my Github...](https://github.com/gytdau)

## Writing

{% assign filtered_posts = "" | split: "" %}
{% for post in site.posts %}
{% unless post.tags contains 'technical' %}
{% assign filtered_posts = filtered_posts | push: post %}
{% endunless %}
{% endfor %}
{% assign final_posts = filtered_posts | slice: 0, 3 %}

<ul>
{% for post in final_posts %}
 <li>
   <a href="{{ post.url }}">{{ post.title }}</a>
 </li>
{% endfor %}
</ul>

<a href="/posts">See all posts...</a>
