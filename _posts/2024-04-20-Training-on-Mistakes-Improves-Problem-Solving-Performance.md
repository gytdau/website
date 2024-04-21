---
layout: post
title: "Training on Mistakes Improves Problem Solving Performance"
tags: technical
---

<p class="c12">
  <span class="c1">Even rather limited problem solvers gain generality when they get the ability to correct their own mistakes. This is particularly interesting as the nature of autoregressive sampling makes it difficult to edit text that&#39;s already written, and much of the training data comes from finished and well-edited artifacts. Can model problem solving performance improve if it was trained on examples of mistakes and their corrections? And how does this relate to the inherent difficulty of the problem in question?</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span>To investigate this problem, I trained a toy maze-solving model that was allowed to backtrack on itself. I found that the </span>
  <span class="c6">maze solving performance improved</span>
  <span class="c1">&nbsp;when errors and their corrections were injected into the paths of otherwise perfect solutions. I show that the probability of moving in the correct direction improves at decision points when mistakes are allowed.</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span class="c1">This post shows that, even in training data where some of the moves are going away from the goal, the model effectively learns to effectively correct previous decisions and solve mazes more effectively..</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span class="c1">I then investigated some of the world models in this fallible maze solving model. Future work could investigate the implications of this work for dataset filtering on problem-solving tasks, introducing synthetic errors into existing datasets, and finding ways to lever down the mistake making intention.</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<h2 class="c11" id="h.cjg4dr4jvvd7">
  <span class="c28">Setup</span>
</h2>
<p class="c12">
  <span class="c1">I rained a small 10 million parameter model to output solutions for square mazes between 3 and 9 tiles wide. At the core of the experiment, there were two datasets:</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<ol class="c23 lst-kix_r6ejw9kgq9j7-0 start" start="1">
  <li class="c8 li-bullet-0">
    <span class="c1">The oracle dataset, which unfailingly solves the maze every time in the shortest path. </span>
  </li>
  <li class="c8 li-bullet-0">
    <span class="c1">The fallible dataset, which, like the oracle, goes directly to the end. However, at every junction point, there is a 20% chance of making the wrong decision. Each time it makes the wrong decision, it immediately backtracks and continues on the path.</span>
  </li>
</ol>
<p class="c0 c21">
  <span class="c1"></span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span style="
      overflow: hidden;
      display: inline-block;
      margin: 0px 0px;
      border: 0px solid #000000;
      transform: rotate(0rad) translateZ(0px);
      -webkit-transform: rotate(0rad) translateZ(0px);
      width: 520.5px;
      height: 268.81px;
    ">
    <img alt="" src="/assets/mazegpt/image8.png" style="
        width: 520.5px;
        height: 268.81px;
        margin-left: 0px;
        margin-top: 0px;
        transform: rotate(0rad) translateZ(0px);
        -webkit-transform: rotate(0rad) translateZ(0px);
      " title="" />
  </span>
</p>
<p class="c12">
  <span>I serialized mazes with a pretty simple scheme, without doing anything fancier (like serializing with a space filling curve, or serializing spans as </span>
  <span class="c19">
    <a class="c4" href="https://www.google.com/url?q=https://arxiv.org/abs/2312.02566&amp;sa=D&amp;source=editors&amp;ust=1713644371647268&amp;usg=AOvVaw0gCnP6K-NvoAvfHe3eG3q6">in this paper</a>
  </span>
  <span>, which I found unnecessary</span>
  <span class="c1">):</span>
</p>
<p class="c12">
  <span style="
      overflow: hidden;
      display: inline-block;
      margin: 0px 0px;
      border: 0px solid #000000;
      transform: rotate(0rad) translateZ(0px);
      -webkit-transform: rotate(0rad) translateZ(0px);
      width: 522.5px;
      height: 177.13px;
    ">
    <img alt="" src="/assets/mazegpt/image1.png" style="
        width: 522.5px;
        height: 177.13px;
        margin-left: 0px;
        margin-top: 0px;
        transform: rotate(0rad) translateZ(0px);
        -webkit-transform: rotate(0rad) translateZ(0px);
      " title="" />
  </span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<h1 class="c26" id="h.bhl51d6dhrjw">
  <span class="c13">Performance</span>
