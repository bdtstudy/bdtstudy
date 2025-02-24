"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Studies() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ title: "", author: "", content: "", references: "", reflection: "" })
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewPost((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPost.title && newPost.content && newPost.author) {
      setPosts((prev) => [
        {
          id: Date.now(),
          ...newPost,
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ])
      setNewPost({ title: "", author: "", content: "", references: "", reflection: "" })
    }
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-4 bg-gold-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-gold-700">Biblical Studies</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="col-span-1 border-gold-300">
          <CardHeader className="bg-gold-100">
            <CardTitle className="text-gold-800">Recent Studies</CardTitle>
            <CardDescription>Explore the latest studies shared by the community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                placeholder="Search studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
              />
            </div>
            <ScrollArea className="h-[400px] w-full pr-4">
              {filteredPosts.slice(0, 5).map((post) => (
                <Link href={`/post/${post.id}`} key={post.id} className="block mb-4">
                  <Card className="hover:border-gold-400 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg text-gold-700">{post.title}</CardTitle>
                      <CardDescription>
                        By {post.author} • Posted on {new Date(post.timestamp).toLocaleString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{post.content.substring(0, 100)}...</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
              {filteredPosts.length === 0 && <p className="text-center text-gray-500">No studies found.</p>}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Link href="/all-posts" passHref className="w-full">
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">View all studies</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="col-span-1 border-gold-300">
          <CardHeader className="bg-gold-100">
            <CardTitle className="text-gold-800">Share a New Study</CardTitle>
            <CardDescription>Share your discoveries with the community</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium mb-1 text-gold-700">
                  Your Name
                </label>
                <Input
                  id="author"
                  name="author"
                  value={newPost.author}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1 text-gold-700">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                  placeholder="Title of your study"
                  required
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-1 text-gold-700">
                  Content
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={newPost.content}
                  onChange={handleInputChange}
                  placeholder="Describe your biblical discovery or study"
                  rows={6}
                  required
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="references" className="block text-sm font-medium mb-1 text-gold-700">
                  Biblical References
                </label>
                <Input
                  id="references"
                  name="references"
                  value={newPost.references}
                  onChange={handleInputChange}
                  placeholder="E.g., Genesis 1:1, John 3:16"
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="reflection" className="block text-sm font-medium mb-1 text-gold-700">
                  Personal Reflection
                </label>
                <Textarea
                  id="reflection"
                  name="reflection"
                  value={newPost.reflection}
                  onChange={handleInputChange}
                  placeholder="Share your personal reflection on this study"
                  rows={4}
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                Publish Study
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

