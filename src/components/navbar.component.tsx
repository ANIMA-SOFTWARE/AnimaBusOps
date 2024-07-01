export const NavBar = (props: { selectedIndex: number; oobSwap?: boolean }) => {
  const selectedIndex = props.selectedIndex;
  return (
    <div id="navbar" class="navbar flex-row center" hx-swap-oob={props.oobSwap}>
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
      <div class="subnav">
        <button class="subnavbtn">Inventory <i class="fa fa-caret-down"></i></button>
        <div class="subnav-content center">
          <a
            hx-get="/inventory"
            hx-target="main"
            selected={selectedIndex === 3 && true}
          >
            Inventory
          </a>
        </div> 
      </div>
      <div class="subnav logout">
          <button class="subnavbtn" hx-post="/logout" hx-target="body" hx-replace-url="true">Logout</button>
      </div>
    </div>

  );
};
