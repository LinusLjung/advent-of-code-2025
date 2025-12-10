import type { Box } from 'Box';
import { findShortestUnconnected } from 'findShortestUnconnected';

export function makePair(boxes: Box[], circuits: Box[][]) {
  const shortest = findShortestUnconnected(boxes);
  const box1 = shortest;
  const box2 = box1.closest!.box;
  const box1Circuit = findCircuit(box1, circuits);
  const box2Circuit = findCircuit(box2, circuits);
  box1.connections.push(box2);
  box2.connections.push(box1);
  box1.closest = null;
  box2.closest = null;

  if (box1Circuit !== -1 && box2Circuit !== -1 && box1Circuit === box2Circuit) {
    return;
  }

  if (box1Circuit === -1 && box2Circuit === -1) {
    circuits.push([box1, box2]);
    return;
  }

  if (box1Circuit !== -1 && box2Circuit === -1) {
    circuits[box1Circuit].push(box2);
    return;
  }

  if (box1Circuit === -1 && box2Circuit !== -1) {
    circuits[box2Circuit].push(box1);
    return;
  }

  if (box1Circuit !== -1 && box2Circuit !== -1) {
    circuits[box1Circuit].push(...circuits[box2Circuit]);
    circuits.splice(box2Circuit, 1);
    return;
  }
}

export function findCircuit(box: Box, circuits: Box[][]) {
  for (let i = 0; i < circuits.length; i++) {
    const circuit = circuits[i];

    if (circuit.includes(box)) {
      return i;
    }
  }

  return -1;
}
