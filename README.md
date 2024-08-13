# GSAP-animation

# Tween
A Tween is an animation that transitions an element from one state to another over a specified duration.
  - to
  - from
  - fromTo

# Timeline
A Timeline is a container for mltiple tweens.


# Note
- yPercent, xPercent: moving to/from y x and y, you can say xPercent: 100 which means 100% width of an element.

- position param in timeline: "+=1" start 1 second after the previous tween ends
  "<" start at the beginning of the previous tween.
  "0, 1, 2.... int value"_ absolute position, start at the given time.
  ""
- bezier:pointOfPath, pointOfPath = [{x:0, y:0}, {x:50, y:100}, {x:300, y:20}, {x:400, y:200}, {x:500, y:0}]


- getter & setter in GSAP ex...
  - animation.pause() // pause animations
  - animation.paused(true) // setter, set the pause state to trues
  - animation.paused() // getter, get paused state

  - animation.proress() // getter, get progress
  - animation.progress(1) // setter, set progrrss to done

  - animation.time() // set time or get time 
  -animation.duration() // set time or get duration
  animation.timeScale() // set time or get play speed, timeScale(2) is 2x as fast
  - animation.reversed() // set time or get reverse state

- callback function
  - onComplete: () => {} // triggers when an animation completes



