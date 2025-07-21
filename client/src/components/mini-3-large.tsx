interface Mini3LargeProps {
  className?: string;
}

export default function Mini3Large({ className = "w-24 h-24" }: Mini3LargeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main body - compact and rounded like Mini 3 */}
      <rect x="85" y="85" width="30" height="20" rx="8" />
      
      {/* Front camera gimbal - very small like Mini 3 */}
      <rect x="97" y="105" width="6" height="8" rx="2" />
      <circle cx="100" cy="115" r="3" />
      
      {/* Battery/top section */}
      <rect x="88" y="78" width="24" height="7" rx="3" />
      
      {/* Motor arms - foldable style like Mini 3 */}
      {/* Front arms */}
      <g>
        <line x1="85" y1="88" x2="65" y2="68" strokeWidth="3" />
        <line x1="65" y1="68" x2="55" y2="58" strokeWidth="3" />
        <line x1="115" y1="88" x2="135" y2="68" strokeWidth="3" />
        <line x1="135" y1="68" x2="145" y2="58" strokeWidth="3" />
      </g>
      
      {/* Rear arms */}
      <g>
        <line x1="85" y1="102" x2="65" y2="122" strokeWidth="3" />
        <line x1="65" y1="122" x2="55" y2="132" strokeWidth="3" />
        <line x1="115" y1="102" x2="135" y2="122" strokeWidth="3" />
        <line x1="135" y1="122" x2="145" y2="132" strokeWidth="3" />
      </g>
      
      {/* Motors - small like Mini 3 */}
      <circle cx="55" cy="58" r="6" />
      <circle cx="145" cy="58" r="6" />
      <circle cx="55" cy="132" r="6" />
      <circle cx="145" cy="132" r="6" />
      
      {/* Propellers - smaller like Mini 3 */}
      <ellipse cx="55" cy="58" rx="15" ry="3" />
      <ellipse cx="145" cy="58" rx="15" ry="3" />
      <ellipse cx="55" cy="132" rx="15" ry="3" />
      <ellipse cx="145" cy="132" rx="15" ry="3" />
      
      {/* Propeller guards - Mini 3 style */}
      <circle cx="55" cy="58" r="18" strokeWidth="1" opacity="0.6" />
      <circle cx="145" cy="58" r="18" strokeWidth="1" opacity="0.6" />
      <circle cx="55" cy="132" r="18" strokeWidth="1" opacity="0.6" />
      <circle cx="145" cy="132" r="18" strokeWidth="1" opacity="0.6" />
      
      {/* Controller/transmitter connection lines */}
      <line x1="100" y1="78" x2="100" y2="68" strokeWidth="1" />
      <circle cx="100" cy="68" r="2" />
      
      {/* LED indicators */}
      <circle cx="92" cy="95" r="1.5" opacity="0.8" />
      <circle cx="108" cy="95" r="1.5" opacity="0.8" />
      
      {/* Folding mechanism indicators */}
      <circle cx="75" cy="88" r="2" strokeWidth="1" />
      <circle cx="125" cy="88" r="2" strokeWidth="1" />
      <circle cx="75" cy="102" r="2" strokeWidth="1" />
      <circle cx="125" cy="102" r="2" strokeWidth="1" />
    </svg>
  );
}