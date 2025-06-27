import { PresentContext } from "@/context/PresentContext"
import MOCK_DATA from "../mock"

interface Props {
  children: React.ReactNode
}

const PresentProvider = ({ children }: Props) => {
  return (
    <PresentContext.Provider value={MOCK_DATA}>
      {children}
    </PresentContext.Provider>
  )
}

export default PresentProvider
