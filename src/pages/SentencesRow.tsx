import SentenceTab from "@/components/SentenceTab"
import Row from "@/components/Row"
import Column from "@/components/Column"
import Text from "@/components/Text"
import { useState } from "react"

const sentences = [
  { id: 5, label: "받고 싶어한" },
  { id: 6, label: "많이 선물한" },
  { id: 7, label: "위시로 받은" },
]

const SentencesRow = () => {
  const [activeSentence, setActiveSentence] = useState<number>(5)

  return (
    <Row>
      {sentences.map((s) => (
        <Column key={s.id} style={{ flex: 1 }}>
          <SentenceTab
            active={activeSentence === s.id}
            onClick={() => setActiveSentence(s.id)}
          >
            <Text
              variant="label2Regular"
              margin="spacing0"
              padding="spacing0"
              color={activeSentence === s.id ? "blue700" : "blue400"}
              style={{
                fontWeight: activeSentence === s.id ? 700 : 400,
              }}
            >
              {s.label}
            </Text>
          </SentenceTab>
        </Column>
      ))}
    </Row>
  )
}
export default SentencesRow
