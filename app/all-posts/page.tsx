"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function AllPosts() {
  // In a real application, this data would come from a database
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-4 bg-gold-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-gold-700">All Posts</h1>

      <div className="mb-6">
        <Input
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto border-gold-300 focus:border-gold-500 focus:ring-gold-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <Card className="hover:border-gold-400 transition-colors">
              <CardHeader className="bg-gold-100">
                <CardTitle className="text-gold-800">{post.title}</CardTitle>
                <CardDescription>
                  By {post.author} • Posted on {new Date(post.timestamp).toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{post.content.substring(0, 150)}...</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && <p className="text-center text-gray-500 mt-6">No posts found.</p>}
    </div>
  )
}

