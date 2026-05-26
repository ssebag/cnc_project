import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <div className="relative flex-1 w-full md:w-auto">
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pr-10 pl-4 py-2.5 bg-input-background border border-input rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-ring text-right border-[#E5E7EB] bg-white"
      />
    </div>
  );
}
