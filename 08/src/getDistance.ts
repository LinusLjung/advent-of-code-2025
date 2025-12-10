import type { Box } from 'Box';

export function getDistance(box1: Box, box2: Box) {
  return Math.sqrt(Math.pow(box1.x - box2.x, 2) + Math.pow(box1.y - box2.y, 2) + Math.pow(box1.z - box2.z, 2));
}
