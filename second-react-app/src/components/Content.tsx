import Count from "./Count";

export function Content() {
  return (
    <div className="contentContainer">
      <div className="newMenuButtonContainer">
        <button className="newMenuButton">New Menu</button>
      </div>
      <Count />
    </div>
  );
}
