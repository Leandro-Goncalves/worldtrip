import { Image } from "@chakra-ui/react";

export function Logo() {
  return(
    <Image
      src="/logo.svg"
      alt="Worldtrip"
      w={["81px", "auto"]}
    />
  );
}