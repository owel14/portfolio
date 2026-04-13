export function ProfilePanel() {
  return (
    <div className="panel-content">
      <div className="size-[clamp(56px,6vw,76px)] rounded-full bg-chalk/10 border border-chalk/20 shrink-0 self-start" aria-hidden="true" />

      <div className="flex items-center gap-[5px] text-[9px] tracking-[2.5px] uppercase text-chalk/75 font-normal">
        Career Objective
      </div>

      <p className="text-[clamp(11px,1.05vw,13.5px)] font-light leading-[1.82] text-chalk/80">
        I am a recent Software Engineering graduate with a strong interest in full-stack development and building user-focused software. Through my internship and university projects, I have gained experience collaborating in agile teams, working with existing codebases, and applying clean coding practices. I'm looking for an opportunity where I can continue learning while contributing to meaningful applications.
      </p>
    </div>
  );
}
