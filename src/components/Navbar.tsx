// import React, { useEffect, useState } from "react";
// import logo from "../assets/infinity-logo1.jpg";

// const links = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Services", href: "#services" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState<string>("Home");

//   useEffect(() => {
//     let rafId: number | null = null;
//     const onScroll = () => {
//       if (rafId) return;
//       rafId = requestAnimationFrame(() => {
//         setScrolled(window.scrollY > 28);
//         rafId && cancelAnimationFrame(rafId);
//         rafId = null;
//       });
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     setScrolled(window.scrollY > 28);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       if (rafId) cancelAnimationFrame(rafId);
//     };
//   }, []);

//   // color variables
//   const textColor = scrolled ? "#111" : "#ffffff";
//   const subTextColor = scrolled ? "#7a6f62" : "rgba(255,255,255,0.9)";

//   // header styles: transparent at top (no border) -> champagne after scroll
//   const headerStyle: React.CSSProperties = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 60,
//     transition: "background-color 420ms ease, box-shadow 420ms ease, backdrop-filter 420ms ease",
//     background: scrolled ? "rgba(247,238,219,0.95)" : "transparent",
//     boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
//     borderBottom: scrolled ? "1px solid rgba(0,0,0,0.04)" : "none", // NO border when transparent
//     pointerEvents: "auto",
//   };

//   // small hover underline CSS inline to keep local
//   const hoverStyle = `
//     .nav-link { position: relative; padding-bottom: 6px; }
//     .nav-link .underline {
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       bottom: -8px;
//       height: 3px;
//       width: 0;
//       border-radius: 999px;
//       transition: width 220ms ease, background 220ms ease;
//     }
//     .nav-link:hover .underline { width: 28px; background: linear-gradient(90deg,#D9A441,#EDD79A); }
//   `;

//   return (
//     <header style={headerStyle}>
//       <style>{hoverStyle}</style>

//       <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 max-w-[1280px] mx-auto">
//         {/* LEFT: logo */}
//         <a
//           href="#home"
//           onClick={() => {
//             setActive("Home");
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }}
//           className="flex items-center gap-3"
//           style={{ textDecoration: "none" }}
//           aria-label="Infinity Pavilion home"
//         >
//           <div
//             style={{
//               width: 46,
//               height: 46,
//               borderRadius: 999,
//               overflow: "hidden",
//               background: scrolled ? "#fff" : "rgba(255,255,255,0.06)",
//               boxShadow: scrolled ? "0 6px 18px rgba(0,0,0,0.08)" : "0 8px 30px rgba(0,0,0,0.12)",
//               border: "1px solid rgba(0,0,0,0.03)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img src={logo} alt="logo" className="w-full h-full object-cover" />
//           </div>

//           <div style={{ lineHeight: 1 }}>
//             <div style={{ fontFamily: "Playfair Display, serif", fontSize: 17, color: textColor, fontWeight: 600 }}>
//               Infinity Pavilion
//             </div>
            
//           </div>
//         </a>

//         {/* DESKTOP LINKS */}
//         <nav className="hidden md:flex items-center gap-8">
//           {links.map((l) => {
//             const isActive = active === l.label;
//             return (
//               <a
//                 key={l.label}
//                 href={l.href}
//                 onClick={() => setActive(l.label)}
//                 className="nav-link"
//                 style={{ color: textColor, fontWeight: 500, fontSize: 15, textDecoration: "none" }}
//               >
//                 <span>{l.label}</span>
//                 <span
//                   className="underline"
//                   aria-hidden
//                   style={{
//                     width: isActive ? 28 : 0,
//                     background: isActive ? "linear-gradient(90deg,#D9A441,#EDD79A)" : undefined,
//                   }}
//                 />
//               </a>
//             );
//           })}

