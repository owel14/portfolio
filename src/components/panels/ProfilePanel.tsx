import { SectionHeader } from '../SectionHeader';

export function ProfilePanel() {
  return (
    <div className="panel-content">
      <div className="size-16 rounded-full bg-chalk/10 border border-chalk/20 shrink-0 self-start" aria-hidden="true" />

      <SectionHeader theme="chalk">Career Objective</SectionHeader>

      <p className="text-xs font-light leading-[1.82] text-chalk/80">
        I am a recent Software Engineering graduate with a strong interest in full-stack development and building user-focused software. Through my internship and university projects, I have gained experience collaborating in agile teams, working with existing codebases, and applying clean coding practices. I'm looking for an opportunity where I can continue learning while contributing to meaningful applications.
      </p>
    </div>
  );
}
