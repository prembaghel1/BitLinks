import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function page({params}) {
    const surl = await params.shorturl

    const client = await clientPromise
    const db = client.db("BitLinks")
    const collection = db.collection("URLs")

    const doc = await collection.findOne({ shorturl: surl })
    console.log(doc)
    if (doc) {
        redirect(doc.url)
    }else{
        redirect(process.env.NEXT_PUBLIC_HOST)
    }

}
