import React from 'react';

const styles = {

  main {
    /*    outline: 1px dotted #ccc; */
    width: calc(100 % * var(--venn - width - mult));
margin: 0 auto;
}

: root {
  --venn - width - mult: 0.9;
}

@media print {
  : root {
    --venn - width - mult: 1;
  }
}

/* Defaults for browsers that do not support shape-outside */
@media(min - width: 800px) {
  .Venn2:: after {
    content: "";
    display: block;
    width: 1px;
    height: 1px;
    clear: both;
  }

  .circle,
  .shape {
    box - sizing: border - box;
    border: 0.1em solid rgba(0, 0, 0, 0.5);
    margin: 0 0.75 %;
    padding: 0 1.5em;
    float: left;
    width: 48 %;
  }

  .circle.one {
    margin - left: 0;
  }

  .circle.two {
    margin - right: 0;
  }

  .shape {
    width: 60 %;
    margin: 1em 18.75 %;
  }

  .shape.onetwo {
    clear: left;
    border - top - left - radius: 1em;
    border - top - right - radius: 1em;
  }
}

@supports(shape - outside: polygon(0 0, 0 50 %, 50 % 50 %)) {
  .Venn2:: after {
    display: none;
  }

  .Venn2 > div {
    box - sizing: border - box;
    border: 0.1em solid rgba(0, 0, 0, 0.5);
    font - size: calc(2.5vw * var(--venn - width - mult));
    line - height: 1.3;
    overflow: hidden;
  }

  .Venn2 > .shape {
    font - size: calc(2.25vw * var(--venn - width - mult));
    border: initial;
    width: initial;
    margin: initial;
    padding: initial;
  }

  .Venn2 > .circle {
    border - radius: 50 %;
    width: initial;
    margin: initial;
    padding: initial;
  }

  /* Grid layout  */
  .Venn2 {
    display: grid;
    grid - template - columns: repeat(3, 1fr);
    grid - template - rows: repeat(2, calc(32vw * var(--venn - width - mult)));
  }

  .Venn2 > h2 {
    grid - column - start: 1;
    grid - column - end: 6;
    grid - row - start: 0;
    grid - row - end: 1;
  }

  .Venn2 > .circle.one {
    /*   outline: .2em solid #f00; */
    grid - column - start: 1;
    grid - column - end: 3;
    grid - row - start: 1;
    grid - row - end: 3;
  }

  .Venn2 > .circle.two {
    /*   outline: .2em solid #0f0; */
    grid - column - start: 2;
    grid - column - end: 4;
    grid - row - start: 1;
    grid - row - end: 3;
  }

  .Venn2 > .shape.onetwo {
    /*   outline: .2em solid #ff0; */
    grid - column - start: 2;
    grid - column - end: 3;
    grid - row - start: 1;
    grid - row - end: 3;
  }

  /* Text wrap */
  .Venn2.circle,
  .Venn2.shape {
    text - align: center;
  }
  .Venn2.circle span,
  .Venn2.shape span {
    box - sizing: border - box;
    float: right;
    /*     border: 1px dotted #00f;
    background-color: rgba(0,0,0,.1); */
  }
  .Venn2.circle > span,
  .Venn2.shape > span {
    width: calc(64vw * var(--venn - width - mult));
    height: calc(64vw * var(--venn - width - mult));
  }
  .Venn2.one > span {
    float: left;
    width: 48 %;
    shape - margin: 0;
    shape - outside: polygon(
      100 % 0 %,
      0 % 0 %,
      0 % 100 %,
      100 % 100 %,
      75 % 96 %,
      47 % 90 %,
      25 % 80 %,
      12 % 70 %,
      5 % 60 %,
      3 % 50 %,
      5 % 40 %,
      12 % 30 %,
      25 % 20 %,
      47 % 10 %,
      75 % 4 %
    );
  }
  .Venn2.one > span + span {
    float: right;
    width: 52 %;
    shape - outside: polygon(
      100 % 0 %,
      20 % 0 %,
      40 % 7 %,
      26 % 15 %,
      12 % 25 %,
      5 % 35 %,
      1 % 45 %,
      0 % 50 %,
      1 % 55 %,
      5 % 65 %,
      12 % 75 %,
      26 % 85 %,
      40 % 93 %,
      20 % 100 %,
      100 % 100 %
    );
  }
  .Venn2.two > span {
    float: left;
    width: 52 %;
    shape - margin: 0;
    shape - outside: polygon(
      0 % 0 %,
      80 % 0 %,
      60 % 7 %,
      74 % 15 %,
      88 % 25 %,
      95 % 35 %,
      99 % 45 %,
      100 % 50 %,
      99 % 55 %,
      95 % 65 %,
      88 % 75 %,
      74 % 85 %,
      60 % 93 %,
      80 % 100 %,
      0 % 100 %
    );
  }
  .Venn2.two > span + span {
    float: right;
    width: 48 %;
    shape - outside: polygon(
      0 % 0 %,
      100 % 0 %,
      100 % 100 %,
      0 % 100 %,
      25 % 96 %,
      53 % 90 %,
      75 % 80 %,
      88 % 70 %,
      95 % 60 %,
      97 % 50 %,
      95 % 40 %,
      88 % 30 %,
      75 % 20 %,
      53 % 10 %,
      25 % 4 %
    );
  }
  .Venn2.onetwo > span {
    float: left;
    width: 49 %;
    shape - margin: 0;
    shape - outside: polygon(
      0 % 0 %,
      100 % 0 %,
      100 % 10 %,
      70 % 15 %,
      36 % 25 %,
      18 % 35 %,
      7 % 50 %,
      18 % 65 %,
      36 % 75 %,
      70 % 85 %,
      100 % 90 %,
      100 % 100 %,
      0 % 100 %
    );
  }
  .Venn2.onetwo > span + span {
    float: right;
    shape - outside: polygon(
      100 % 0 %,
      0 % 0 %,
      0 % 10 %,
      30 % 15 %,
      64 % 25 %,
      82 % 35 %,
      97 % 50 %,
      83 % 65 %,
      64 % 75 %,
      30 % 85 %,
      0 % 90 %,
      0 % 100 %,
      100 % 100 %
    );
  }
  .Venn2.circle h3 {
    margin: 0.5em 0 0 0;
    text - align: center;
  }
  .Venn2.circle h3 + * {
    margin- top: 0.2em;
}
  .Venn2.shape h3 {
  clip - path: inset(100 %);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  white - space: nowrap;
}
}

/* Show the boxes */
.Venn2.guides > .circle.one {
  outline: 0.2em solid #f00;
}
.Venn2.guides > .circle.two {
  outline: 0.2em solid #0f0;
}
.Venn2.guides > .shape.onetwo {
  outline: 0.2em solid #ff0;
}
.Venn2.guides.circle span,
.Venn2.guides.shape span {
  border: 1px dotted #000;
  background - color: rgba(0, 0, 0, 0.1);
}
.Venn2.guides > div {
  border: 0.1em solid rgba(0, 0, 0, 0.5);
}
}


