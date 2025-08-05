"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Package, Search, Grid3X3, List, Star, Eye, Plus } from "lucide-react"
import Link from "next/link"

export default function TemplatesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Semua Template", count: 24 },
    { id: "coffee", name: "Kemasan Kopi", count: 8 },
    { id: "food", name: "Kemasan Makanan", count: 6 },
    { id: "cosmetic", name: "Kosmetik & Skincare", count: 4 },
    { id: "tea", name: "Kemasan Teh", count: 3 },
    { id: "snack", name: "Makanan Ringan", count: 3 },
  ]

  const templates = [
    {
      id: 1,
      name: "Drip Bag Coffee Package",
      category: "coffee",
      size: "4.5 x 3.5 cm",
      rating: 4.8,
      downloads: 1250,
      premium: false,
      thumbnail: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Premium Coffee Box",
      category: "coffee",
      size: "10 x 8 x 5 cm",
      rating: 4.9,
      downloads: 890,
      premium: true,
      thumbnail: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Snack Food Pouch",
      category: "food",
      size: "15 x 20 cm",
      rating: 4.7,
      downloads: 2100,
      premium: false,
      thumbnail: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Skincare Product Label",
      category: "cosmetic",
      size: "8 x 12 cm",
      rating: 4.6,
      downloads: 750,
      premium: true,
      thumbnail: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Herbal Tea Box",
      category: "tea",
      size: "12 x 8 x 6 cm",
      rating: 4.8,
      downloads: 650,
      premium: false,
      thumbnail: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Organic Snack Wrapper",
      category: "snack",
      size: "18 x 25 cm",
      rating: 4.5,
      downloads: 980,
      premium: false,
      thumbnail: "/placeholder.svg?height=200&width=200",
    },
  ]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">Ceri Handycraft</span>
            </Link>
            <span className="text-gray-400">|</span>
            <h1 className="text-xl font-semibold">Template Kemasan</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Upload Template
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari template..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-4">Kategori</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id ? "bg-orange-100 text-orange-800" : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-4">Filter</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-1 text-sm">& keatas</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tipe</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Gratis</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Premium</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Template Kemasan</h2>
                <p className="text-gray-600">Ditemukan {filteredTemplates.length} template</p>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Templates Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    {viewMode === "grid" ? (
                      <div>
                        <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                          <img
                            src={template.thumbnail || "/placeholder.svg"}
                            alt={template.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          {template.premium && <Badge className="absolute top-2 right-2 bg-yellow-500">Premium</Badge>}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity space-x-2">
                              <Button size="sm" variant="secondary">
                                <Eye className="w-4 h-4 mr-1" />
                                Preview
                              </Button>
                              <Link href={`/editor/new?template=${template.id}`}>
                                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                  Gunakan
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{template.name}</h3>
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>{template.size}</span>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                              <span>{template.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              {template.downloads.toLocaleString()} downloads
                            </span>
                            <Link href={`/editor/new?template=${template.id}`}>
                              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                Pilih
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center p-4 space-x-4">
                        <img
                          src={template.thumbnail || "/placeholder.svg"}
                          alt={template.name}
                          className="w-20 h-20 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{template.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span>{template.size}</span>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                              <span>{template.rating}</span>
                            </div>
                            <span>{template.downloads.toLocaleString()} downloads</span>
                          </div>
                          {template.premium && <Badge className="bg-yellow-500 text-xs">Premium</Badge>}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Link href={`/editor/new?template=${template.id}`}>
                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                              Pilih
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
