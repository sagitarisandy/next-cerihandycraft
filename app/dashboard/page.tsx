"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  Plus,
  Eye,
  Edit,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Download,
  BarChart3,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [projects] = useState([
    {
      id: 1,
      name: "Kemasan Kopi Drip Bag",
      template: "Coffee Package",
      status: "completed",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-20",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Box Makanan Ringan",
      template: "Snack Box",
      status: "in-progress",
      createdAt: "2024-01-18",
      updatedAt: "2024-01-19",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Label Produk Skincare",
      template: "Product Label",
      status: "pending",
      createdAt: "2024-01-20",
      updatedAt: "2024-01-20",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Kemasan Teh Herbal",
      template: "Tea Package",
      status: "draft",
      createdAt: "2024-01-21",
      updatedAt: "2024-01-21",
      thumbnail: "/placeholder.svg?height=100&width=100",
    },
  ])

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      draft: { label: "Draft", variant: "secondary" as const, icon: Edit },
      pending: { label: "Menunggu", variant: "default" as const, icon: Clock },
      "in-progress": { label: "Dalam Proses", variant: "default" as const, icon: AlertCircle },
      completed: { label: "Selesai", variant: "default" as const, icon: CheckCircle },
    }

    const config = statusConfig[status as keyof typeof statusConfig]
    const Icon = config.icon

    return (
      <Badge
        variant={config.variant}
        className={
          status === "completed"
            ? "bg-green-100 text-green-800"
            : status === "in-progress"
              ? "bg-blue-100 text-blue-800"
              : status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
        }
      >
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    )
  }

  const stats = {
    totalProjects: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "in-progress").length,
    pending: projects.filter((p) => p.status === "pending").length,
  }

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
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Support
            </Button>
            <Link href="/templates">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                Proyek Baru
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Proyek</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProjects}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Selesai</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dalam Proses</CardTitle>
              <AlertCircle className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Menunggu</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Proyek Saya</TabsTrigger>
            <TabsTrigger value="history">Riwayat</TabsTrigger>
            <TabsTrigger value="analytics">Statistik</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Proyek Saya</h2>
              <Link href="/templates">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Buat Proyek Baru
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription>{project.template}</CardDescription>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Dibuat: {new Date(project.createdAt).toLocaleDateString("id-ID")}</span>
                      <span>Update: {new Date(project.updatedAt).toLocaleDateString("id-ID")}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Link href={`/editor/${project.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Riwayat Proyek</CardTitle>
                <CardDescription>Semua proyek yang pernah Anda buat dan statusnya</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src={project.thumbnail || "/placeholder.svg"}
                          alt={project.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{project.name}</h3>
                          <p className="text-sm text-gray-500">{project.template}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {getStatusBadge(project.status)}
                        <span className="text-sm text-gray-500">
                          {new Date(project.updatedAt).toLocaleDateString("id-ID")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Statistik Proyek
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Proyek Selesai</span>
                      <span className="font-bold text-green-600">{stats.completed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rata-rata per Bulan</span>
                      <span className="font-bold">2.5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Template Favorit</span>
                      <span className="font-bold">Coffee Package</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Aktivitas Bulan Ini
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Proyek Baru</span>
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Proyek Selesai</span>
                      <span className="font-bold text-green-600">1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Waktu Rata-rata</span>
                      <span className="font-bold">5 hari</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
