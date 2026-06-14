function dijkstra(graph, source, destination) {

    // Java: HashMap<String,Integer>
    const distances = {};

    // Java: HashMap<String,String>
    const parent = {};

    // Java: HashSet<String>
    const visited = new Set();

    // Initialize
    for (const node in graph) {
        distances[node] = Infinity;
        parent[node] = null;
    }

    distances[source] = 0;

    while (true) {

        // Java:
        // int min = Integer.MAX_VALUE;
        // String current = null;

        let current = null;
        let minDistance = Infinity;

        // Find node with minimum distance
        for (const node in distances) {

            if (
                !visited.has(node) &&
                distances[node] < minDistance
            ) {
                minDistance = distances[node];
                current = node;
            }
        }

        // No path exists
        if (current === null) {
            break;
        }

        // Destination reached
        if (current === destination) {
            break;
        }

        visited.add(current);

        // Relaxation
        for (const neighbor of graph[current]) {

            const nextNode = neighbor.node;
            const weight = neighbor.distance;

            const newDistance =
                distances[current] + weight;

            if (newDistance < distances[nextNode]) {

                distances[nextNode] = newDistance;

                parent[nextNode] = current;
            }
        }
    }

    // Build path
    const path = [];

    let current = destination;

    while (current !== null) {

        path.unshift(current);

        current = parent[current];
    }

    return {
        path,
        totalDistance: distances[destination]
    };
}

module.exports = dijkstra;