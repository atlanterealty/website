import { Handler } from '@netlify/functions';

// Embedded agents data for Netlify deployment
const agents = [
  {
    "id": "agent-001",
    "name": "Quinesha Nikki Hawkins",
    "title": "Broker/Owner/Developer",
    "bio": "Nikki Hawkins is a real estate broker, community developer, and founder of Jumpstart Treasure Coast, where she created the Keys to Home Pathway™ to help local families move from renting to owning. Through Atlante Realty, Nikki serves residential, commercial, and small-scale development clients across the Treasure Coast—pairing clear strategy, smart partnerships, and measurable community impact on every deal.",
    "specialties": ["Residential Brokerage", "Commercial Development", "Community Development", "Real Estate Consulting"],
    "email": "info@atlanterealtytc.com",
    "phone": "(561) 494-5026",
    "image": "/images/nikki-hawkins.jpg",
    "serviceArea": "Stuart, Treasure Coast - Martin, St. Lucie, and Indian River Counties",
    "yearsExperience": "Local Expert",
    "totalSales": "Community Impact Focus",
    "calendlyLink": "https://calendly.com/atlante-realty",
    "isActive": true
  }
];

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    if (event.httpMethod === 'GET') {
      // Check if there's an ID parameter for single agent lookup
      const pathSegments = event.path.split('/');
      const agentId = pathSegments[pathSegments.length - 1];
      
      if (agentId && agentId !== 'agents') {
        // Get single agent
        const agent = agents.find(agent => agent.id === agentId);
        if (!agent) {
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: 'Agent not found' })
          };
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(agent)
        };
      } else {
        // Get all agents
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(agents)
        };
      }
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  } catch (error) {
    console.error('Failed to fetch agents:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch agents' })
    };
  }
};