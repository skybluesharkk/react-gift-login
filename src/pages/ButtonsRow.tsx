import { useState } from "react"
import Row from "@/components/Row"
import Text from "@/components/Text"
import Column from "@/components/Column"
import TabButton from "@/components/TabButton"

const tabs = [
  { id: 0, label: "전체", content: "ALL" },
  { id: 1, label: "여성이", content: "👩🏻" },
  { id: 2, label: "남성이", content: "👨🏻" },
  { id: 3, label: "청소년이", content: "👦🏻" },
]

const ButtonsRow = () => {
  const [activeId, setActiveId] = useState<number>(0)

  return (
    <Row>
      {tabs.map((tab) => (
        <Column key={tab.id}>
          <TabButton
            type="button"
            isActive={activeId === tab.id}
            onClick={() => setActiveId(tab.id)}
          >
            <Text
              variant="subtitle2Regular"
              margin="spacing2"
              padding="spacing2"
            >
              {tab.content}
            </Text>
          </TabButton>

          <Text
            variant="label2Regular"
            margin="spacing0"
            padding="spacing0"
            color={activeId === tab.id ? "blue700" : "blue300"}
          >
            {tab.label}
          </Text>
        </Column>
      ))}
    </Row>
  )
}
export default ButtonsRow
