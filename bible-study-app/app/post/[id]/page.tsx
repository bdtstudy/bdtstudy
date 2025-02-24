"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PostDetail({ params }: { params: { id: string } }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({ name: "", content: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewComment((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.name && newComment.content) {
      setComments((prev) => [
        {
          id: Date.now(),
          ...newComment,
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ])
      setNewComment({ name: "", content: "" })
    }
  }

  return (
    <div className="container mx-auto p-4 bg-gold-50">
      <Link href="/studies" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Studies
      </Link>

      <Card className="mb-6 border-gold-300">
        <CardHeader className="bg-gold-100">
          <CardTitle className="text-gold-800">Study on Genesis {params.id}</CardTitle>
          <CardDescription>
            By User{params.id} • Posted {params.id} hour(s) ago
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            This is an example of detailed content for the biblical study. It describes the discovery or interpretation
            that the user has shared about a specific Bible passage.
          </p>
          <p className="text-gray-700 mb-4">
            Multiple paragraphs can be included to explain the study in depth, citing relevant verses and providing
            historical or linguistic context if necessary.
          </p>
          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="font-semibold mb-2">Biblical References:</h3>
            <ul className="list-disc list-inside">
              <li>Genesis 1:1-3</li>
              <li>John 3:16-17</li>
              <li>Romans 8:28</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6 border-gold-300">
        <CardHeader className="bg-gold-100">
          <CardTitle className="text-gold-800">Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.name}`} />
                  <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-sm text-gray-600">{comment.content}</p>
                  <p className="text-xs text-gray-400">{new Date(comment.timestamp).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
            />
            <Textarea
              name="content"
              value={newComment.content}
              onChange={handleInputChange}
              placeholder="Add your comment here..."
              rows={3}
              required
              className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
            />
            <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white">
              Post Comment
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

