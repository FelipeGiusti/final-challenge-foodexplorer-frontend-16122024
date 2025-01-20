import { forwardRef } from 'react';
import { Container } from './styles.js';

export const Button = forwardRef(({ loading = false, children, ...rest }, ref) => {
  return (
    <Container isLoading={loading} {...rest} ref={ref} >
      {children}
    </Container>
  );
});
