export const NavBar = (props: { selectedIndex: number; oobSwap?: boolean }) => {
  const selectedIndex = props.selectedIndex;
  return (
    <div id="navbar" class="flex-row center" hx-swap-oob={props.oobSwap}>
      <a
        hx-get="/dashboard"
        hx-target="main"
        selected={selectedIndex === 0 && true}
      >
        Dashboard
      </a>
      <a
        hx-get="/invoicing"
        hx-target="main"
        selected={selectedIndex === 1 && true}
      >
        Invoicing
      </a>
      <a
        hx-get="/expenses"
        hx-target="main"
        selected={selectedIndex === 2 && true}
      >
        Expenses
      </a>
    </div>
  );
};
