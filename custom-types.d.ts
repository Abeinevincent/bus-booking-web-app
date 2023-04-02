import { Box as ChakraBox, BoxProps as ChakraBoxProps } from '@chakra-ui/react';

declare module '@chakra-ui/react' {
  export interface BoxProps extends ChakraBoxProps {}
  export const Box: typeof ChakraBox;
}
