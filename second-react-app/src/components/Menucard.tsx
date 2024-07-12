interface Menu {
  name: string;
  price: number;
  isAvilable: boolean;
}
interface Props {
  menu: Menu;
}

export default function Menucard(props: Props) {
  const menu = props.menu;
  return (
    <div
      style={{
        backgroundColor: "yellow",
        maxWidth: "200px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ padding: 0, marginBottom: "10px" }}>{menu.name}</h3>
      <span style={{ marginBottom: "10px" }}>{menu.price}</span>
      <span style={{ marginBottom: "10px" }}>{menu.isAvilable}</span>
    </div>
  );
}
