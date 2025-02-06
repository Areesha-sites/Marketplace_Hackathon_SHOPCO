import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function shippoOrder(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
    const { addressFrom, addressTo, parcels, orderId, totalAmount } = req.body;
    try {
        const response = await axios.post(
            "https://api.goshippo.com/shipments/",
            {
                address_from: addressFrom,
                address_to: addressTo,
                parcels,
                async: false,
            },
            {
                headers: {
                    Authorization: `ShippoToken shippo_test_41ce080ca4af761b4041a1bcaeb6b5adaad23003`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Full Shipment Response:", response.data);
        const shipment = response.data;
        const trackingNumber = shipment.object_id
        const eta = shipment.eta || "3-5 business days";
        res.status(200).json({
            orderId,
            totalAmount,
            trackingNumber, 
            eta,           
            status: "Shipment created successfully!",
        });
    } catch (error: any) {
        console.error("Error creating shipment:", error.response?.data || error.message);
        res.status(500).json({ message: "Failed to create shipment", error: error.response?.data });
    }
}