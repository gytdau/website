---
layout: default
---

# Gytis Daujotas

Hi! I live in San Francisco. I'm currently working at AtoB, a financial infrastructure startup for logistics. I previously interned at AWS and Stripe.

[Bookshelf](/books)

[Github](https://github.com/gytdau)

Email me here: [gytdau@gmail.com](mailto:gytdau@gmail.com)

---

**Some beliefs:**

- Breaking through 'pinch points' in knowledge is qualitatively different than other kinds of work
  - If human knowledge is truly fractal, then it sometimes has [pinch points](https://en.wikipedia.org/wiki/Mandelbrot_set#/media/File:Mandelbrot_Set_%E2%80%93_Periodicities_coloured.png) which open up an entire new space to explore
  - Great discoveries are great because they are like this
  - It's worth paying attention to the obsessed and the crazy
- Massive input can beat spaced repetition
  - Sometimes learning is done best by volume (writing a lot of code, reading a lot of stuff)
  - Reading a lot of books is a good way to do this
  - True of surprisingly many domains

---

**Some of my posts:**

<ul>
  {% for post in site.posts limit:3 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<a href="/posts">See all posts</a>

**Lists I'm keeping:**

<ul>
  {% for post in site.lists %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
