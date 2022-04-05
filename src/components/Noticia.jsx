import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          alt={`imagen de la noticia ${title}`}
          height="206"
          width="368"
          image={urlToImage || 'https://via.placeholder.com/150'}
        />

        <CardContent>
          <Typography variant="body1" color="primary" component="h2">
            {source.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            sx={{
              textAlign: 'center',
              width: '100%',
              textDecoration: 'none',
              color: 'white',
              padding: '4px 6px',
              backgroundColor: '#0066ff',
              borderRadius: '5px',
              '&:hover': {
                backgroundColor: '#2c7bf1',
              },
            }}
          >
            Leer mas
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
