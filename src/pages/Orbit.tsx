import { CanvasView } from "../context";
import { Satellites } from "./Satellites";

export function Orbit() {
  return <>
    <div className="absolute top-60 left-80">
      <CanvasView />
    </div>
    <div className="flex w-full items-end justify-end pl-30 pr-0 gap-16">
      <Satellites />
    </div>
  </>;
}
