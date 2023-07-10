
export default function HoverContainer({ children, className }: { children?: React.ReactNode, className?: string }) {
  return <div className={`cm-primary-shadow rounded-2xl after:rounded-2xl bg-slate-100 ${className}`}>
    {children}
  </div>
}