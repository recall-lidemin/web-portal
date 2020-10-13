import { useRef, useEffect } from 'react'

export type QuerySelector = (elWrapper: HTMLElement) => (HTMLElement | null)[]

export default (querySelector: QuerySelector, canScroll: boolean, dependencies?: any[]) => {
  const refWrapper = useRef<HTMLDivElement>(null)
  const scrollTop = useRef<number>(0)
  const timer = useRef<any>()
  useEffect(() => {
    const [elWrapper, elContainer] = querySelector(refWrapper.current!)
    const delHeight = elContainer!.clientHeight - elWrapper!.clientHeight
    if (canScroll && delHeight > 0) {
      const scroll = () => {
        clearTimeout(timer.current)
        if (scrollTop.current >= delHeight) {
          scrollTop.current = 0
        }
        elWrapper!.scrollTop = ++scrollTop.current
        timer.current = setTimeout(scroll, 50)
      }
      timer.current = setTimeout(scroll, 50)
    } else {
      clearTimeout(timer.current)
    }
    return () => clearTimeout(timer.current)
  }, [refWrapper, canScroll, ...(dependencies || [])])
  return refWrapper
}
