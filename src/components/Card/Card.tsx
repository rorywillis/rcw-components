import {
  Box,
  useColorModeValue,
  Image,
  LinkBox,
  Stack,
  LinkOverlay,
  AspectRatio,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  img?: string;
  url?: string;
  spacing?: number;
  padding?: number;
}

interface WithLinkProps {
    url?: string;
    children: React.ReactNode;
}

const WithLink = (props: WithLinkProps) => props.url ?
    <LinkOverlay as={Link} to={props.url}>
      {props.children}
    </LinkOverlay>
    : <Box>{props.children}</Box>;

const Card = (props: CardProps) => {
  const { title, padding, url, spacing } = props;

  return (
    <Box
      as={url ? LinkBox : undefined}
      _hover={{ shadow: url ? "base" : "initial" }}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"md"}
      borderWidth={1}
      overflow={"hidden"}
    >
      <WithLink url={url}>
        {props.img && (
          <AspectRatio ratio={16 / 9}>
            <Image w={"100%"} objectFit="cover" src={props.img} fit={"fill"} />
          </AspectRatio>
        )}
        <Stack p={padding ?? 4} spacing={spacing ?? 2}>
            {title && <Box fontWeight={'semibold'} fontSize={'lg'} noOfLines={2}>{title}</Box>}
          {props.children}
        </Stack>
      </WithLink>
    </Box>
  );
};

export default Card;
