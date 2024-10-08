export function directionToOffset(direction) {
  switch (direction.toString().toLowerCase()) {
    case "down":
      return { x: 0, y: 1, z: 0 };
    case "east":
      return { x: -1, y: 0, z: 0 };
    case "north":
      return { x: 0, y: 0, z: 1 };
    case "south":
      return { x: 0, y: 0, z: -1 };
    case "up":
      return { x: 0, y: -1, z: 0 };
    case "west":
      return { x: 1, y: 0, z: 0 };
  }
}
