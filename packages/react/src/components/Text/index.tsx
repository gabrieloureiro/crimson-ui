import { Text as TextCSS } from '@crimson-ui/styles';
import { styled } from '@crimson-ui/web';
import React, { ComponentProps, ElementRef, forwardRef } from 'react';

const StyledText = styled('p', TextCSS);

export type TextProps = ComponentProps<typeof StyledText> & {
  as?: 'p' | 'span' | 'strong';
};

export const Text = forwardRef<ElementRef<typeof StyledText>, TextProps>(
  ({ children, as = 'p', ...props }, forwardedRef) => {
    return (
      <StyledText as={as} ref={forwardedRef} {...props}>
        {children}
      </StyledText>
    );
  },
);

Text.displayName = 'Text';
