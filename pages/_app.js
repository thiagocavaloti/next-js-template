import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import theme from '../theme';
import initStore from '../utils/store';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
        <style jsx>{`
          @font-face {
            font-family: 'Roboto Condensed';
                src: url('/fonts/RobotoCondensed-Regular.ttf');
          }
      `}</style>
      </Provider>
      </ThemeProvider>
    );
  }
}


export default withRedux(initStore)(MyApp);
