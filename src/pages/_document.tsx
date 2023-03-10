import {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentProps,
} from "next/document";

export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.__NEXT_DATA__.props.initialLanguage}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
