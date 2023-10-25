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

- Crossing the fractal edge of knowledge is qualitatively different than working within it
  - If human knowledge is truly fractal, then it sometimes has pinch points which open up an entire new space to explore
  - Great discoveries are great because they are like this
  - It's worth paying attention to the obsessed and the crazy
- Massive input can beat spaced repetition
  - Sometimes learning is done best by volume (writing a lot of code, reading a lot of stuff)
  - Reading a lot of books is a good way to do this
  - True of surprisingly many domains

---

**Lists I'm keeping:**

<ul>
  {% for post in site.lists %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

**Some of my posts:**

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
