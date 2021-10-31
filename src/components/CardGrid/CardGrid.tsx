import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
import { CardGridProps } from "../types";

const CardGrid = (props: CardGridProps) => {
  const { items, ...rest } = props;

  if (!items) {
    return null;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={4}
      gap={4}
      {...rest}
    >
      {items.map((item) => (
        <Card {...item} />
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;
