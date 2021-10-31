import { BoxProps, StackProps } from "@chakra-ui/layout";
import { StyleProps } from "@chakra-ui/styled-system";

export interface CardProps extends BoxProps, StackProps, StyleProps {
  children: React.ReactNode;
  title?: string;
  img?: string;
  url?: string;
  spacing?: number;
}

export interface WithLinkProps {
    url?: string;
    children: React.ReactNode;
}
export interface CardGridItem extends CardProps {
  key: string;
}

export interface CardGridProps extends StyleProps {
  items: CardGridItem[];
}