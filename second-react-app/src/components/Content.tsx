import { useState } from "react";
import AddingMenuBox, { Menu } from "./AddingMenuBox";
import Menucard from "./Menucard";
export const menu: Menu = {
  name: "",
  price: 0,
  isAvilable: false,
};
export function Content() {
  const [menu, setMenu] = useState<Menu>({
    name: "",
    price: 0,
    isAvilable: false,
  });
  return (
    <div className="contentContainer">
      <div className="newMenuButtonContainer">
        <button className="newMenuButton">New Menu</button>
      </div>
      <AddingMenuBox setMenu={setMenu} />
      <Menucard menu={menu} />
    </div>
  );
}
