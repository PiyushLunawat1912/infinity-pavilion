// import React, { useEffect, useRef } from "react";

// const HeroSection: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const isMobile = window.innerWidth < 768;

//   /* -------- SUBTLE PARALLAX (DESKTOP ONLY) -------- */
//   useEffect(() => {
//     if (isMobile) return;

//     const onScroll = () => {
//       if (!videoRef.current) return;
//       const offset = Math.min(window.scrollY * 0.05, 24);
//       videoRef.current.style.transform = `translateY(${offset}px) scale(1.05)`;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isMobile]);

//   return (
//     <section
//       id="home"
//       aria-label="Infinity Pavilion luxury event venue"
//       className="relative flex items-center justify-center min-h-screen overflow-hidden"
//     >
//       {/* BACKGROUND MEDIA */}
//       {isMobile ? (
//         /* MOBILE FALLBACK IMAGE */
//         <img
//           src="/hero-poster.jpg"
//           alt="Infinity Pavilion luxury venue"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         // <video
//         //   ref={videoRef}
//         //   src="hero-video.mp4"
//         //   autoPlay
//         //   loop
//         //   muted
//         //   playsInline
//         //   preload="auto"
//         //   aria-hidden="true"
//         //   className="absolute inset-0 w-full h-full object-cover hero-video"
//         // />
//       ) : (
//         /* DESKTOP VIDEO */
//         <video
//           ref={videoRef}
//           src="hero-video.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           aria-hidden="true"
//           className="absolute inset-0 w-full h-full object-cover hero-video"
//         />
//       )}

//       {/* OVERLAY */}
//       <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

//       {/* CONTENT */}
//       <div className="relative z-10 text-center px-6 max-w-[820px]">
//         <h1 className="hero-eyebrow reveal delay-1">
//           Luxury Wedding & Event Venue
//         </h1>

//         <h1 className="hero-title reveal delay-2">
//           Infinity Pavilion
//         </h1>

//         <div className="hero-divider reveal delay-3" />

//         <p className="hero-desc reveal delay-4">
//           A refined luxury space for weddings, receptions, corporate events,
//           and private celebrations — crafted with elegance, warmth,
//           and timeless beauty.
//         </p>
//       </div>

//       {/* STYLES */}
//       <style>{`
//         .hero-video {
//           filter: brightness(0.85) contrast(1.1) saturate(1.15);
//           animation: slowZoom 36s ease-in-out infinite alternate;
//         }

//         @keyframes slowZoom {
//           from { transform: scale(1); }
//           to { transform: scale(1.06); }
//         }

//         .hero-overlay {
//           background: linear-gradient(
//             to bottom,
//             rgba(0,0,0,0.45),
//             rgba(0,0,0,0.22)
//           );
//         }

//         .hero-eyebrow {
//           color: #D9A441;
//           font-size: 11px;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           margin-bottom: 6px;
//         }

//         .hero-title {
//           font-family: "Playfair Display", serif;
//           font-size: clamp(2.4rem, 7vw, 3.6rem);
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.05;
//           letter-spacing: 0.03em;
//           margin: 0;
//           text-shadow:
//             0 6px 22px rgba(0,0,0,0.55),
//             0 12px 36px rgba(0,0,0,0.65);
//         }

//         .hero-divider {
//           width: 80px;
//           height: 3px;
//           margin: 12px auto;
//           border-radius: 999px;
//           background: linear-gradient(90deg,#D9A441,#EDD79A);
//         }

//         .hero-desc {
//           font-size: 16px;
//           line-height: 1.6;
//           color: rgba(255,255,255,0.95);
//           max-width: 720px;
//           margin: 0 auto;
//         }

//         .reveal {
//           opacity: 0;
//           transform: translateY(60px);
//           animation: revealUp 1.6s ease forwards;
//         }

//         .delay-1 { animation-delay: 0.3s; }
//         .delay-2 { animation-delay: 0.6s; }
//         .delay-3 { animation-delay: 0.9s; }
//         .delay-4 { animation-delay: 1.2s; }

//         @keyframes revealUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useEffect, useRef, useState } from "react";

// const HeroSection: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const isMobile = window.innerWidth < 768;
//   const [canPlay, setCanPlay] = useState(!isMobile);

//   /* -------- DESKTOP PARALLAX -------- */
//   useEffect(() => {
//     if (isMobile) return;

//     const onScroll = () => {
//       if (!videoRef.current) return;
//       const offset = Math.min(window.scrollY * 0.05, 24);
//       videoRef.current.style.transform = `translateY(${offset}px) scale(1.05)`;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isMobile]);

//   /* -------- MOBILE TAP TO PLAY -------- */
//   const handlePlay = () => {
//     if (!videoRef.current) return;
//     videoRef.current.muted = false;
//     videoRef.current.play();
//     setCanPlay(true);
//   };

//   return (
//     <section
//       id="home"
//       aria-label="Infinity Pavilion luxury event venue"
//       className="relative flex items-center justify-center min-h-screen overflow-hidden"
//     >
//       {/* VIDEO (USED FOR BOTH MOBILE & DESKTOP) */}
//       <video
//         ref={videoRef}
//         src="/hero-video.mp4"
//         autoPlay={!isMobile}
//         loop
//         muted
//         playsInline
//         preload="auto"
//         className="absolute inset-0 w-full h-full object-cover hero-video"
//       />

//       {/* MOBILE PLAY OVERLAY */}
//       {isMobile && !canPlay && (
//         <button
//           className="hero-play-btn"
//           aria-label="Play video"
//           onClick={handlePlay}
//         >
//           ▶
//         </button>
//       )}

//       {/* OVERLAY */}
//       <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

