import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Card from "../Card";

interface CardGridItem {
  key: string;
  children: React.ReactNode;
  title?: string;
  img?: string;
  url?: string;
  spacing?: number;
  padding?: number;
}

interface Props {
  items: CardGridItem[];
}

const CardGrid = (props: Props) => {
  const { items } = props;

  if (!items) {
    return null;
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} gap={4}>
      {items.map((item) => (
        <Card {...item} />
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;
