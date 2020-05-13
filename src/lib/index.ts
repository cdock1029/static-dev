import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'
import remark from 'remark'
import html from 'remark-html'

export function useOpen() {
  const [storedState, updateStoredState] = useLocalStorage('drawer:open', false)

  const [memoryState, setMemoryState] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setMemoryState(storedState)
  }, [storedState, setMemoryState])

  return [memoryState, updateStoredState]
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).processSync(markdown)
  return result.toString()
}
