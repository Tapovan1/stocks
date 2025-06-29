# School Stock Management System

A comprehensive web application for managing school inventory including furniture, equipment, and supplies.

## Features

### Core Functionality
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality for stock items
- **Item Categories**: Desks, Chairs, Tables, Benches, Whiteboards, Computers, Projectors, Cabinets, Bookshelves, Fans, and more
- **Item Tracking**: Name, Category, Quantity, Location, Condition, and Date of Entry
- **Dashboard**: Overview with statistics and alerts

### Advanced Features
- **Search & Filter**: Real-time search by name/location with category and condition filters
- **Sorting**: Sort by quantity, date, name, or category in ascending/descending order
- **Low Stock Alerts**: Automatic alerts for items with quantity ≤ 5
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Tech Stack
- **Frontend**: React 18 (JSX), React Router, React Bootstrap, Axios
- **Backend**: Node.js, Express.js, MongoDB with Mongoose
- **Styling**: Bootstrap 5, Custom CSS with animations
- **Development**: Vite, Concurrently for concurrent development

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Compass)
- npm or yarn package manager

## Installation

1. **Clone and setup the project:**
   ```bash
   git clone <repository-url>
   cd school-stock-management
   npm run install:all
   ```

2. **Start MongoDB:**
   - Make sure MongoDB is running locally on port 27017
   - Or use MongoDB Compass to connect to your local instance

3. **Start the development server:**
   ```bash
   npm run dev
   ```

This will start both the Express server (port 5000) and React development server (port 5173) concurrently.

## API Endpoints

### Stock Management
- `GET /api/stock` - Get all stock items
- `GET /api/stock/:id` - Get single stock item
- `POST /api/stock` - Create new stock item
- `PUT /api/stock/:id` - Update stock item
- `DELETE /api/stock/:id` - Delete stock item

### Health Check
- `GET /api/health` - Server health status

## Usage

1. **Dashboard**: View overall statistics, low stock alerts, and recent additions
2. **Stock List**: Browse, search, filter, and sort all inventory items
3. **Add Item**: Create new stock entries with all required information
4. **Edit Item**: Update existing items including quantity and condition
5. **Delete Item**: Remove items from inventory with confirmation

## Database Schema

```javascript
{
  name: String (required),
  category: String (required, enum),
  quantity: Number (required, min: 0),
  location: String (required),
  condition: String (required, enum: 'Good', 'Fair', 'Repair Needed'),
  dateOfEntry: Date (default: now),
  timestamps: true
}
```

## Development

- **Client**: React development server with hot reload
- **Server**: Express server with nodemon for auto-restart
- **Database**: MongoDB with Mongoose ODM
- **Proxy**: Vite proxy configuration for API calls during development

## Production Build

```bash
cd client
npm run build
```

The build files will be in `client/dist` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.#   T a p o v a n - s t o c k  
 