import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.scss';

class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = () => ({ });

export default (
  connect(
    mapStateToProps
  )(Layout)
);
