import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "./card";

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface StatisticsProps {
  stats: Stat[];
}

export function Statistics({ stats }: StatisticsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 glass-effect gradient-border card-glow hover-lift text-center">
            <div className="flex justify-center mb-4 text-primary text-2xl">
              {stat.icon}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-2xl md:text-3xl font-bold text-primary mb-2"
            >
              {stat.value}
            </motion.div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}