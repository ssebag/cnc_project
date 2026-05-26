interface InventoryHeaderProps {
  title: string;
  subtitle: string;
}

export default function InventoryHeader({ title, subtitle }: InventoryHeaderProps) {
  return (
    <div>
      <h1 className="text-foreground mb-2 text-right text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-right">{subtitle}</p>
    </div>
  );
}
