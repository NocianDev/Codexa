export function LogoSVG({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="rounded-full" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect rx="20" width="100" height="100" fill="url(#g1)" />
      <g transform="translate(12,12)">
        <circle cx="20" cy="20" r="8" fill="#fff" opacity="0.18" />
        <path d="M10 60 C20 30, 60 30, 70 60 C60 50, 40 48, 30 60 C24 66, 14 68, 10 60 Z" fill="#fff" opacity="0.12" />
        <text x="26" y="44" fontFamily="Inter, system-ui" fontWeight="700" fontSize="44" fill="#fff">C</text>
      </g>
    </svg>
  );
}

export function CartoonHero() {
  return (
    <svg viewBox="0 0 800 520" className="w-full h-96 object-cover rounded-2xl" xmlns="http://www.w3.org/2000/svg">
      <rect rx="24" width="100%" height="100%" fill="#f7f9fc" />
      <g transform="translate(90,70)">
        <rect x="80" y="40" width="420" height="270" rx="22" fill="#fffb" stroke="#e6e9ef" strokeWidth="2" />
        <rect x="100" y="60" width="380" height="200" rx="14" fill="#fff" />
        <rect x="120" y="80" width="140" height="12" rx="6" fill="#7c3aed" opacity="0.95" />
        <rect x="270" y="80" width="200" height="12" rx="6" fill="#06b6d4" opacity="0.95" />
        <rect x="120" y="110" width="350" height="80" rx="10" fill="#f1f5f9" />
        <circle cx="160" cy="150" r="24" fill="#f97316" />
        <rect x="200" y="125" width="200" height="18" rx="8" fill="#94a3b8" />
      </g>
      <ellipse cx="580" cy="400" rx="190" ry="50" fill="#fff" opacity="0.6" />
      <g transform="translate(520,300)">
        <circle cx="0" cy="0" r="48" fill="#ffcc80" />
        <rect x="-34" y="40" width="68" height="80" rx="12" fill="#7c3aed" />
        <circle cx="-18" cy="-8" r="6" fill="#1f2937" />
        <circle cx="6" cy="-8" r="6" fill="#1f2937" />
        <path d="M -6 6 q 10 12 24 0" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function CartoonCard({ colorA = '#7c3aed', colorB = '#06b6d4', label = 'App' }: { colorA?: string; colorB?: string; label?: string }) {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-36 rounded-lg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`g-${label}`} x1="0" x2="1"><stop offset="0%" stopColor={colorA} /><stop offset="100%" stopColor={colorB} /></linearGradient>
      </defs>
      <rect rx="16" width="100%" height="100%" fill="#fff" stroke="#e6e9ef" />
      <rect x="12" y="12" width="176" height="96" rx="12" fill={`url(#g-${label})`} opacity="0.95" />
      <circle cx="50" cy="60" r="14" fill="#fff" />
      <text x="22" y="118" fontSize="14" fontWeight="700" fill="#0f172a">{label}</text>
    </svg>
  );
}
