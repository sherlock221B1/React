import { Content } from "./Content";
import { SideBar } from "./Side-Bar";

export function Body() {
  return (
    <div className="body">
      <SideBar />
      <Content />
    </div>
  );
}
