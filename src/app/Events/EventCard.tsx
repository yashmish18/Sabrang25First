"use client";

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

interface EventProps {
  event: {
    title: string;
    image: string;
    description?: string;
    date?: string;
    prize?: string;
    registration?: string;
  };
  outline?: 'gold' | 'silver';
}

export default function EventCard({ event, outline }: EventProps) {
  if (!event) return null;

  // Gradient border classes
  let borderGradient = '';
  if (outline === 'gold') borderGradient = 'bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600';
  else if (outline === 'silver') borderGradient = 'bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400';

  return (
    <div className={cn('relative p-2 rounded-2xl group card-border-gradient', borderGradient)}>
      <div className="w-96 h-[32rem] bg-black rounded-xl p-6 relative z-10 flex flex-col overflow-hidden">
        <CardContainer className="inter-var">
          <CardBody className="w-full h-full bg-transparent p-0">
            <CardItem
              translateZ={120}
              className="text-3xl font-extrabold text-white mb-2 font-['Playfair_Display']"
            >
              {event.title}
            </CardItem>
            <CardItem
              translateZ={100}
              className="text-lg font-normal text-white mb-4 font-['Playfair_Display']"
            >
              {event.description}
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <img
                src={event.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={event.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={60}
                as="a"
                href="/Homepage.tsx"
                className="text-base font-bold text-white font-['Playfair_Display']"
              >
                {event.date} →
              </CardItem>
              <CardItem
                translateZ={60}
                as="a"
                href="/Signup"
                className="px-6 py-2 rounded-xl bg-white text-black text-base font-bold font-['Playfair_Display'] shadow"
              >
                {event.registration || "Register Now"}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      <style jsx>{`
        .group:hover.card-border-gradient,
        .group:focus.card-border-gradient {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
}