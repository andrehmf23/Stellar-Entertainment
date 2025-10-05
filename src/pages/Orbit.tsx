import { CanvasView } from "../context";
import { Satellites } from "./Satellites";

export function Orbit() {
  return (
    <div className="flex items-center p-8 gap-8">
      
      <CanvasView />
      <Satellites />
    </div>
  );
}
