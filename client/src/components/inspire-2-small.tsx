interface Inspire2SmallProps {
  className?: string;
}

export default function Inspire2Small({ className = "w-6 h-6" }: Inspire2SmallProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main body - compact */}
      <rect x="23" y="25" width="14" height="10" rx="2" />
      
      {/* Camera gimbal - simplified */}
      <circle cx="30" cy="38" r="4" />
      <circle cx="30" cy="38" r="2.5" />
      
      {/* Motor arms - shorter */}
      <line x1="23" y1="28" x2="10" y2="15" />
      <line x1="37" y1="28" x2="50" y2="15" />
      <line x1="23" y1="32" x2="10" y2="45" />
      <line x1="37" y1="32" x2="50" y2="45" />
      
      {/* Motors - smaller */}
      <circle cx="10" cy="15" r="3" />
      <circle cx="50" cy="15" r="3" />
      <circle cx="10" cy="45" r="3" />
      <circle cx="50" cy="45" r="3" />
      
      {/* Propellers - compact */}
      <ellipse cx="10" cy="15" rx="6" ry="1.5" />
      <ellipse cx="50" cy="15" rx="6" ry="1.5" />
      <ellipse cx="10" cy="45" rx="6" ry="1.5" />
      <ellipse cx="50" cy="45" rx="6" ry="1.5" />
      
      {/* Landing gear - simplified */}
      <line x1="26" y1="35" x2="26" y2="42" />
      <line x1="34" y1="35" x2="34" y2="42" />
      <line x1="25" y1="42" x2="27" y2="42" />
      <line x1="33" y1="42" x2="35" y2="42" />
    </svg>
  );
}