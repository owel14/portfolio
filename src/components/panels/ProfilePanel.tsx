import { SectionHeader } from '../SectionHeader';

export function ProfilePanel() {
  return (
    <div className="panel-content">
      <img src={`${import.meta.env.BASE_URL}img/profile.jpg`} alt="Profile" className="size-40 rounded-full object-cover object-[center_40%] shrink-0 self-center mx-auto border border-white mt-4" />

      <div className="flex flex-col gap-3 mt-4">
        <SectionHeader theme="white">Career Objective</SectionHeader>

        <p className="text-xs font-light leading-[1.82] text-white">
          I am a recent Software Engineering graduate with a strong interest in full-stack development and building user-focused software. Through my internship and university projects, I have gained experience collaborating in agile teams, working with existing codebases, and applying clean coding practices. I'm looking for an opportunity where I can continue learning while contributing to meaningful applications.
        </p>
      </div>
    </div>
  );
}
