import { useState } from "react";
import mock_present from "@/mock_present";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Text from "@/components/Text";
import IndexBadge from "@/components/IndexBadge";
import ProductImage from "./ProductImage";
import MoreButton from "./MoreButton";


const ProductGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [];
  for (let i = 1; i <= 21; i++) {
    const item = { ...mock_present[0], id: i };
    products.push(item);
  }

  const visibleCount = showAll ? 21 : 6;
  const visibleProducts = products.slice(0, visibleCount);

  return (
    <>
      <Grid gap="spacing2">
        {visibleProducts.map((item, idx) => (
          <Card key={item.id} borderRadius="spacing02">
            <IndexBadge backGroundColor={idx < 3 ? "critical" : "gray400"}>{idx + 1}</IndexBadge>
            <ProductImage src={item.imageURL} alt={item.name} />
            <div style={{ padding: "12px" }}>
              
              <Text variant="subtitle2Regular" margin="spacing0" padding="spacing0" color="textSub">{item.brandInfo.name}</Text>
              <Text variant="subtitle2Regular" margin="spacing0" padding="spacing0">{item.brandInfo.name}</Text>
              <Text variant="title2Bold" margin="spacing0" padding="spacing0">{item.price.sellingPrice.toLocaleString()} 원</Text>
   
            </div>
          </Card>
        ))}
      </Grid>
      <MoreButton onClick={() => setShowAll((prev) => !prev)}>
        {showAll ? "접기" : "더보기"}
      </MoreButton>
    </>
  );
};

export default ProductGrid;