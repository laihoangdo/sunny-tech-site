import React from 'react';

interface SunnyTechLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'color' | 'white' | 'dark';
  showText?: boolean;
}

export const SunnyTechLogo: React.FC<SunnyTechLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'color',
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: 34, text: 'text-lg', gap: 'gap-2.5' },
    md: { icon: 44, text: 'text-2xl', gap: 'gap-3' },
    lg: { icon: 54, text: 'text-3xl', gap: 'gap-3.5' },
    xl: { icon: 68, text: 'text-4xl', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size];

  // Brand colors from logo:
  // Sun & circuit color: #FFC400 (Vibrant solar tech yellow)
  // Text color: #102D63 (Deep tech navy)
  const textColor = variant === 'white' ? 'text-white' : 'text-[#102D63] dark:text-white';
  const subtextColor = variant === 'white' ? 'text-amber-300' : 'text-[#f5b000] dark:text-[#FFC400]';

  return (
    <div className={`inline-flex items-center ${currentSize.gap} select-none ${className}`}>
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        {/* Central Sun/Core Ring */}
        <circle
          cx="100"
          cy="100"
          r="26"
          fill="none"
          stroke="#FFC400"
          strokeWidth="9"
        />

        {/* LEFT SIDE: Sun Rays (Varying lengths and angles radiating outwards) */}
        {/* Ray 1: Top vertical-ish ray */}
        <rect
          x="95.5"
          y="18"
          width="9"
          height="44"
          rx="2"
          fill="#FFC400"
        />
        {/* Ray 2: Upper-left 30 deg */}
        <rect
          x="95.5"
          y="26"
          width="9"
          height="38"
          rx="2"
          fill="#FFC400"
          transform="rotate(-36 100 100)"
        />
        {/* Ray 3: Upper-left 60 deg */}
        <rect
          x="95.5"
          y="20"
          width="9"
          height="45"
          rx="2"
          fill="#FFC400"
          transform="rotate(-68 100 100)"
        />
        {/* Ray 4: Pure Left horizontal ray (Longest) */}
        <rect
          x="95.5"
          y="16"
          width="9"
          height="49"
          rx="2"
          fill="#FFC400"
          transform="rotate(-90 100 100)"
        />
        {/* Ray 5: Lower-left 60 deg */}
        <rect
          x="95.5"
          y="22"
          width="9"
          height="43"
          rx="2"
          fill="#FFC400"
          transform="rotate(-115 100 100)"
        />
        {/* Ray 6: Lower-left 35 deg */}
        <rect
          x="95.5"
          y="26"
          width="9"
          height="38"
          rx="2"
          fill="#FFC400"
          transform="rotate(-144 100 100)"
        />
        {/* Ray 7: Bottom vertical ray */}
        <rect
          x="95.5"
          y="24"
          width="9"
          height="40"
          rx="2"
          fill="#FFC400"
          transform="rotate(-180 100 100)"
        />

        {/* RIGHT SIDE: Circuit Traces with 45-deg or 90-deg angles & terminal circular donut nodes */}
        {/* Circuit Trace 1: Top Right angle */}
        <path
          d="M 120 78 L 138 56 L 152 56"
          stroke="#FFC400"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="158" cy="56" r="8" fill="none" stroke="#FFC400" strokeWidth="5.5" />

        {/* Circuit Trace 2: Upper Mid-Right */}
        <path
          d="M 126 88 L 148 76 L 174 76"
          stroke="#FFC400"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="180" cy="76" r="8" fill="none" stroke="#FFC400" strokeWidth="5.5" />

        {/* Circuit Trace 3: Pure Horizontal Mid-Right (Long) */}
        <path
          d="M 130 100 L 182 100"
          stroke="#FFC400"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="188" cy="100" r="8" fill="none" stroke="#FFC400" strokeWidth="5.5" />

        {/* Circuit Trace 4: Lower Mid-Right */}
        <path
          d="M 126 112 L 148 124 L 172 124"
          stroke="#FFC400"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="178" cy="124" r="8" fill="none" stroke="#FFC400" strokeWidth="5.5" />

        {/* Circuit Trace 5: Bottom Right angle */}
        <path
          d="M 120 122 L 138 144 L 150 144"
          stroke="#FFC400"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="156" cy="144" r="8" fill="none" stroke="#FFC400" strokeWidth="5.5" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-extrabold tracking-tight ${currentSize.text} ${textColor} flex items-center font-sans`}>
            <span>Sunny</span>
            <span className="ml-1.5 font-bold">Tech</span>
          </div>
          <span className={`text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${subtextColor}`}>
            Solutions &middot; Innovation
          </span>
        </div>
      )}
    </div>
  );
};
