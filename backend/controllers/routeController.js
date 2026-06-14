const Road = require("../models/Road");
const dijkstra = require("../utils/dijkstra");

const findRoute = async (req, res) => {
    try {

        console.log("BODY =", req.body);

const { source, destination } = req.body || {};

        if (!source || !destination) {
            return res.status(400).json({
                message: "Source and destination are required"
            });
        }

        // Fetch roads from MongoDB
        const roads = await Road.find();

        // Build Graph
        const graph = {};

        roads.forEach((road) => {

            if (!graph[road.source]) {
                graph[road.source] = [];
            }

            if (!graph[road.destination]) {
                graph[road.destination] = [];
            }

            // Undirected Graph
            graph[road.source].push({
                node: road.destination,
                distance: road.distance
            });

            graph[road.destination].push({
                node: road.source,
                distance: road.distance
            });
        });

        const result = dijkstra(
            graph,
            source,
            destination
        );

        return res.status(200).json(result);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    findRoute
};