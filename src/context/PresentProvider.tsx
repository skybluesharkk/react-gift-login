import { PresentContext } from "@/context/PresentContext"
import MOCK_PRESENT from "@/mock_present"

interface Props {
  children: React.ReactNode
}

const PresentProvider = ({ children }: Props) => {
  return (
    <PresentContext.Provider value={MOCK_PRESENT}>
      {children}
    </PresentContext.Provider>
  )
}

export default PresentProvider
