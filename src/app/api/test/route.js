import clientPromise from "@/lib/db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("testdb");
    const collection = db.collection("test");

    // insert a test doc
    await collection.insertOne({ message: "Hello MongoDB!" });

    // fetch all docs
    const docs = await collection.find({}).toArray();

    return new Response(JSON.stringify(docs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
