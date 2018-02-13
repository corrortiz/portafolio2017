import React from 'react';
import Grid from 'material-ui/Grid';
//Internal Components
import ImageCard from '../../ImageCard/ImageCard';
/**
 * layout of the service roout
 */
const ServicesRoute = () => {
  return (
    <div>
      <Grid
        container
        spacing={16}
        alignItems={'center'}
        justify={'center'}
        alignContent={'center'}
      >
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <ImageCard />
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <ImageCard />
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <ImageCard />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={8}
        alignItems={'center'}
        justify={'center'}
        alignContent={'center'}
      >
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <ImageCard />
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <ImageCard />
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <ImageCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesRoute;
