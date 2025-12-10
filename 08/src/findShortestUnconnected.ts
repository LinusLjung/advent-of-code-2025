import type { Box } from 'Box';
import { getDistance } from 'getDistance';


export function findShortestUnconnected(boxes: Box[]) {
  for (const box1 of boxes) {
    if (box1.closest) {
      continue;
    }

    let shortestDistance = Infinity;

    for (const box2 of boxes) {
      if (box1 === box2) {
        continue;
      }

      if (box1.connections.includes(box2)) {
        continue;
      }

      const distance = getDistance(box1, box2);

      if (distance < shortestDistance) {
        shortestDistance = distance;
        box1.closest = { box: box2, distance };
      }
    }
  }

  let shortest = boxes[0];

  for (const box of boxes) {
    if (box.closest!.distance < shortest.closest!.distance) {
      shortest = box;
    }
  }

  return shortest;
}
