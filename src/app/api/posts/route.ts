import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM products"); // Fetch posts
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
//write a post request with Products interface to add a data
interface Product {
    id?: number;
    name: string;
    image:string;
    price: number;
    description: string;
    quantity:string
    created_at:Date

}

export async function POST(request: Request) {
    try {
        const product: Product = await request.json();
        const {id, name,description,image, price,quantity } = product;
        const created_at = new Date();

        const [result] = await pool.query(
            "INSERT INTO products (id,name, description,image,price,quantity,created_at) VALUES (?, ?, ?,?,?,?,?)",
            [id,name,description,image, price,quantity,created_at ]
        );

        return NextResponse.json({ product }, { status: 201 });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
    }
}