import { useMemo } from "react";

export default function FloatingDisks() {
  const disks = useMemo(() => {
    const arr = [];
    const colors = ["blue", "violet", "cyan", "sky", "white"];
    for (let i = 0; i < 30; i++) {
      arr.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        left: Math.random() * 100 + "%",
        size: Math.random() * 30 + 20, // size in px
        delay: Math.random() * 20,     // animation delay
        duration: Math.random() * 20 + 20 // speed variation
      });
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {disks.map((disk, idx) => (
        <div
  key={idx}
  className={`absolute rounded-full animate-driftUp glowing-disk ${disk.color}`}
  style={{
    left: disk.left,
    bottom: `-${disk.size}px`,
    width: `${disk.size}px`,
    height: `${disk.size}px`,
    animationDelay: `${disk.delay}s`,
    animationDuration: `${disk.duration}s`
  }}
/>

      ))}
    </div>
  );
}
