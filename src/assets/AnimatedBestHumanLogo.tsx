// src/assets/AnimatedBestHumanLogo.tsx
import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import gsap from 'gsap';
import { LogoSvg } from './LogoSvg'; // Import the separated SVG component

export function AnimatedBestHumanLogo(props: BoxProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const logoElement = logoRef.current?.querySelector('#besthuman-logo');
      if (!logoElement) return;

      const mainLogoParts = gsap.utils.toArray<SVGPathElement>('.main-logo-part', logoElement);
      const stars = gsap.utils.toArray<SVGPathElement>('.star', logoElement);
      
      const computedStyle = getComputedStyle(document.documentElement);
      const brandPink = computedStyle.getPropertyValue('--p-theme-500').trim();
      const darkGrey = computedStyle.getPropertyValue('--color-text-primary').trim();
      const desaturatedPink = "hsl(349, 20%, 50%)";

      const ANIM_PARAMS = {
        rampDuration: 0.5, yAmplitude: 8, phaseOffset: 0.2, lightnessOsc: 5,
        stars: [ { rotSpeed: 6, oscSpeed: 10 }, { rotSpeed: 7, oscSpeed: 10 }, { rotSpeed: 8, oscSpeed: 10 } ]
      };

      let exitTweens: gsap.core.Tween[] = [];
      // CORRECTED: Use const for variables that are not reassigned
      const starRotationTweens: gsap.core.Tween[] = [];
      let colorTween: gsap.core.Tween;
      let colorRampInTl: gsap.core.Timeline;
      const motionProxy = { amplitude: 0 };
      let oscillationTicker: (time: number) => void;

      function buildAnimations() {
        stars.forEach((star, i) => {
          const rotDuration = (11 - ANIM_PARAMS.stars[i].rotSpeed) / 2;
          const rotationTween = gsap.to(star, {
            rotation: 360, duration: rotDuration, repeat: -1, ease: 'none', paused: true
          });
          starRotationTweens.push(rotationTween);
        });

        const baseLightness = 58;
        // CORRECTED: Use const for variables that are not reassigned
        const colorProxy = { lightness: baseLightness };
        colorTween = gsap.to(colorProxy, {
          lightness: baseLightness + ANIM_PARAMS.lightnessOsc,
          repeat: -1, yoyo: true, paused: true, duration: 1.5, ease: 'sine.inOut',
          onUpdate() {
            const newFill = `hsl(349, 87%, ${colorProxy.lightness}%)`;
            gsap.set([...mainLogoParts, ...stars], { fill: newFill });
          }
        });

        oscillationTicker = (time) => {
          stars.forEach((star, i) => {
            const oscSpeed = (11 - ANIM_PARAMS.stars[i].oscSpeed) * 2;
            const wave = Math.sin(time * oscSpeed + (i * ANIM_PARAMS.phaseOffset * 10));
            const yPos = wave * motionProxy.amplitude;
            gsap.set(star, { y: yPos });
          });
        };
      }

      const handleMouseEnter = () => {
        exitTweens.forEach(t => t.kill());
        exitTweens = [];
        gsap.killTweensOf(motionProxy);
        if (colorRampInTl) colorRampInTl.kill();

        colorRampInTl = gsap.timeline({ onComplete: () => { colorTween.play(0) } });
        colorRampInTl
          .to(mainLogoParts, { fill: desaturatedPink, duration: ANIM_PARAMS.rampDuration * 0.4, ease: 'power1.in' })
          .to([...mainLogoParts, ...stars], { fill: `hsl(349, 87%, 58%)`, duration: ANIM_PARAMS.rampDuration * 0.6, ease: 'power1.out' });

        starRotationTweens.forEach(tween => tween.play());
        
        gsap.ticker.add(oscillationTicker);
        gsap.to(motionProxy, {
          amplitude: ANIM_PARAMS.yAmplitude, duration: ANIM_PARAMS.rampDuration, ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        if (colorRampInTl) colorRampInTl.kill();

        gsap.killTweensOf(motionProxy);
        colorTween.pause();
        starRotationTweens.forEach(tween => tween.pause());

        exitTweens.push(gsap.to(mainLogoParts, { fill: darkGrey, duration: ANIM_PARAMS.rampDuration, ease: 'power2.out' }));
        exitTweens.push(gsap.to(motionProxy, {
          amplitude: 0, duration: ANIM_PARAMS.rampDuration, ease: 'power2.out',
          onComplete: () => gsap.ticker.remove(oscillationTicker)
        }));

        stars.forEach((star) => {
          const currentRotation = gsap.getProperty(star, "rotation") as number;
          const targetRotation = (Math.floor(currentRotation / 90) + 1) * 90;
          exitTweens.push(gsap.to(star, {
            rotation: targetRotation + "_cw", fill: brandPink, duration: ANIM_PARAMS.rampDuration, ease: 'power2.out'
          }));
        });
      };

      gsap.set(stars, { y: 0, rotation: 0, transformOrigin: "50% 50%" });
      gsap.set(mainLogoParts, { fill: darkGrey });
      gsap.set(stars, { fill: brandPink });
      
      buildAnimations();
      logoElement.addEventListener('mouseenter', handleMouseEnter);
      logoElement.addEventListener('mouseleave', handleMouseLeave);

    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    // VISIBILITY FIX: Apply styles to the child SVG to make it fill the Box
    <Box ref={logoRef} {...props} sx={{
      ...props.sx, // Pass through existing sx props
      '& svg': {
        width: '100%',
        height: '100%',
        display: 'block', // Good practice for responsive SVGs
      }
    }}>
      <LogoSvg />
    </Box>
  );
}