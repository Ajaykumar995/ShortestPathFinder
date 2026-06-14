# 🗺️ PathFinder – Smart City Navigation System

PathFinder is a full-stack smart city navigation system that computes the shortest route between landmarks using **Dijkstra's Algorithm**. The project demonstrates the practical implementation of graph algorithms integrated with modern web technologies.

---

## 🚀 Features

* ✅ Shortest path computation using Dijkstra's Algorithm
* ✅ Dynamic graph generation from MongoDB
* ✅ Source and destination landmark selection
* ✅ Route visualization with step-by-step navigation timeline
* ✅ Interactive and responsive user interface
* ✅ Real-time route optimization
* ✅ Full-stack architecture using React and Node.js
* ✅ MongoDB-based landmark and road management

---

## 🏗️ Tech Stack

### Frontend

* React.js
* CSS3
* Fetch API

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Algorithm

* Dijkstra's Algorithm
* Weighted Graph Representation
* Adjacency List

---

## ⚙️ How It Works

1. Landmarks are stored as graph nodes in MongoDB.
2. Roads between landmarks are stored as weighted edges.
3. The backend dynamically builds an adjacency list.
4. Dijkstra's Algorithm computes the shortest path between the selected landmarks.
5. The result is returned to the frontend and displayed as a navigation timeline.

---

## 📂 Project Structure

```text
ShortestPathFinder/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── seed/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🧠 Dijkstra's Algorithm

PathFinder models the city as a weighted graph:

* **Landmarks → Nodes**
* **Roads → Edges**
* **Distance → Edge Weight**

The shortest path is calculated using Dijkstra's Algorithm.

### Time Complexity

```
O(E log V)
```

Where:

* `V` = Number of vertices (landmarks)
* `E` = Number of edges (roads)

---

## ▶️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/Ajaykumar995/ShortestPathFinder.git
cd ShortestPathFinder
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🌟 Future Enhancements

* Fastest Route Optimization
* Traffic-Aware Navigation
* Larger Landmark Dataset
* Route Analytics Dashboard
* User Authentication
* Favorite Routes

---

## 👨‍💻 Author

**P Ajay Kumar**

GitHub: https://github.com/Ajaykumar995

---

## 📌 Project Objective

The objective of this project is to demonstrate the real-world implementation of graph algorithms by integrating Dijkstra's Algorithm into a full-stack web application capable of solving shortest path problems in a smart city environment.
