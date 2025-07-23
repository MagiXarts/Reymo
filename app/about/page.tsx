import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Palette, Heart, GraduationCap } from "lucide-react"

export default function AboutPage() {
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
                  <span>Back to Portfolio</span>
                </Link>
              </Button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Reymo</h1>
              <p className="text-gray-600">Artist & Developer</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Raymond</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate artist exploring the intersection of conceptual art and abstract painting, using color and
                form to reflect on contemporary issues and human experience.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Municipal Academy of Visual Arts, Bilzen (2016)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/raymond-profile.jpg"
                  alt="Raymond Gorissen in front of his geometric abstract artwork"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual Art Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Conceptual Art</h2>
              </div>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Russia's barbaric invasion of Ukraine is the conceptual theme of Raymond's current works. He places
                  everyday objects in a different context and hopes to make the viewer think about the violence in the
                  world in current times.
                </p>
                <p>
                  He supports the resistance against senseless violence and the delusions of an authoritarian madman,
                  the destruction of the culture and the continued suffering of the Ukrainian people.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=250&text=Conceptual+Work+1"
                  alt="Conceptual artwork addressing current events"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=250&text=Conceptual+Work+2"
                  alt="Everyday objects in new context"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Paintings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Paintings</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              After a period of making highly figurative paintings, which he considers 'sins of youth', Raymond has
              completely focused on painting abstract works.
            </p>
          </div>

          <div className="space-y-16">
            {/* Artistic Process */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Artistic Process</h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Raymond paints intuitively, without a preconceived idea. His years of experience and his artistic
                    antennae ensure that a fascinating field of tension is created in his paintings.
                  </p>
                  <p>
                    The overall compositions demonstrate a refined sense of color and contrast. On the one hand, you can
                    speak of a lyrical abstract style building on the expressionist art movements after 1945. They are
                    dreamy, vague images that force introspection. The images were made with great freedom.
                  </p>
                </div>
              </div>
              <Card className="overflow-hidden h-fit">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Abstract+Painting+Process"
                  alt="Abstract painting in progress"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </Card>
            </div>

            {/* Geometric Abstraction */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden h-fit">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Geometric+Abstract+Work"
                  alt="Geometric abstract composition"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </Card>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Geometric Abstraction</h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    On the other hand, his work demonstrates a geometric abstraction in which the composition is built
                    up by juxtaposing colorful, powerful and contrasting surfaces. Raymond is extremely stimulated by
                    this formal language.
                  </p>
                  <p>
                    A style that develops into images with a timeless and open character. The duality in style is bound
                    by the frequent use of blue tones.
                  </p>
                </div>
              </div>
            </div>

            {/* Color Philosophy */}
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Philosophy of Blue</h3>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      The vast blue color of the sky and the oceans symbolizes the infinity in which the human spirit
                      finds its final salvation.
                    </p>
                    <p>
                      In his most recent paintings he flirts with other colors that contrast with each other and compete
                      for the most attention. Sometimes the colors are in harmony with each other, sometimes they clash.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                  <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg"></div>
                  <div className="aspect-square bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
                  <div className="aspect-square bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg"></div>
                </div>
              </div>
            </Card>

            {/* Technical Excellence */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Excellence</h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    It is precisely these contrasts that form the ingredients for a fascinating work of art. In these
                    paintings, the colors show themselves in vertical, horizontal and defined linear surfaces, where the
                    spacing and width of the lines builds up the tension.
                  </p>
                  <p>
                    The works of art are not without obligation but hold the viewer in a fascinating color experience
                    that sticks to the retina. Raymond's perfectionist nature ensures that these acrylic paintings are
                    flawlessly finished, which means they work optimally.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Linear+Composition"
                    alt="Linear abstract composition"
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Color+Contrast+Study"
                    alt="Color contrast study"
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Municipal Academy of Visual Arts</strong>
              </p>
              <p className="text-gray-500 mb-4">Bilzen, Belgium • Graduated in Painting (2016)</p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Raymond Gorissen's formal training in painting provided the foundation for his artistic journey, leading
                him from figurative works to his current focus on abstract and conceptual art.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Art</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover Raymond's complete portfolio of conceptual works and abstract paintings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/">View Portfolio</Link>
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
