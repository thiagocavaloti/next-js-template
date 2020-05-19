import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import './index.scss';

const Layout = ({ children }) => (
  <Container>
    <Grid item xs={12} sm={12}>
      {children}
    </Grid>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = () => ({ });

export default (
  connect(
    mapStateToProps
  )(Layout)
);
