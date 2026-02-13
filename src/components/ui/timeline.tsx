interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      <div className="absolute bottom-0 left-[7px] top-2 w-px bg-neutral-200 dark:bg-neutral-800" />
      {items.map((item, index) => (
        <div key={index} className="relative pl-8">
          <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-950" />
          <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {item.period}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">
            {item.title}
          </h3>
          <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {item.company}
          </div>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
