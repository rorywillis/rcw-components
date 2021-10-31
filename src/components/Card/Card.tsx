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
import { CardProps, WithLinkProps } from "../types";

const WithLink = (props: WithLinkProps) =>
  props.url ? (
    <LinkOverlay as={Link} to={props.url} w={"100%"}>
      {props.children}
    </LinkOverlay>
  ) : (
    <Box w={"100%"}>{props.children}</Box>
  );

const Card = (props: CardProps) => {
  const { title, padding, url, spacing, ...rest } = props;

  return (
    <Box
      as={url ? LinkBox : undefined}
      _hover={{ shadow: url ? "base" : "initial" }}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"md"}
      borderWidth={1}
      overflow={"hidden"}
      {...rest}
    >
      <WithLink url={url}>
        {props.img && (
          <AspectRatio ratio={16 / 9}>
            <Image w={"100%"} objectFit="cover" src={props.img} fit={"fill"} />
          </AspectRatio>
        )}
        <Stack p={padding ?? 4} spacing={spacing ?? 2} w={"100%"}>
          {title && (
            <Box fontWeight={"semibold"} fontSize={"lg"} noOfLines={2}>
              {title}
            </Box>
          )}
          {props.children}
        </Stack>
      </WithLink>
    </Box>
  );
};

export default Card;
