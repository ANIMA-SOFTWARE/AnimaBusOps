import { Fragment } from "hono/jsx/jsx-runtime";
import { NavBar } from "../components/navbar.component";

export const Page = ( props: { children?: any }) => {
  return (
<Fragment>
      <NavBar selectedIndex={0} />
        <div id="modal"></div>
        <main id="main">{props.children}</main>
        <footer id="footer"></footer>
    </Fragment>
  );
};
