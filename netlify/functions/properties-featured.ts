import { Handler } from '@netlify/functions';

// Embedded data for Netlify deployment
const properties = [
  {
    "id": "prop-001",
    "title": "Oceanfront Luxury Condo",
    "description": "Stunning oceanfront condominium with panoramic Atlantic Ocean views. This luxury unit features floor-to-ceiling windows, a gourmet kitchen with premium appliances, and a spacious master suite with ocean views. The building offers resort-style amenities including a pool, fitness center, and private beach access.",
    "price": 2750000,
    "address": "123 Ocean Drive",
    "city": "Vero Beach",
    "state": "FL",
    "zipCode": "32963",
    "bedrooms": 3,
    "bathrooms": 2.5,
    "sqft": 2100,
    "lotSize": "N/A",
    "propertyType": "Condo",
    "status": "For Sale",
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
    ],
    "features": [
      "Ocean views",
      "Private balcony",
      "Gourmet kitchen",
      "Master suite",
      "Resort amenities",
      "Beach access"
    ],
    "mlsNumber": "RX-10987654",
    "agentId": "agent-001",
    "isFeatured": true,
    "createdAt": "2024-01-15T00:00:00.000Z"
  },
  {
    "id": "prop-002",
    "title": "Modern Family Estate",
    "description": "Exceptional modern family home in a prestigious neighborhood. This custom-built estate features an open floor plan, chef's kitchen, home theater, and resort-style backyard with pool and spa. Perfect for entertaining and family living with premium finishes throughout.",
    "price": 875000,
    "address": "456 Palm Avenue",
    "city": "Stuart",
    "state": "FL",
    "zipCode": "34994",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 3200,
    "lotSize": "0.75 acres",
    "propertyType": "Single Family",
    "status": "For Sale",
    "images": [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    ],
    "features": [
      "Open floor plan",
      "Chef's kitchen",
      "Home theater",
      "Pool and spa",
      "3-car garage",
      "Premium finishes"
    ],
    "mlsNumber": "RX-10876543",
    "agentId": "agent-004",
    "isFeatured": true,
    "createdAt": "2024-01-20T00:00:00.000Z"
  },
  {
    "id": "prop-003",
    "title": "Waterfront Cottage",
    "description": "Charming waterfront cottage with private dock and stunning river views. This cozy home has been recently updated with modern amenities while maintaining its coastal charm. Perfect for boating enthusiasts with deep water access and covered boat slip.",
    "price": 650000,
    "address": "789 River Road",
    "city": "Jupiter",
    "state": "FL",
    "zipCode": "33477",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 1800,
    "lotSize": "0.5 acres",
    "propertyType": "Single Family",
    "status": "Sold",
    "images": [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    ],
    "features": [
      "Waterfront location",
      "Private dock",
      "Deep water access",
      "Covered boat slip",
      "Updated kitchen",
      "Coastal charm"
    ],
    "mlsNumber": "RX-10765432",
    "agentId": "agent-001",
    "isFeatured": true,
    "createdAt": "2023-12-10T00:00:00.000Z"
  }
];

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    if (event.httpMethod === 'GET') {
      const featuredProperties = properties.filter(property => property.isFeatured);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(featuredProperties)
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  } catch (error) {
    console.error('Failed to fetch featured properties:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch featured properties' })
    };
  }
};