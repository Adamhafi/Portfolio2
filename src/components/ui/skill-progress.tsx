import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Progress } from "./progress";

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillProgressProps {
  skills: Skill[];
}

export function SkillProgress({ skills }: SkillProgressProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-primary">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress
            {...({
              value: skill.level,
              className: "h-2 bg-secondary/50",
              indicatorClass: `bg-gradient-to-r from-primary/50 to-primary ${
                skill.color ? `bg-[${skill.color}]` : ""
              }`,
            } as any)}
          />
        </motion.div>
      ))}
    </div>
  );
}