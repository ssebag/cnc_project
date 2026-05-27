interface ReportsHeaderProps {
  title: string;
  subtitle: string;
}

export default function ReportsHeader({ title, subtitle }: ReportsHeaderProps) {
  return (
    <div className="text-right mb-8" dir="rtl">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
      <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
    </div>
  );
}
