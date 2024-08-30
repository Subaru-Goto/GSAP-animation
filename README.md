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
  - with params: gsap.to(el, { onComplete: onCompleteFunc, onCompleteParams: [param1, param2.....]})
  - function onComplete() { console.log(this.targets()[0])}; to get an element info, callback is scope to the tween
  - scope can be changed by callbackScope
    ```javascript
    class Fred {
      constructor() {
        this.animation = gsap.to(".fred", { ..., onComplete: onComplete, callbackScope: this });
        this.message = "I am fred"

        function onComplete() {
          console.log(this.message);
        }
      }
    }

    const f = new Fred();

    // this becomes from tween to Fred class which enable us to access to all the property the class has.
    ```
  - many more callbacks:  onRepeat, onReverseComplete, onStart, onUpdate


- 3D effect
  - rotationY & X & setting perspective value to wrapper or container will make it 3D animation effect
  - transformOrigin to change the center & you can also add transformOrigin: "50% 50%, -400" z value for making space from the center for example.

- immediateRender
  - from and fromTo has "immediateRender" set to true by defautl.
  - It means that the from properties are rendered immediately.
  - It can be useful when you have multiple from or fromTo tweens on the same properties of the same element.

- quickSetter
  - gsap.quickSetter("element", "property")
  - Provides a highly optimized way to repeatedly set a single property on an element.
  - When you need to set the same property on an element frequently, such as in a loop or during an animation.

- scrub / scrollTrigger
  - enable use to control the progress of animation by scrolling





