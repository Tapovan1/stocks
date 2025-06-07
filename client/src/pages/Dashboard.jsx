import { useState, useEffect } from 'react'
import { Row, Col, Card, Badge, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getStockItems } from '../services/api'

function Dashboard() {
  const [stats, setStats] = useState({
    totalItems: 0,
    lowStockItems: 0,
    categories: 0,
    locations: 0
  })
  const [lowStockItems, setLowStockItems] = useState([])
  const [recentItems, setRecentItems] = useState([])

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await getStockItems()
      const items = response.data

      const lowStock = items.filter(item => item.quantity <= 5)
      const categories = [...new Set(items.map(item => item.category))].length
      const locations = [...new Set(items.map(item => item.location))].length
      const recent = items.sort((a, b) => new Date(b.dateOfEntry) - new Date(a.dateOfEntry)).slice(0, 5)

      setStats({
        totalItems: items.length,
        lowStockItems: lowStock.length,
        categories,
        locations
      })
      setLowStockItems(lowStock)
      setRecentItems(recent)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    }
  }

  const getConditionBadgeVariant = (condition) => {
    switch (condition.toLowerCase()) {
      case 'good': return 'success'
      case 'fair': return 'warning'
      case 'repair needed': return 'danger'
      default: return 'secondary'
    }
  }

  return (
    <div className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 mb-0">Dashboard</h1>
        <Link to="/add" className="btn btn-primary btn-custom">
          <i className="bi bi-plus-circle me-2"></i>
          Add New Item
        </Link>
      </div>

      {/* Stats Cards */}
      <Row className="mb-4">
        <Col lg={3} md={6} className="mb-3">
          <Card className="stats-card h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="mb-1">Total Items</h5>
                <h2 className="mb-0">{stats.totalItems}</h2>
              </div>
              <i className="bi bi-boxes stats-icon"></i>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} className="mb-3">
          <Card className="h-100" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', border: 'none', borderRadius: '1rem'}}>
            <Card.Body className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="mb-1">Low Stock</h5>
                <h2 className="mb-0">{stats.lowStockItems}</h2>
              </div>
              <i className="bi bi-exclamation-triangle stats-icon"></i>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} className="mb-3">
          <Card className="h-100" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', border: 'none', borderRadius: '1rem'}}>
            <Card.Body className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="mb-1">Categories</h5>
                <h2 className="mb-0">{stats.categories}</h2>
              </div>
              <i className="bi bi-tags stats-icon"></i>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} className="mb-3">
          <Card className="h-100" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white', border: 'none', borderRadius: '1rem'}}>
            <Card.Body className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="mb-1">Locations</h5>
                <h2 className="mb-0">{stats.locations}</h2>
              </div>
              <i className="bi bi-geo-alt stats-icon"></i>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-danger text-white">
              <h5 className="mb-0">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Low Stock Alert
              </h5>
            </Card.Header>
            <Card.Body>
              {lowStockItems.length === 0 ? (
                <p className="text-muted text-center py-3">No low stock items</p>
              ) : (
                <ListGroup variant="flush">
                  {lowStockItems.map((item) => (
                    <ListGroup.Item key={item._id} className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{item.name}</strong>
                        <br />
                        <small className="text-muted">{item.location}</small>
                      </div>
                      <Badge bg="danger">{item.quantity} left</Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card className="h-100">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-clock-history me-2"></i>
                Recent Additions
              </h5>
            </Card.Header>
            <Card.Body>
              {recentItems.length === 0 ? (
                <p className="text-muted text-center py-3">No items found</p>
              ) : (
                <ListGroup variant="flush">
                  {recentItems.map((item) => (
                    <ListGroup.Item key={item._id} className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{item.name}</strong>
                        <br />
                        <small className="text-muted">{item.category} • {item.location}</small>
                      </div>
                      <Badge bg={getConditionBadgeVariant(item.condition)}>
                        {item.condition}
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard