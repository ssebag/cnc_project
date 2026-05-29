type SwitchProps = {
  className: string,  
  enabled: boolean,
  onChange: () => void
}

export default function SwitchButton({
  className,
  enabled,
  onChange,
}: SwitchProps) {
  return (
    <button
      onClick={onChange}
      className={`
        relative inline-flex h-7 w-14 items-center
        rounded-full transition-colors duration-300
        ${enabled ? "bg-sky-500 justify-end" : "bg-slate-300 justify-start"}
        ${className}
        `}
    >
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full
          bg-white duration-300
          ${enabled ? "" : ""}
          
        `}
      />
    </button>
  )
}