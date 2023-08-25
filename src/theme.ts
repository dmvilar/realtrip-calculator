// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.300', // Set your desired background color here
      },
    },
  },
});

export default theme;
