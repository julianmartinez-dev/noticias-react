import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticiasProvider";

function App() {
  
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography component="h1" variant="h3" align="center" marginY={5}>
            Buscador de noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
  );
}

export default App
