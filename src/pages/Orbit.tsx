import { CanvasView } from "../context";
import { Satellites } from "./Satellites";

export function Orbit() {
  return (
    <div className="flex w-full justify-center items-center p-8 gap-16">
      <CanvasView />
      <Satellites />
    </div>
  );
}
