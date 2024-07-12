import { menu } from "./Content";
export interface Menu {
  name: string;
  price: number;
  isAvilable: boolean;
}
export default function AddingMenuBox(props: any) {
  return (
    <div className="addingMenuBoxContainer">
      <div className="inputs">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            menu.name = event?.target.value;
          }}
        />
      </div>
      <div className="inputs">
        <label>Price:</label>
        <input
          type="number"
          onChange={(event) => {
            menu.price = Number(event?.target.value);
          }}
        />
      </div>
      <div className="inputs">
        <input
          type="checkbox"
          onChange={(event) => {
            menu.isAvilable = !menu.isAvilable;
          }}
        />
        <label>Is Available</label>
      </div>
      <button
        onClick={() => {
          console.log(menu);
          props.setMenu(menu);
        }}
        className="addMenuButton"
      >
        Add Menu
      </button>
    </div>
  );
}
