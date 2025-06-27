import PlusButton from "@/components/PlusButton"
import PresentWho from "@/components/PresentWho"
import PresentWhoBackGround from "@/components/PresentWhoBackGround"
import PresentLayout from "@/components/PresentLayout"
import Text from "@/components/Text"
import plusicon from "@/assets/Plus_icon.png"
import PresentCardStyle from "@/components/PresentCardStyle"
import { useContext } from "react"
import { PresentContext } from "@/context/PresentContext"
import Layout from "@/components/Layout"
import Blank from "@/components/Blank"
interface PresentItem {
  themeId: number
  name: string
  image: string
}
interface PresentCardProps {
  present: PresentItem
}

const PresentCard = ({ present }: PresentCardProps) => {
  return (
    <PresentCardStyle>
      <img src={present.image} alt="" />
      <Text variant="label2Regular">{present.name}</Text>
    </PresentCardStyle>
  )
}

const PresentList = () => {
  const presents = useContext(PresentContext)
  return (
    <PresentLayout>
      {presents.map(function (Present) {
        return <PresentCard key={Present.themeId} present={Present} />
      })}
    </PresentLayout>
  )
}

const Categories = () => {
  return (
    <Layout>
      <PresentWhoBackGround>
        <PresentWho
          color="gray00"
          padding="spacing4"
          margin="spacing0"
          border="spacing18"
        >
          <PlusButton src={plusicon}></PlusButton>
          <Text variant="subtitle1Bold">선물할 친구를 선택해 주세요</Text>
        </PresentWho>
      </PresentWhoBackGround>

      <Layout>
        <Blank />
        <Text variant="title1Bold">선물 테마</Text>

        <PresentList />
        <Layout>
          <PresentWho
            color="kakaoYellow"
            padding="spacing0"
            margin="spacing4"
            border="spacing3"
          >
            <Text variant="label2Regular">카카오테크 캠퍼스 3기여러분</Text>
            <Text variant="label1Bold">프론트엔드 2단계 과제 화이팅! 🎉</Text>
          </PresentWho>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Categories
