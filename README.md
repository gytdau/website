# website

My personal website. [Look at it on the web.](http://gytis.co)

Now celebrating Version 3.0! This time: no templates. Pure, hand-built, eblow-greased, coffee-induced, tailor-made artisinal code. Of the highest rarity.

## Notes

This version contains floating UI elements. To take a UI element from a website, add `id="capture"` in the Inspector to the element you want to save, then run:

```js
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'script.js';
script.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(script);

html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});
```
and at the bottom of the page, a new element will appear - save that.

