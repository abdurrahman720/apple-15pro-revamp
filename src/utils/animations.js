import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsapTimeline = (
  tl,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  tl.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  tl.to(firstTarget, {
    //large: view1(small) to translateX = -100 ;pushing the small one to the left also
    //small: view2(large) to translateX = 0 ;pushing the large one to the original position (absolute -100)
    ...animationProps,
    ease: "power2.inOut",
  });

  tl.to(secondTarget, {
    //large: view2(large) to translateX = -100 ; pushing the large one to the left also
    //small: view1(small) to translateX = 0 ;pushing the small one to the original position (absolute 0)
    ...animationProps,
    ease: "power2.inOut",
  });
};

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
