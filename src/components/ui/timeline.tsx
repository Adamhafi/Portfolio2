import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "./card";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  technologies?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative space-y-8">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
            index % 2 ? "md:rtl" : ""
          }`}
        >
          {/* Date */}
          <div className={`md:text-right ${index % 2 ? "md:order-2" : ""}`}>
            <div className="sticky top-20">
              <span className="text-primary font-bold">{item.date}</span>
            </div>
          </div>

          {/* Content */}
          <div className={index % 2 ? "md:order-1" : ""}>
            <Card className="p-6 glass-effect gradient-border card-glow hover-lift relative">
              {/* Dot on the timeline */}
              <div className="absolute top-6 -left-[25px] md:-left-[35px] w-4 h-4 rounded-full bg-primary" />
              
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              
              {item.technologies && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-secondary/80 text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  );
}