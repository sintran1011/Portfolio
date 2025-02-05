/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { useLottie } from "lottie-react";
import { useEffect, useRef } from "react";
import data from "../../../../public/Loading.json";

const options = {
  animationData: data,
  loop: false,
};

const Loading = () => {
  const { View } = useLottie(options);
  const iconLoadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 2.5 });

      const blockElements = document.querySelectorAll(".blockElement");

      timeline.to(blockElements, {
        y: -window.innerHeight - 100,
        duration: 2.3,
        ease: "power4.out",
        stagger: 0.08,
      });

      if (iconLoadingRef.current) {
        gsap.to(iconLoadingRef.current, {
          y: -150,
          opacity: 0,
          duration: 2,
          ease: "power4.out",
          delay: 2.4,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="grid w-full grid-cols-4 items-center justify-center">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="blockElement col-span-1 h-screen w-full bg-[#212121]"
        ></div>
      ))}
      <div className="absolute-center absolute h-[120px] w-[120px] overflow-hidden">
        <div ref={iconLoadingRef} className="h-[120px] w-[120px]">
          {View}
        </div>
      </div>
    </div>
  );
};

export default Loading;
