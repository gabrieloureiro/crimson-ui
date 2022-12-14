import { css } from '@crimson-ui/web';

export const Text = css({
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
});
