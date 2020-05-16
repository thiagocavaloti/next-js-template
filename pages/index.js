import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout';

const HomePage = () => (
    <div>
      <Layout>
          <Grid container spacing={0}>
          <Container>
            <Grid item xs={12} sm={12}>
              HELLO WORLD!
            </Grid>
          </Container>
          </Grid>
      </Layout>
    </div>
);

const mapStateToProps = () => ({ });

export default (
  connect(
    mapStateToProps,
    null
  )(HomePage)
);
