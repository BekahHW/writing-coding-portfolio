import React from 'react'

.parent: {

  display: grid,

  grid - template - columns: 1fr 1fr 1fr 1fr 1fr,

  grid - template - rows: 1fr 1fr 1fr 1fr 1fr,

  grid - column - gap: 0px,

  grid - row - gap: 0px,

.div1: { grid - area: 1 / 1 / 2 / 2 },

.div2: { grid - area: 1 / 2 / 2 / 3 },

}


const About = () => (
  <div className="parent">
  <div className="div1">image</div>
  <div className="div2"><h1>About</h1>
  <p>After working as an adjunct English teacher for ten years, I experienced a trauma while having my fourth kid. After major surgery, I found coding calmed the trauma that was going on in my head. I could focus on the errors, on creating, on learning. I was hooked. So I left my adjunct position and with the Facebook + Flatiron Emerging Scholars Scholarship attended and completed Flatiron School Bootcamp.</p>
  <p>My favorite parts of learning to code have been the problem-solving and community (as I also have a background in community organizing).</p>
  </div>
    </div>
)

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default About 