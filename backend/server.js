const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Sample floor plan data
const floorPlanData = {
  rooms: [
    { name: 'Living Room', width: 400, height: 300, position: { x: 50, y: 50 } },
    { name: 'Bedroom', width: 300, height: 250, position: { x: 500, y: 50 } },
  ],
  walls: [
    { length: 400, position: { x: 50, y: 50 } },
    { length: 300, position: { x: 500, y: 50 } },
  ],
  doors: [
    { position: 'center', room: 'Living Room' },
    { position: 'left', room: 'Bedroom' },
  ],
  windows: [
    { position: 'right', room: 'Living Room' },
    { position: 'center', room: 'Bedroom' },
  ],
};

// API endpoint
app.get('/api/floorplan', (req, res) => {
  res.json(floorPlanData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});