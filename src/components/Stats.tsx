import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, FlaskConical, Award } from 'lucide-react';

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

export default function Stats() {
  const statsData: StatItem[] = [
    {
      id: 'students',
      label: 'Enrolled Students',
      value: 450,
      suffix: '+',
      icon: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    },
    {
      id: 'faculty',
      label: 'Experienced Faculty',
      value: 25,
      suffix: '+',
      icon: <GraduationCap className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    },
    {
      id: 'labs',
      label: 'Specialized Laboratories',
      value: 12,
      suffix: '+',
      icon: <FlaskConical className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    },
    {
      id: 'courses',
      label: 'Affiliated Programs',
      value: 2,
      suffix: '',
      icon: <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    },
  ];

  // Animated numbers increment
  const [counts, setCounts] = useState<Record<string, number>>({
    students: 0,
    faculty: 0,
    labs: 0,
    courses: 0,
  });

  useEffect(() => {
    const duration = 1500; // Total animation ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function outQuad
      const easedProgress = progress * (2 - progress);

      setCounts({
        students: Math.floor(easedProgress * 450),
        faculty: Math.floor(easedProgress * 25),
        labs: Math.floor(easedProgress * 12),
        courses: Math.floor(easedProgress * 2),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-slate-900 shadow-xl dark:shadow-slate-950/40 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-slate-800">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-200"
          >
            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-2xl mb-3 flex items-center justify-center">
              {stat.icon}
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-blue-900 dark:text-white">
              {counts[stat.id]}
              {stat.suffix}
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
