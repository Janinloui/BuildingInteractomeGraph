// Utility for finding and highlighting shortest paths in the graph

/**
 * Find the shortest path between two node ids in a graph data object.
 * Returns an array of node ids in the path (including start and end), or [] if not found.
 */
function findShortestPath(graphData, startId, endId) {
  const queue = [[startId]];
  const visited = new Set([startId]);
  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (node === endId) return path;
    // Find all neighbors (outgoing and incoming)
    graphData.links.forEach(link => {
      // Fix: always compare by id string, not object
      const srcId = typeof link.source === 'object' ? link.source.id : link.source;
      const tgtId = typeof link.target === 'object' ? link.target.id : link.target;
      let neighbor = null;
      if (srcId === node) neighbor = tgtId;
      else if (tgtId === node) neighbor = srcId;
      if (neighbor && !visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    });
  }
  return [];
}

/**
 * Given a path (array of node ids), returns a Set of links (from graphData.links)
 * that are part of the path (in order).
 */
function getLinksInPath(graphData, path) {
  const linksInPath = new Set();
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i], b = path[i + 1];
    // Find the link (either direction)
    const link = graphData.links.find(
      l => (l.source === a && l.target === b) || (l.source === b && l.target === a)
    );
    if (link) linksInPath.add(link);
  }
  return linksInPath;
}

/**
 * Configuration for path highlighting.
 * Map: ClickedNodeId -> Array of TargetNodeIds
 */
window.pathHighlightConfig = {
  'Floors.boundary': ['KPI.gfa', 'Shape.area'],
  'ArchFloorFinish.thickness': ['Slab.capacity', 'Slab.mass', 'Slab.cost','KPI.carbonEmissions'],
  // Add more: 'ClickedNodeId': ['TargetNodeId1', 'TargetNodeId2', ...]
};

window.findShortestPath = findShortestPath;