//           <a
//             href="#contact"
//             onClick={() => setActive("Contact")}
//             className="rounded-full px-5 py-2"
//             style={{
//               background: "linear-gradient(90deg,#D9A441,#EDD79A)",
//               color: "#111",
//               fontWeight: 600,
//               boxShadow: "0 10px 26px rgba(217,164,65,0.18)",
//               textDecoration: "none",
//             }}
//           >
//             Book Now
//           </a>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           aria-label="Toggle menu"
//           className="md:hidden p-2"
//           onClick={() => setOpen((v) => !v)}
//           style={{ color: textColor, fontSize: 20, background: "transparent", border: "none" }}
//         >
//           <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect x="0" y="0" width="26" height="2" rx="1" fill="currentColor" />
//             <rect x="0" y="7" width="26" height="2" rx="1" fill="currentColor" />
//             <rect x="0" y="14" width="26" height="2" rx="1" fill="currentColor" />
//           </svg>
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         aria-hidden={!open}
//         style={{
//           maxHeight: open ? 420 : 0,
//           transition: "max-height 360ms ease, padding 360ms ease",
//           overflow: "hidden",
//           background: "rgba(247,238,219,0.98)",
//           borderTop: "1px solid rgba(0,0,0,0.04)",
//           padding: open ? "12px 18px 20px" : "0 18px",
//         }}
//         className="md:hidden"
//       >
//         <div className="flex flex-col gap-3 max-w-[900px] mx-auto">
//           {links.map((l) => (
//             <a
//               key={l.label}
//               href={l.href}
//               onClick={() => {
//                 setActive(l.label);
//                 setOpen(false);
//               }}
//               className="py-3 text-base"
//               style={{ color: "#111", fontWeight: 600, textDecoration: "none" }}
//             >
//               {l.label}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             onClick={() => setOpen(false)}
//             className="mt-2 inline-block text-center px-5 py-3 rounded-full"
//             style={{
//               background: "linear-gradient(90deg,#D9A441,#EDD79A)",
//               color: "#111",
//               fontWeight: 700,
//               textDecoration: "none",
//             }}
//           >
//             Book Now
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Infinity-Pavilion-logo.jpg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Venue", href: "#venue" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ---------------- SCROLL SPY ---------------- */
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const match = links.find((l) => l.href === `#${id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  /* ---------------- SCROLL BACKGROUND ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "#111" : "#fff";

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 60,
    background: scrolled ? "rgba(247,238,219,0.96)" : "transparent",
    boxShadow: scrolled ? "0 2px 6px rgba(0,0,0,0.05)" : "none",
    transition: "all 300ms ease",
  };

  /* ---------------- NAV LINK STYLE ---------------- */
  const hoverStyle = `
    .nav-link {
      position: relative;
      padding-bottom: 6px;
      font-size: 19px;
      letter-spacing: 0.18em;
      font-family: "Playfair Display", serif;
      font-weight: 500;
      text-transform: uppercase;
      opacity: 0.85;
      transition: color 220ms ease, opacity 220ms ease;
    }

    .nav-link::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -8px;
      width: 42px;
      height: 2px;
      background: linear-gradient(90deg,#D9A441,#EDD79A);
      transform: translateX(-50%) scaleX(0);
      transition: transform 260ms ease;
      border-radius: 999px;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #D9A441 !important;
      opacity: 1;
    }

    .nav-link:hover::after,
    .nav-link.active::after {
      transform: translateX(-50%) scaleX(1);
    }
  `;

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setOpen(false);

    const el = document.querySelector(href);
    if (el) {
      const offset = 110; // adjusted for bigger logo
      const y = (el as HTMLElement).offsetTop - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header style={headerStyle}>
      <style>{hoverStyle}</style>

      <div
        className="max-w-[1400px] mx-auto flex items-center justify-between"
        style={{ padding: "18px 40px" }}  // more space for big logo
      >
        {/* LOGO (MUCH BIGGER + GOLD GLOW) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("Home", "#home");
          }}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              width: scrolled ? 110 : 99,
              height: scrolled ? 110 : 99,
              borderRadius: "50%",
              overflow: "hidden",
              background: "#fff",
              transition: "all 300ms ease",
              boxShadow: scrolled
                ? `
                  0 0 0 3px rgba(217,164,65,0.35),
                  0 0 36px rgba(217,164,65,0.85),
                  0 12px 28px rgba(0,0,0,0.35)
                `
                : "0 8px 22px rgba(0,0,0,0.28)",
            }}
          >
            <img
              src={logo}
              alt="Infinity Pavilion"
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-14">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(l.label, l.href);
              }}
              className={`nav-link ${active === l.label ? "active" : ""}`}
              style={{ color: textColor, textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "transparent",
            border: "none",
            color: textColor,
          }}
        >
          <svg width="26" height="16" viewBox="0 0 26 16">
            <rect width="26" height="2" rx="1" fill="currentColor" />
            <rect y="7" width="26" height="2" rx="1" fill="currentColor" />
            <rect y="14" width="26" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className="md:hidden"
        style={{
          maxHeight: open ? 360 : 0,
          overflow: "hidden",
          transition: "max-height 300ms ease",
          background: "rgba(247,238,219,0.98)",
          padding: open ? "12px 40px 18px" : "0 40px",
        }}
      >
        <div className="flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(l.label, l.href);
              }}
              style={{
                fontSize: 18,
                letterSpacing: "0.18em",
                fontFamily: "Playfair Display, serif",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#111",
                textDecoration: "none",
                padding: "10px 0",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
