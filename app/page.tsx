"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Raymond Gorissen</h1>
              <p className="text-gray-600">Artist • Conceptual & Abstract Painter</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Hi, I'm Raymond Gorissen!</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              An artist exploring conceptual art and abstract painting, creating works that reflect on contemporary
              issues and the human experience through color, form, and meaning.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into my artistic practice spanning conceptual installations and abstract paintings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Conceptual Art</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm">
                  Addressing contemporary issues through everyday objects placed in new contexts, particularly focusing
                  on the Ukraine conflict.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Abstract Paintings</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm">
                  Intuitive works exploring color relationships, particularly the symbolism of blue and the infinite
                  nature of human spirit.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">G</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Geometric Works</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm">
                  Precise compositions built from contrasting surfaces and linear elements, creating timeless visual
                  tensions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">Explore Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About the Artist</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                After a period of making highly figurative paintings, which I consider 'sins of youth', I have
                completely focused on painting abstract works. I paint intuitively, without a preconceived idea.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My current conceptual works address Russia's barbaric invasion of Ukraine, placing everyday objects in
                different contexts to make viewers reflect on violence and resistance.
              </p>
              <Button asChild size="lg">
                <Link href="/about">Learn More About My Journey</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-red-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 border-4 border-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold">RG</span>
                    </div>
                    <p className="text-lg font-medium">Raymond Gorissen</p>
                    <p className="text-sm opacity-90">Artist & Painter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in my work or have a project in mind? I'd love to hear from you. Send me a message and let's
              discuss art, exhibitions, or collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in touch</h3>
                <p className="text-gray-600 mb-6">
                  I'm always open to discussing new opportunities, exhibitions, collaborations, or just having a
                  conversation about art and creativity.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="mailto:hello@reymo.eu"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@reymo.eu</span>
                </Link>
                <Link
                  href="https://github.com/reymo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/reymo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Raymond Gorissen. All rights reserved.
            </p>
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="flex items-center space-x-2">
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
