import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-gold-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-gold-700">Welcome to Biblical Insights</h1>

      <Card className="border-gold-300 mb-8">
        <CardHeader className="bg-gold-100">
          <CardTitle className="text-gold-800">About Our Community</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gold">
          <p>
            Biblical Insights is a community-driven platform where believers can share their studies, discoveries, and
            theories about the Bible. Our goal is to foster a deeper understanding of Scripture through collaborative
            learning and discussion.
          </p>
          <p>
            Whether you're a seasoned theologian or a curious beginner, you'll find valuable resources and engaging
            conversations here. Join us in exploring the depths of God's Word!
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-gold-300">
          <CardHeader className="bg-gold-100">
            <CardTitle className="text-gold-800">Explore Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dive into a wealth of biblical studies shared by our community members. Gain new insights and perspectives
              on various passages and themes.
            </p>
            <Link href="/studies">
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">View Studies</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-gold-300">
          <CardHeader className="bg-gold-100">
            <CardTitle className="text-gold-800">Explore Theories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Engage with thought-provoking theories about biblical concepts, prophecies, and interpretations shared by
              our community.
            </p>
            <Link href="/theories">
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">View Theories</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

