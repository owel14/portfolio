import { BookOpen } from 'lucide-react';

const courses = [
  'Soft. Eng. Design',
  'Software Architecture',
  'AI & Machine Learning',
  'Networks & Security',
  'Object-Oriented Prog.',
  'Database Systems',
] as const;

export function EducationPanel() {
  return (
    <div className="panel-content">
      <p className="text-[clamp(10px,0.96vw,12.5px)] font-light italic text-chalk/80">
        BE(Hons) Software Engineering
      </p>

      <div className="flex items-center gap-3.5 bg-chalk/5 border border-chalk/10 rounded-[3px] px-3.5 py-2.5">
        <div className="flex flex-col items-center gap-0.5 shrink-0">
          <span className="font-serif text-[clamp(22px,2.2vw,32px)] font-bold text-chalk leading-none">8.1</span>
          <span className="text-[7.5px] tracking-[2px] uppercase text-chalk/75">GPA</span>
        </div>
        <div className="flex flex-col gap-0.75 text-[clamp(10px,0.92vw,12px)] font-light border-l border-chalk/12 pl-3.5 text-chalk/80">
          <span>2022 – 2025</span>
          <span>Graduated</span>
        </div>
      </div>

      <div className="flex items-center gap-1.25">
        <BookOpen size={10} strokeWidth={1.5} className="text-chalk/80 shrink-0" />
        <p className="text-[9px] tracking-[2.5px] uppercase text-chalk/75 font-normal">Relevant Courses</p>
      </div>

      <div className="grid grid-cols-2 gap-y-1.25 gap-x-2">
        {courses.map((course) => (
          <span key={course} className="text-[clamp(11px,1vw,13px)] font-light leading-[1.3] text-chalk/80">
            {course}
          </span>
        ))}
      </div>

      <p className="mt-auto text-[clamp(8px,0.78vw,10px)] tracking-[2px] uppercase text-chalk/80">
        Flip for summary →
      </p>
    </div>
  );
}
