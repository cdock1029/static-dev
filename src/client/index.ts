import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

export function useOpen() {
  const [storedState, updateStoredState] = useLocalStorage('drawer:open', false)

  const [memoryState, setMemoryState] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setMemoryState(storedState)
  }, [storedState, setMemoryState])

  return [memoryState, updateStoredState]
}
