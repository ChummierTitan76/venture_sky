interface DroneIconProps {
  className?: string;
}

export default function DroneIcon({ className = "w-8 h-8" }: DroneIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main body */}
      <rect x="35" y="40" width="30" height="20" rx="3" />
      
      {/* Camera gimbal */}
      <circle cx="50" cy="65" r="8" />
      <circle cx="50" cy="65" r="5" />
      
      {/* Motor arms */}
      <line x1="35" y1="45" x2="15" y2="25" />
      <line x1="65" y1="45" x2="85" y2="25" />
      <line x1="35" y1="55" x2="15" y2="75" />
      <line x1="65" y1="55" x2="85" y2="75" />
      
      {/* Motors */}
      <circle cx="15" cy="25" r="6" />
      <circle cx="85" cy="25" r="6" />
      <circle cx="15" cy="75" r="6" />
      <circle cx="85" cy="75" r="6" />
      
      {/* Propellers */}
      <ellipse cx="15" cy="25" rx="12" ry="3" />
      <ellipse cx="85" cy="25" rx="12" ry="3" />
      <ellipse cx="15" cy="75" rx="12" ry="3" />
      <ellipse cx="85" cy="75" rx="12" ry="3" />
      
      {/* Landing gear */}
      <line x1="40" y1="60" x2="40" y2="75" />
      <line x1="60" y1="60" x2="60" y2="75" />
      <line x1="38" y1="75" x2="42" y2="75" />
      <line x1="58" y1="75" x2="62" y2="75" />
      
      {/* Antenna */}
      <line x1="50" y1="40" x2="50" y2="30" />
      <circle cx="50" cy="30" r="2" />
    </svg>
  );
}