</h1>
<h2 class="c11" id="h.rnh72f9dfkgs">
  <span class="c28">Behavior on decision points</span>
</h2>
<p class="c12">
  <span class="c1">Let&rsquo;s look at model behavior by investigating a point where both models were not confident about which direction was next. As a case study to prime intuition, at this decision point, both models were ~70% confident in the directly correct move, and we can analyze what happens in the other ~30% of the time. </span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<a id="t.2aed2e9e781ab4df86e8dd284acb677e00adf26b"></a>
<a id="t.0"></a>
<table class="c34">
  <tr class="c25">
    <td class="c3" colspan="1" rowspan="2">
      <p class="c10">
        <span class="c1">Board state</span>
      </p>
    </td>
    <td class="c31" colspan="2" rowspan="1">
      <p class="c20">
        <span class="c18">Next move predictions</span>
      </p>
    </td>
  </tr>
  <tr class="c25">
    <td class="c15" colspan="1" rowspan="1">
      <p class="c10">
        <span class="c1">Oracle model </span>
      </p>
    </td>
    <td class="c15" colspan="1" rowspan="1">
      <p class="c10">
        <span class="c1">Fallible model</span>
      </p>
    </td>
  </tr>
  <tr class="c16">
    <td class="c24" colspan="1" rowspan="1">
      <p class="c10">
        <span class="c9 c6">Decision point</span>
      </p>
      <p class="c10 c27">
        <span class="c1"></span>
      </p>
      <p class="c10">
        <span style="
            overflow: hidden;
            display: inline-block;
            margin: 0px 0px;
            border: 0px solid #000000;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
            width: 256.39px;
            height: 196.59px;
          ">
          <img alt="" src="/assets/mazegpt/image10.png" style="
              width: 256.39px;
              height: 196.59px;
              margin-left: 0px;
              margin-top: 0px;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
            " title="" />
        </span>
      </p>
    </td>
    <td class="c17" colspan="1" rowspan="1">
      <p class="c12">
        <span style="
            overflow: hidden;
            display: inline-block;
            margin: 0px 0px;
            border: 0px solid #000000;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
            width: 153.6px;
            height: 184.32px;
          ">
          <img alt="" src="/assets/mazegpt/image7.png" style="
              width: 153.6px;
              height: 184.32px;
              margin-left: 0px;
              margin-top: 0px;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
            " title="" />
        </span>
      </p>
    </td>
    <td class="c17" colspan="1" rowspan="1">
      <p class="c12">
        <span style="
            overflow: hidden;
            display: inline-block;
            margin: 0px 0px;
            border: 0px solid #000000;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
            width: 153.6px;
            height: 184.32px;
          ">
          <img alt="" src="/assets/mazegpt/image11.png" style="
              width: 153.6px;
              height: 184.32px;
              margin-left: 0px;
              margin-top: 0px;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
            " title="" />
        </span>
      </p>
    </td>
  </tr>
  <tr class="c29">
    <td class="c33" colspan="1" rowspan="1">
      <p class="c10">
        <span class="c6 c9">After making a mistake</span>
      </p>
      <p class="c10 c27">
        <span class="c1"></span>
      </p>
      <p class="c10">
        <span style="
            overflow: hidden;
            display: inline-block;
            margin: 0px 0px;
            border: 0px solid #000000;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
            width: 256.39px;
            height: 196.59px;
          ">
          <img alt="" src="/assets/mazegpt/image5.png" style="
              width: 256.39px;
              height: 196.59px;
              margin-left: 0px;
              margin-top: 0px;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
            " title="" />
        </span>
      </p>
    </td>
    <td class="c30" colspan="1" rowspan="1">
      <p class="c12">
        <span style="
            overflow: hidden;
            display: inline-block;
            margin: 0px 0px;
            border: 0px solid #000000;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
            width: 153.6px;
            height: 184.32px;
          ">
          <img alt="" src="/assets/mazegpt/image9.png" style="
              width: 153.6px;
              height: 184.32px;
              margin-left: 0px;
              margin-top: 0px;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
            " title="" />
        </span>
      </p>
      <p class="c0">
        <span class="c1"></span>
      </p>
    </td>
    <td class="c30" colspan="1" rowspan="1">
      <p class="c12">
        <span style="
            overflow: hidden;
            display: inline-block;
            margin: 0px 0px;
            border: 0px solid #000000;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
            width: 153.6px;
            height: 184.32px;
          ">
          <img alt="" src="/assets/mazegpt/image4.png" style="
              width: 153.6px;
              height: 184.32px;
              margin-left: 0px;
              margin-top: 0px;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
            " title="" />
        </span>
      </p>
    </td>
  </tr>
