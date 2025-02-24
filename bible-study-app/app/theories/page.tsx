"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Theories() {
  const [theories, setTheories] = useState([])
  const [newTheory, setNewTheory] = useState({ title: "", author: "", content: "" })
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewTheory((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTheory.title && newTheory.content && newTheory.author) {
      setTheories((prev) => [
        {
          id: Date.now(),
          ...newTheory,
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ])
      setNewTheory({ title: "", author: "", content: "" })
    }
  }

  const filteredTheories = theories.filter(
    (theory) =>
      theory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theory.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto p-4 bg-gold-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-gold-700">Biblical Theories</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="col-span-1 border-gold-300">
          <CardHeader className="bg-gold-100">
            <CardTitle className="text-gold-800">Recent Theories</CardTitle>
            <CardDescription>Explore the latest theories shared by the community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                placeholder="Search theories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
              />
            </div>
            <div className="space-y-4">
              {filteredTheories.map((theory) => (
                <Card key={theory.id} className="hover:border-gold-400 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg text-gold-700">{theory.title}</CardTitle>
                    <CardDescription>
                      By {theory.author} • Posted on {new Date(theory.timestamp).toLocaleString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{theory.content.substring(0, 150)}...</p>
                  </CardContent>
                </Card>
              ))}
              {filteredTheories.length === 0 && <p className="text-center text-gray-500">No theories found.</p>}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 border-gold-300">
          <CardHeader className="bg-gold-100">
            <CardTitle className="text-gold-800">Share a New Theory</CardTitle>
            <CardDescription>Share your biblical theories with the community</CardDescription>
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
                  value={newTheory.author}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1 text-gold-700">
                  Theory Title
                </label>
                <Input
                  id="title"
                  name="title"
                  value={newTheory.title}
                  onChange={handleInputChange}
                  placeholder="Title of your theory"
                  required
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-1 text-gold-700">
                  Theory Content
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={newTheory.content}
                  onChange={handleInputChange}
                  placeholder="Describe your biblical theory"
                  rows={6}
                  required
                  className="border-gold-300 focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                Publish Theory
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

