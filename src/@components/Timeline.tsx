import { ReactElement } from "react";

type TimelineItemProps = {
  children: ReactElement | ReactElement[]
  oppContent: ReactElement
  last?: boolean
  className?: string
}

type TimelineProps = {
  children: ReactElement<TimelineItemProps> | ReactElement<TimelineItemProps>[]
}

export default function Timeline({ children }: TimelineProps) {
  return <div className="grid grid-cols-[auto_2.5rem_1fr] max-md:grid-cols-[2.5rem_1fr]">
    {children}
  </div>
}

export function TimelineItem({ children, oppContent, last = false, className = '' }: TimelineItemProps) {
  return <>
    <div className={`min-h-[80px] max-md:hidden ${className}`}>{oppContent}</div>
    <div className={`min-h-[80px] flex flex-col items-center justify-start ${className}`}>
      <div className="w-full flex flex-[0_0_1.5rem] items-center justify-center">
        <div className="rounded-full h-4 w-4 ring-2 ring-slate-400" />
      </div>
      {!last && <div className="flex flex-auto items-center" >
        <div className="h-[calc(100%-1rem)] w-[2px] bg-slate-400" />
      </div>}
    </div>
    <div className={`min-h-[80px] ${className}`}>
      <div className="md:hidden">{oppContent}</div>
      <div>{children}</div>
    </div>
  </>
}