</table>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span class="c1">Because our metric for correctness does not penalize backtracking, we can see here that the fallible model actually goes on to determine the correct backtracking move, while the oracle model remains confident in moving forward. This example (though rather weak evidence) suggests the model not only learns to effectively backtrack when it&#39;s wrong, but also by implication learns to judge from its current inferred position as to whether or not it&#39;s on the wrong path, using the extra token as extra space to think.</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<h2 class="c11" id="h.u2g973doz7gq">
  <span class="c28">Benchmark performance</span>
</h2>
<p class="c12">
  <span class="c1">It might not be obvious why a model trained on the fallible dataset would perform better at solving mazes, because while it learns to correct its errors, it also learns to make mistakes as well. It seems plausible that these two effects would cancel out, and you&rsquo;d have a model no better (or even slightly worse) than the oracle model.</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span class="c1">To test this, I constructed a benchmark where both models generated solutions for 2000 mazes, which were then checked for correctness. A solution was correct if it got to the end and didn&#39;t cheat by going through any walls.</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span style="
      overflow: hidden;
      display: inline-block;
      margin: 0px 0px;
      border: 0px solid #000000;
      transform: rotate(0rad) translateZ(0px);
      -webkit-transform: rotate(0rad) translateZ(0px);
      width: 475.5px;
      height: 383.37px;
    ">
    <img alt="" src="/assets/mazegpt/image2.png" style="
        width: 475.5px;
        height: 383.37px;
        margin-left: 0px;
        margin-top: 0px;
        transform: rotate(0rad) translateZ(0px);
        -webkit-transform: rotate(0rad) translateZ(0px);
      " title="" />
  </span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span class="c1">Surprisingly, I found the fallible model performed better, even when I varied the model size by changing the layers:</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span style="
      overflow: hidden;
      display: inline-block;
      margin: 0px 0px;
      border: 0px solid #000000;
      transform: rotate(0rad) translateZ(0px);
      -webkit-transform: rotate(0rad) translateZ(0px);
      width: 560.5px;
      height: 346.38px;
    ">
    <img alt="" src="/assets/mazegpt/image3.png" style="
        width: 560.5px;
        height: 346.38px;
        margin-left: 0px;
        margin-top: 0px;
        transform: rotate(0rad) translateZ(0px);
        -webkit-transform: rotate(0rad) translateZ(0px);
      " title="Maze solving ability - correctness" />
  </span>
</p>
<p class="c12">
  <span>This indicates that </span>
  <span class="c6">the fallible model has a consistent performance advantage</span>
  <span class="c1">, even though you could imagine many reasons this should not be true (the generated paths are longer and more confusing, the training data moves are occasionally going the wrong way and so the objective signal is more noisy, etc).</span>
</p>
<h1 class="c26" id="h.mgxf0xp9o3ug">
  <span class="c13">Probing the residual stream</span>
