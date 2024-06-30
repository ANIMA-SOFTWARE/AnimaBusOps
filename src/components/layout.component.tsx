import { NavBar } from "./navbar.component";
export const Layout = (props: { children?: any }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@1.9.12/dist/htmx.js"
          integrity="sha384-qbtR4rS9RrUMECUWDWM2+YGgN3U4V4ZncZ0BvUcg9FGct0jqXz3PUdVpU1p0yrXS"
          crossorigin="anonymous"
        ></script>
        <script src="/src/static/index.js"></script>
        <title>Anima Business Operations</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link rel="stylesheet" href="/src/static/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body class="flex-col">
        {props.children}
      </body>
    </html>
  );
};
