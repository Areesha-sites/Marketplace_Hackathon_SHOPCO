import { Phone } from "lucide-react";

const shippo = require("shippo")("shippo_test_d93a9282f20851194f3843fc333b6ec4408c1494");
export default async function handler(req, res) {
  if(req.method === "POST") {
    try {
      const shipment = await shippo.shipment.create({
        address_from : {
          name: "Sender Name",
          street1: "1234 Sender St",
          city: "San Francisco",
          state: "CA",
          zip: "94111",
          country: "US",
          phone: "514-555-124",
          email: "sender@example.com"
        },
      address_to: {
        name: "Recipient Name",
        street1: "5678 Recipient Rd",
        city: "Los Angeles",
        state: "CA",
        zip: "90001",
        country: "US",
        phone: "213-555-6789",
        email: "recipient@example.com"
      },
      parcels: [
        {
          length: 5,
          width: 5,
        height: 5,
        distance_unit: "in",
        weight: 1,
      mass_unit: "1b"
      }
      ]
      });
      res.status(200).json({success: true, shipment});

    }
    catch(error) {
      res.status(500).json({success: false, error: error.message})
    }
  } else {
    res.status(405).json({success: false, message: "Method not Allowded"})
  }
}