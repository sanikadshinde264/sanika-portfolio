const PATTERNS = {
  dashboard: (
    <>
      <rect x="20" y="70" width="18" height="60" rx="2" fill="url(#g)" opacity="0.9" />
      <rect x="46" y="45" width="18" height="85" rx="2" fill="url(#g)" opacity="0.7" />
      <rect x="72" y="90" width="18" height="40" rx="2" fill="url(#g)" opacity="0.5" />
      <circle cx="170" cy="70" r="34" fill="none" stroke="url(#g)" strokeWidth="8" opacity="0.6" />
      <path d="M170 36 A34 34 0 0 1 199 88" fill="none" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  code: (
    <>
      <rect x="20" y="30" width="220" height="100" rx="8" fill="none" stroke="url(#g)" strokeWidth="1.5" opacity="0.5" />
      <text x="34" y="55" fill="#38BDF8" fontFamily="monospace" fontSize="11" opacity="0.9">interest.calc(days)</text>
      <text x="34" y="72" fill="#818CF8" fontFamily="monospace" fontSize="11" opacity="0.7">principal * rate / 100</text>
      <text x="34" y="89" fill="#94A3B8" fontFamily="monospace" fontSize="11" opacity="0.6">return response;</text>
      <rect x="34" y="100" width="80" height="6" rx="3" fill="#22C55E" opacity="0.6" />
    </>
  ),
  ml: (
    <>
      {[...Array(4)].map((_, i) => (
        <circle key={`in-${i}`} cx="40" cy={30 + i * 24} r="6" fill="#38BDF8" opacity="0.8" />
      ))}
      {[...Array(3)].map((_, i) => (
        <circle key={`mid-${i}`} cx="130" cy={45 + i * 24} r="6" fill="#818CF8" opacity="0.8" />
      ))}
      <circle cx="220" cy="80" r="7" fill="#22C55E" opacity="0.9" />
      {[...Array(4)].map((_, i) =>
        [...Array(3)].map((_, j) => (
          <line
            key={`l-${i}-${j}`}
            x1="46" y1={30 + i * 24}
            x2="124" y2={45 + j * 24}
            stroke="#38BDF8" strokeWidth="0.5" opacity="0.15"
          />
        ))
      )}
      {[...Array(3)].map((_, j) => (
        <line key={`r-${j}`} x1="136" y1={45 + j * 24} x2="213" y2="80" stroke="#818CF8" strokeWidth="0.5" opacity="0.2" />
      ))}
    </>
  ),
  chat: (
    <>
      <rect x="30" y="30" width="130" height="46" rx="12" fill="url(#g)" opacity="0.25" />
      <rect x="90" y="86" width="130" height="46" rx="12" fill="url(#g)" opacity="0.5" />
      <circle cx="52" cy="53" r="4" fill="#38BDF8" />
      <circle cx="70" cy="53" r="4" fill="#38BDF8" opacity="0.6" />
      <circle cx="88" cy="53" r="4" fill="#38BDF8" opacity="0.3" />
    </>
  ),
  weather: (
    <>
      <circle cx="90" cy="70" r="32" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.7" />
      <path d="M40 100 Q60 80 90 95 Q110 78 150 92 Q175 82 195 100 Z" fill="url(#g)" opacity="0.35" />
      <polyline points="20,120 240,120" stroke="#818CF8" strokeWidth="1" opacity="0.25" />
      <polyline points="30,110 70,90 110,100 150,70 190,85 230,60" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.7" />
    </>
  ),
  tasks: (
    <>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="30" y={28 + i * 24} width="14" height="14" rx="4" fill="none" stroke="#38BDF8" strokeWidth="1.5" opacity="0.7" />
          {i < 3 && <path d={`M33 ${35 + i * 24} l3 3 l6 -7`} stroke="#22C55E" strokeWidth="1.6" fill="none" />}
          <rect x="56" y={31 + i * 24} width={140 - i * 18} height="7" rx="3" fill="url(#g)" opacity={0.6 - i * 0.1} />
        </g>
      ))}
    </>
  ),
};

export default function ProjectThumbnail({ type = 'code', className = '' }) {
  const pattern = PATTERNS[type] || PATTERNS.code;
  return (
    <svg
      viewBox="0 0 260 160"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Project preview illustration"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#334155" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="260" height="160" fill="#0B1120" />
      <rect width="260" height="160" fill="url(#dots)" />
      {pattern}
    </svg>
  );
}
