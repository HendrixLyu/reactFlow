import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "A could Drag&Drop" } },
  {
    id: "b",
    type: "position-logger",
    position: { x: -300, y: 0 },
    data: { label: "B with position:" },
  },
  { id: "c", position: { x: -100, y: 200 }, data: { label: "C" } },
  {
    id: "d",
    type: "output",
    position: { x: -100, y: 300 },
    data: { label: "D" },
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
} satisfies NodeTypes;
