import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' />
          <link rel='icon' href='/static/img/logoIT3K-Loading.png' sizes='32x32' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' />
          <link rel='stylesheet' type='text/css' charset='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.12.3/antd.min.css' />
          <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet' />
          <script src='https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js' />
          <link rel='stylesheet' href='../static/css/animate.css' />
          <meta name="theme-color" content="#C49AAB" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Head>
        <body>
          <NextScript />
          <Main />
        </body>
      </html>
    )
  }
}
