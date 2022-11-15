import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Backtrack-Chat</title>

        <meta
          name="description"
          content="Backtrack-Chat is a chat application for event management site Backtrack."
        />

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
