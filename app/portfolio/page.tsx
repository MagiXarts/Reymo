"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, Filter } from "lucide-react"

// Categories for Raymond's artwork
const categories = [
  { id: "all", name: "All Works", count: 12 },
  { id: "conceptual", name: "Conceptual Art", count: 4 },
  { id: "abstract", name: "Abstract Paintings", count: 5 },
  { id: "geometric", name: "Geometric Works", count: 3 },
]

// Raymond's artwork projects organized by category
const projects = [
  // Conceptual Art
  {
    id: 1,
    title: "Ukraine Series - Resistance",
    shortDescription: "Conceptual works addressing Russia's invasion of Ukraine",
    fullDescription:
      "This series places everyday objects in a different context to make viewers reflect on the violence in our current world. Through conceptual art, Raymond supports the resistance against senseless violence and the delusions of an authoritarian madman, highlighting the destruction of culture and the continued suffering of the Ukrainian people.",
    image: "/placeholder.svg?height=300&width=400&text=Ukraine+Series",
    medium: ["Conceptual Art", "Mixed Media", "Found Objects"],
    year: "2022-2024",
    dimensions: "Various sizes",
    category: "conceptual",
  },
  {
    id: 2,
    title: "Objects of Memory",
    shortDescription: "Everyday objects transformed into symbols of resistance",
    fullDescription:
      "Common household items are repositioned and recontextualized to create powerful statements about human resilience and the impact of conflict on daily life. Each piece invites contemplation about the ordinary made extraordinary through circumstance.",
    image: "/placeholder.svg?height=300&width=400&text=Objects+of+Memory",
    medium: ["Installation", "Found Objects", "Mixed Media"],
    year: "2023",
    dimensions: "Site-specific",
    category: "conceptual",
  },
  {
    id: 3,
    title: "Voices of Silence",
    shortDescription: "Interactive installation about suppressed voices",
    fullDescription:
      "An immersive installation that addresses themes of censorship and the silencing of dissent. Visitors are invited to interact with elements that reveal hidden messages and stories of those who cannot speak freely.",
    image: "/placeholder.svg?height=300&width=400&text=Voices+of+Silence",
    medium: ["Interactive Installation", "Sound", "Mixed Media"],
    year: "2023",
    dimensions: "4 x 3 x 2.5 m",
    category: "conceptual",
  },
  {
    id: 4,
    title: "Cultural Fragments",
    shortDescription: "Exploring the destruction and preservation of culture",
    fullDescription:
      "This work examines how cultural identity persists even in the face of systematic destruction. Fragments of traditional objects are combined with contemporary materials to create new narratives of survival and continuity.",
    image: "/placeholder.svg?height=300&width=400&text=Cultural+Fragments",
    medium: ["Mixed Media", "Collage", "Found Objects"],
    year: "2024",
    dimensions: "Various sizes",
    category: "conceptual",
  },

  // Abstract Paintings
  {
    id: 5,
    title: "Blue Infinity",
    shortDescription: "Abstract paintings exploring the symbolism of blue",
    fullDescription:
      "The vast blue color of the sky and oceans symbolizes the infinity in which the human spirit finds its final salvation. These large-scale abstract works are dominated by various blue tones, creating dreamy, contemplative spaces that force introspection and connect viewers to the boundless nature of existence.",
    image: "/placeholder.svg?height=300&width=400&text=Blue+Infinity",
    medium: ["Acrylic on Canvas"],
    year: "2023",
    dimensions: "120 x 100 cm",
    category: "abstract",
  },
  {
    id: 6,
    title: "Color Dialogues",
    shortDescription: "Explorations of color harmony and contrast",
    fullDescription:
      "In these recent paintings, Raymond flirts with colors that contrast with each other and compete for attention. Sometimes the colors are in harmony, sometimes they clash. It is precisely these contrasts that form the ingredients for fascinating works of art that hold the viewer in a captivating color experience.",
    image: "/placeholder.svg?height=300&width=400&text=Color+Dialogues",
    medium: ["Acrylic on Canvas"],
    year: "2024",
    dimensions: "90 x 70 cm",
    category: "abstract",
  },
  {
    id: 7,
    title: "Expressionist Reflections",
    shortDescription: "Lyrical abstractions building on post-1945 movements",
    fullDescription:
      "These works represent a lyrical abstract style building on the expressionist art movements after 1945. They are dreamy, vague images that force introspection, made with great freedom. The paintings demonstrate Raymond's refined sense of color and contrast, creating contemplative spaces for viewers.",
    image: "/placeholder.svg?height=300&width=400&text=Expressionist+Reflections",
    medium: ["Acrylic on Canvas"],
    year: "2022-2023",
    dimensions: "130 x 110 cm",
    category: "abstract",
  },
  {
    id: 8,
    title: "Emotional Landscapes",
    shortDescription: "Abstract interpretations of inner emotional states",
    fullDescription:
      "These paintings translate complex emotional experiences into abstract visual language. Using intuitive brushwork and spontaneous color choices, Raymond creates landscapes of the mind that resonate with universal human experiences of joy, sorrow, hope, and contemplation.",
    image: "/placeholder.svg?height=300&width=400&text=Emotional+Landscapes",
    medium: ["Acrylic on Canvas", "Mixed Media"],
    year: "2023",
    dimensions: "100 x 80 cm",
    category: "abstract",
  },
  {
    id: 9,
    title: "Rhythmic Abstractions",
    shortDescription: "Musical influences translated into visual rhythm",
    fullDescription:
      "Inspired by musical compositions, these abstract works explore rhythm, tempo, and harmony through color and form. The paintings capture the essence of musical movement, creating visual symphonies that engage viewers in a synesthetic experience.",
    image: "/placeholder.svg?height=300&width=400&text=Rhythmic+Abstractions",
    medium: ["Acrylic on Canvas"],
    year: "2024",
    dimensions: "110 x 90 cm",
    category: "abstract",
  },

  // Geometric Works
  {
    id: 10,
    title: "Geometric Tensions",
    shortDescription: "Geometric abstractions with powerful color contrasts",
    fullDescription:
      "These works demonstrate geometric abstraction where compositions are built up by juxtaposing colorful, powerful and contrasting surfaces. Raymond is extremely stimulated by this formal language, developing images with a timeless and open character. The geometric forms create fascinating fields of tension.",
    image: "/placeholder.svg?height=300&width=400&text=Geometric+Tensions",
    medium: ["Acrylic on Canvas"],
    year: "2023",
    dimensions: "100 x 80 cm",
    category: "geometric",
  },
  {
    id: 11,
    title: "Linear Compositions",
    shortDescription: "Abstract works with defined linear surfaces",
    fullDescription:
      "These paintings show colors in vertical, horizontal and defined linear surfaces, where the spacing and width of the lines builds up tension. The linear elements create rhythm and movement across the canvas, demonstrating Raymond's perfectionist nature in creating flawlessly finished acrylic paintings.",
    image: "/placeholder.svg?height=300&width=400&text=Linear+Compositions",
    medium: ["Acrylic on Canvas"],
    year: "2023-2024",
    dimensions: "110 x 90 cm",
    category: "geometric",
  },
  {
    id: 12,
    title: "Structured Harmonies",
    shortDescription: "Precise geometric forms in balanced compositions",
    fullDescription:
      "These works explore the relationship between mathematical precision and artistic expression. Using carefully calculated proportions and systematic color relationships, Raymond creates compositions that are both intellectually satisfying and emotionally resonant.",
    image: "/placeholder.svg?height=300&width=400&text=Structured+Harmonies",
    medium: ["Acrylic on Canvas", "Digital Planning"],
    year: "2024",
    dimensions: "120 x 120 cm",
    category: "geometric",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
              <p className="text-gray-600">Raymond Gorissen</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Portfolio</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore my artistic journey through different mediums and themes, from conceptual installations addressing
              contemporary issues to abstract paintings exploring color, form, and human experience.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>12 Artworks</span>
              <span>•</span>
              <span>3 Categories</span>
              <span>•</span>
              <span>2022-2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 capitalize">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.medium.slice(0, 2).map((medium) => (
                          <Badge key={medium} variant="outline">
                            {medium}
                          </Badge>
                        ))}
                        {project.medium.length > 2 && <Badge variant="outline">+{project.medium.length - 2}</Badge>}
                      </div>
                      <p className="text-sm text-gray-500">{project.year}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="capitalize">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                  </DialogHeader>
                  <div className="space-y-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                    <DialogDescription className="text-base leading-relaxed">
                      {project.fullDescription}
                    </DialogDescription>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Medium & Technique</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.medium.map((medium) => (
                            <Badge key={medium} variant="secondary">
                              {medium}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Details</h4>
                        <p className="text-sm text-gray-600">Year: {project.year}</p>
                        <p className="text-sm text-gray-600">Dimensions: {project.dimensions}</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No artworks found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in My Work?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn more about my artistic journey and philosophy, or get in touch to discuss exhibitions and
            collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/about">About the Artist</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Raymond Gorissen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
