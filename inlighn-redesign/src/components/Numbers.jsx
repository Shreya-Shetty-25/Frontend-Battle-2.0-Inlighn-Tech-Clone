import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "INTERNS ENROLLED", value: 5000, suffix: "+", duration: 2 },
  { label: "PROJECTS COMPLETED", value: 9000, suffix: "+", duration: 2.5 },
  { label: "SATISFACTION RATE", value: 93, suffix: "%", duration: 2 },
  { label: "TOP INSTRUCTORS", value: 30, suffix: "+", duration: 1.5 },
];

export default function Numbers() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#094043] py-16 px-4 md:px-16 rounded-[60px] mx-8">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-[#0a5454] p-6 text-center shadow-lg bg-[#075859] text-white"
          >
            <div className="text-4xl font-bold text-orange-400 mb-2">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={stat.duration}
                  suffix={stat.suffix}
                />
              ) : (
                `0${stat.suffix}`
              )}
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