<main>
  <h1>CSS Grid and Shape-Outside Venn Diagram</h1>
  <p>
    I have a whole blog post on this: <cite><a href="http://adrianroselli.com/2018/12/a-css-venn-diagram.html">A CSS Venn Diagram</a></cite>
  </p>
  <article class="Venn2">
    <h2>Stock Model</h2>
    <div class="circle one">
      <span></span>
      <span></span>
      <h3>One</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis magna erat, eget condimentum metus faucibus eget. Sed venenatis sem dui, quis faucibus nibh pretium a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada mattis
        ligula, a vulputate nibh porttitor eu. Morbi tempus dolor sed lectus gravida, id convallis ipsum convallis. Cras nec pharetra est, nec finibus lectus. Donec pulvinar ipsum arcu, sit amet pulvinar augue luctus quis.
            </p>
    </div>
    <div class="circle two">
      <span></span>
      <span></span>
      <h3>Writing</h3>
      <p>
        I love all forms of writing, but what I've done a lot of lately is memoir, screenplays and pilots, and blogging about my coding journey.
            </p>
    </div>
    <div class="shape onetwo">
      <span></span>
      <span></span>
      <h3>Coding</h3>
      <p>
        I enjoy working on projects that make the world a better place.
            </p>
    </div>
  </article>
</main>


export default withStyles(styles)(VennDiagram);
