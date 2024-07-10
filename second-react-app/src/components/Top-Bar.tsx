interface Props {
  city: string;
}

export default function TopBar(props: Props) {
  return (
    <div className="topBar">
      <h4>Foodie POS</h4>
      <h4>{props.city}</h4>
      <h4>Log Out</h4>
    </div>
  );
}
