
import { CircuitBoard, Cpu, Server, Code } from 'lucide-react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-10 left-10 animate-pulse">
        <CircuitBoard size={32} />
      </div>
      <div className="absolute top-1/3 right-10 animate-pulse delay-300">
        <Cpu size={32} />
      </div>
      <div className="absolute bottom-10 left-1/4 animate-pulse delay-500">
        <Server size={32} />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-pulse delay-700">
        <Code size={32} />
      </div>
    </div>
  );
};

export default TechBackground;
