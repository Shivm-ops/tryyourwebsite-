export default function DemoStamp() {
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="stamp-roughen">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.04"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10"
        aria-hidden="true"
      >
        <div
          style={{
            transform: "rotate(-35deg)",
            opacity: 0.09,
            color: "currentColor",
            fontSize: "clamp(48px, 10vw, 96px)",
            fontWeight: 900,
            letterSpacing: "0.2em",
            border: "6px solid currentColor",
            padding: "8px 28px",
            borderRadius: "4px",
            fontFamily: "Impact, Arial Black, sans-serif",
            filter: "url(#stamp-roughen)",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          DEMO
        </div>
      </div>
    </>
  );
}
