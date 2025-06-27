import { createContext } from "react"

interface Present {
  themeId: number
  name: string
  image: string
}
export const PresentContext = createContext<Present[]>([])
