---
layout: post
title: "In the Wild West of Crypto Scams"
tags: technical
---

For a wild period in cryptocurrency history, it was possible to find free money everywhere, if only one knew where to look. It was also possible, of course, for this free money to be illusory. Enter the scam known as a “pump and dump”.

In normal times, it goes like this. I convince you to buy a lot of something that has a small market cap, by telling you how this is a great idea and the product is a breakthrough. Then, my cronies and I will dump all of our holdings at the new, inflated price, and leave you - or someone like you - with worthless shares. You will then never hear from me again.

A crypto pump and dump, though, was different. Groups with ridiculous names like “Diamond Hand Pumps” popped up, and people were so moved by this that they voluntarily joined. They were told upfront the date and time of the next event where everyone gets a “buy signal”, jacks up the price, and sells a few minutes later. But this time you had the allure of selling it on to other suckers, of trying your luck and standing a chance of getting very rich.

![Discord messages of a typical pump and dump event](/assets/crypto/discord.png "image_tooltip"){:class="img-responsive"}

<p align="center"><i>Do not sell! Do not sell!</i></p>

It was an odd form of gambling in public - a sudden momentous frenzy where gamblers exchanged fortunes with each other, like a high-speed game of hot potato. The price quickly inflated to 3x-5x. Then, as people started selling, the price plummeted, leaving the losers with tokens worth much less than what they bought it for.

Let’s look at a chart of raw order data for one of these pumps:

![Annotated chart of order data](/assets/crypto/chart.png "image_tooltip"){:class="img-responsive"}

Here you can see the “pre-pump”, the organizer buy in, and the flurry of activity on a previously dormant order book. In less than a minute, crypto worth hundreds of thousands of dollars were traded before it all collapsed back close to the original price.

One of the first adaptations of this ecosystem were bots that automatically bought whatever was in the announcement message. Because this disgruntled well-capitalized participants, many servers changed to using images instead:

![Set of images of buy signals](/assets/crypto/signals.png "image_tooltip"){:class="img-responsive"}

<p align="center"><i>Signals becoming CAPTCHA-like to fool OCR</i></p>

A focused human presses keys surprisingly fast (~300ms) in comparison to OCR services, which took two seconds to detect the text in the images. This was clearly nowhere near fast enough to compete. Dedicated machines with a GPU fared slightly better, cutting out the round trip and taking about ~800ms to parse -- still about four times too long for comfort.

What else can we do to constrain the problem? We know that, since groups pick one exchange to trade on, the symbol had to be one of the ~300 that the exchange traded.

If we were willing to get our hands dirty, we can train an object detection model instead, for which there are much faster architectures. Because we're training it from scratch, we need many more examples than the few dozen that the servers preserve in their history. So it was time to create a synthetic dataset - and a big one.

![Generated set of images of buy signals](/assets/crypto/generated.png "image_tooltip"){:class="img-responsive"}

Getting a model to understand a narrow subset of the Latin alphabet, without it being able to know how to read, is hard. It needed distortions, a library of a thousand fonts, false positives, and an increasing amount of static. In the end, there was about ~30gb of training data of warped, compressed, and blurred ticker symbols.

It’s exciting when money is on the line, and minor differences in optimisation matter. After weeks of generating, training, and tweaking, the model came in at 200ms to detect the symbol from the image, a large improvement over humans.

This was verifiably faster than the bulk of the historical trades in the order book.Here’s how the model performance now looked on a zoomed-in view of the chart:

![Chart displaying a 200ms delay from the release of signal](/assets/crypto/chart2.png "image_tooltip"){:class="img-responsive"}

This was plenty close fast enough to out-run the herd and buy first, picking up the difference in price. I frantically double-checked every chart and benchmarked the object detection performance, and was ready to bring the model to trial.[^3] Just at that moment, the market entered a downturn and the price of every coin was -- unsurprisingly, in hindsight -- extremely correlated and dropped in lockstep.

This scheme only works if everyone believes that all the other suckers are bought in. So when a streak of tough pumps performed poorly and confidence was shattered, groups shut down quickly.[^4]

I never was quite able to test the algorithm live in the free market. But the excitement of having skin in the game, and facing a challenge purely technical in nature, was fertile ground for learning a lot about benchmarking, ML, and networking in a very short amount of time. You can learn anything when there’s money on the line. [^2]

[^2]: To test the model, I ordered $1 worth of random tokens, and promptly forgot. I checked my normally-empty Binance account a few months later, and was surprised that one of the dozen throw-away purchases, CHILI, went up 1000x. It just goes to show the exuberant state of the market at the time -- it was hard to lose even when you were trying.
[^3]: Part of this was evaluating every server in Google Cloud to find that they were in Japan, as well as a very confusing set of interactions with a Google Cloud rep where they kept increasing my quota, but instead increasing some entirely irrelevant quota instead of what I asked for. I am told the Google Cloud situation has not improved.
[^4]: This was also a time when these groups started getting mainstream and [academic attention](https://www.youtube.com/watch?v=3hD6y6Ylwf0).