//       {/* CONTENT */}
//       <div className="relative z-10 text-center px-6 max-w-[820px]">
//         <p className="hero-eyebrow reveal delay-1">
//           Luxury Wedding & Event Venue
//         </p>

//         <h1 className="hero-title reveal delay-2">
//           Infinity Pavilion
//         </h1>

//         <div className="hero-divider reveal delay-3" />

//         <p className="hero-desc reveal delay-4">
//           A refined luxury space for weddings, receptions, corporate events,
//           and private celebrations — crafted with elegance, warmth,
//           and timeless beauty.
//         </p>
//       </div>

//       {/* STYLES */}
//       <style>{`
//         .hero-video {
//           filter: brightness(0.85) contrast(1.1) saturate(1.15);
//           animation: slowZoom 36s ease-in-out infinite alternate;
//         }

//         @keyframes slowZoom {
//           from { transform: scale(1); }
//           to { transform: scale(1.06); }
//         }

//         .hero-overlay {
//           background: linear-gradient(
//             to bottom,
//             rgba(0,0,0,0.45),
//             rgba(0,0,0,0.22)
//           );
//         }

//         .hero-play-btn {
//           position: absolute;
//           inset: 0;
//           margin: auto;
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           background: linear-gradient(135deg,#D9A441,#EDD79A);
//           border: none;
//           font-size: 32px;
//           font-weight: 700;
//           color: #111;
//           cursor: pointer;
//           z-index: 10;
//           box-shadow:
//             0 0 0 10px rgba(217,164,65,0.25),
//             0 18px 40px rgba(0,0,0,0.45);
//         }

//         .hero-play-btn:active {
//           transform: scale(0.95);
//         }

//         .hero-eyebrow {
//           color: #D9A441;
//           font-size: 11px;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           margin-bottom: 6px;
//         }

//         .hero-title {
//           font-family: "Playfair Display", serif;
//           font-size: clamp(2.4rem, 7vw, 3.6rem);
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.05;
//           margin: 0;
//           text-shadow:
//             0 6px 22px rgba(0,0,0,0.55),
//             0 12px 36px rgba(0,0,0,0.65);
//         }

//         .hero-divider {
//           width: 80px;
//           height: 3px;
//           margin: 12px auto;
//           border-radius: 999px;
//           background: linear-gradient(90deg,#D9A441,#EDD79A);
//         }

//         .hero-desc {
//           font-size: 16px;
//           line-height: 1.6;
//           color: rgba(255,255,255,0.95);
//           max-width: 720px;
//           margin: 0 auto;
//         }

//         .reveal {
//           opacity: 0;
//           transform: translateY(60px);
//           animation: revealUp 1.6s ease forwards;
//         }

//         .delay-1 { animation-delay: 0.3s; }
//         .delay-2 { animation-delay: 0.6s; }
//         .delay-3 { animation-delay: 0.9s; }
//         .delay-4 { animation-delay: 1.2s; }

//         @keyframes revealUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../../public/hero-video.mp4";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = window.innerWidth < 768;
  const [started, setStarted] = useState(!isMobile);

  /* -------- DESKTOP PARALLAX -------- */
  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      if (!videoRef.current) return;
      const offset = Math.min(window.scrollY * 0.05, 24);
      videoRef.current.style.transform = `translateY(${offset}px) scale(1.05)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* -------- TAP ANYWHERE TO PLAY (MOBILE) -------- */
  const handleTapToPlay = () => {
    if (!isMobile || started || !videoRef.current) return;

    videoRef.current.muted = false;
    videoRef.current.play().catch(() => {});
    setStarted(true);
  };

  return (
    <section
      id="home"
      aria-label="Infinity Pavilion luxury event venue"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      onClick={handleTapToPlay}
    >
      {/* VIDEO FOR ALL DEVICES */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay={!isMobile}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover hero-video"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-[900px] pointer-events-none">
        <p className="hero-eyebrow reveal delay-1">
          Luxury Wedding & Event Venue
        </p>

        <h1 className="hero-title reveal delay-2">
          Infinity Pavilion
        </h1>

        <div className="hero-divider reveal delay-3" />

        <p className="hero-desc reveal delay-4">
          A refined luxury space for weddings, receptions, corporate events,
          and private celebrations — crafted with elegance, warmth,
          and timeless beauty.
        </p>
      </div>

      {/* STYLES */}
      <style>{`
        .hero-video {
          filter: brightness(0.85) contrast(1.1) saturate(1.15);
          animation: slowZoom 36s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }

        .hero-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.22)
          );
        }

        /* 🔥 INCREASED EYEBROW */
        .hero-eyebrow {
          color: #D9A441;
          font-size: 20px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        /* 🔥 INCREASED BRAND / LOGO SIZE */
        .hero-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(3rem, 8vw, 4.4rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: 0.06em;
          margin: 0;
          text-shadow:
            0 6px 22px rgba(0,0,0,0.55),
            0 14px 40px rgba(0,0,0,0.7);
        }

        .hero-divider {
          width: 96px;
          height: 3px;
          margin: 16px auto;
          border-radius: 999px;
          background: linear-gradient(90deg,#D9A441,#EDD79A);
        }

        .hero-desc {
          font-size: 17px;
          line-height: 1.65;
          color: rgba(255,255,255,0.95);
          max-width: 760px;
          margin: 0 auto;
        }

        .reveal {
          opacity: 0;
          transform: translateY(60px);
          animation: revealUp 1.6s ease forwards;
        }

        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }
        .delay-3 { animation-delay: 0.9s; }
        .delay-4 { animation-delay: 1.2s; }

        @keyframes revealUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
