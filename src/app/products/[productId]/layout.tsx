import { Container } from '@mui/material';

export default function ProductDetailLayoyt({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Container>
        <h1>Recomendations</h1>
      </Container>
    </>
  );
}
