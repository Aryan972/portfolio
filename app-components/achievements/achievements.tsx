import { Trophy, Award, FileText, GraduationCap, Github, ExternalLink } from "lucide-react";
import { achievements } from "@/data/resume-config";
import Link from "next/link";

const Achievements = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case "U.S. Patent": return FileText;
      case "Certifications": return Award;
      case "GATE Score": return GraduationCap;
      default: return Trophy;
    }
  };

  return (
    <div id="achievements" className="mt-5">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="size-6 md:size-7 text-yellow-500" />
        <h1 className="text-xl md:text-2xl font-bold">Achievements</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = getIcon(achievement.title);
          return (
            <div 
              key={index} 
              className="border border-dashed border-gray-400 dark:border-zinc-500 rounded-lg p-4 hover:border-primary transition-all inner-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-5 text-primary" />
                    <h2 className="font-bold text-sm md:text-base">{achievement.title}</h2>
                  </div>
                  {achievement.link && (
                    <Link href={achievement.link} target="_blank" className="hover:text-primary transition-colors">
                      {achievement.type === "github" ? (
                        <Github className="size-4" />
                      ) : (
                        <ExternalLink className="size-4" />
                      )}
                    </Link>
                  )}
                </div>
                <p className="text-primary font-medium text-sm mb-1">{achievement.detail}</p>
                <p className="text-gray-500 text-xs md:text-sm">{achievement.subDetail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