</h1>
<p class="c12">
  <span class="c1">I thought it was interesting to try to probe the residual stream to see how much of the world model it already understood. You can also read this paper for more comprehensive work, but I sort of just followed my interests here. </span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span>What I thought was very neat was how mistakes were not actually linearly represented in the residual stream. I trained a linear probe that couldn&#39;t pick it up, but a nonlinear probe with a simple ReLU could pick it up easily. This indicates that </span>
  <span class="c6">while this information is in the residual stream somewhere, it&#39;s not in a linear representation</span>
  <span class="c1">. </span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span class="c1">So it could be, for instance, a conjunction of various facts or something like that. This is somewhat disappointing, because I was hoping to use this linear feature to control the probability of making a mistake, and it would have been so cool to have had a fallible maze solving model that had a mistake making probability of 0. </span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span class="c1">But the nonlinear probe did actually work, and so here&#39;s some heat maps of how it responds to moving an endpoint around:</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<h3 class="c7" id="h.w8ibkxgdon3c">
  <span style="
      overflow: hidden;
      display: inline-block;
      margin: 0px 0px;
      border: 0px solid #000000;
      transform: rotate(0rad) translateZ(0px);
      -webkit-transform: rotate(0rad) translateZ(0px);
      width: 653.9px;
      height: 903.82px;
    ">
    <img alt="" src="/assets/mazegpt/image6.png" style="
        width: 653.9px;
        height: 903.82px;
        margin-left: 0px;
        margin-top: 0px;
        transform: rotate(0rad) translateZ(0px);
        -webkit-transform: rotate(0rad) translateZ(0px);
      " title="" />
  </span>
</h3>
<p class="c0">
  <span class="c1"></span>
</p>
<p class="c12">
  <span>Another technique to try would have been to use a sparse autoencoder, but these </span>
  <span class="c19">
    <a class="c4" href="https://www.google.com/url?q=https://www.lesswrong.com/posts/BduCMgmjJnCtc7jKc/&amp;sa=D&amp;source=editors&amp;ust=1713644371655195&amp;usg=AOvVaw2aWbR7zIdw37wdXAY_Ss7y">seem to have problems of their own.</a>
  </span>
  <span>&nbsp;The next technique I&rsquo;ll use is to post this on the internet so that a Neel Nanda-like figure could, in a weekend, tell me how I was totally wrong and I was </span>
  <span class="c19">
    <a class="c4" href="https://www.google.com/url?q=https://www.neelnanda.io/mechanistic-interpretability/othello&amp;sa=D&amp;source=editors&amp;ust=1713644371655594&amp;usg=AOvVaw0BafVd2XCYu-WE_dFKsprQ">just thinking about what a feature could be wrong</a>
  </span>
  <span>.</span>
</p>
<p class="c0">
  <span class="c1"></span>
</p>
<h1 class="c26" id="h.v2s63le5kv1c">
  <span class="c13">Next steps</span>
</h1>
<ul class="c23 lst-kix_u30o58cthhmd-0 start">
  <li class="c8 li-bullet-0">
    <span>I still find it pretty interesting that using an extra token, in this case a wrong move, actually improves the overall performance. </span>
    <span class="c6">Can more specific testing be performed to figure out what goes in the extra token to observe the &ldquo;doubt&rdquo;? </span>
  </li>
  <li class="c8 li-bullet-0">
    <span class="c6">Can this be generalized to non-turn-based problem solving?</span>
    <span class="c1">&nbsp;This probably requires more understanding of how models think and how to wield the tools of mechanistic interpretability more effectively.</span>
  </li>
  <li class="c8 li-bullet-0">
    <span class="c6">Can mathematical reasoning be improved this way?</span>
    <span class="c1">&nbsp;This sort of marking of incorrect and incorrect moves is currently pretty constrained to problems solved through discrete moves. Mathematical reasoning seems like a particularly good candidate for this intervention!</span>
  </li>
</ul>
<p class="c0">
  <span class="c1"></span>
</p>
<h2 class="c2" id="h.2bjj038xf3fk">
  <span class="c28"></span>
</h2>
<p class="c0">
  <span class="c1"></span>
</p>
