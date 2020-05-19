import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';

const HomePage = () => (
    <Layout>hello world</Layout>
);

const mapStateToProps = () => ({ });

export default (
  connect(
    mapStateToProps,
    null
  )(HomePage)
);
