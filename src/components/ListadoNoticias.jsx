import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
  const { noticias } = useNoticias();

  return (
    <>
      <Typography component="h2" variant="h3" align="center" marginY={5}>
        Ultimas Noticias
      </Typography>

      <Grid container spacing={3}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.url} />
        ))}
      </Grid>
    </>
  );
};

export default ListadoNoticias;
