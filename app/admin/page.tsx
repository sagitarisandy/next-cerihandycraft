"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Package,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Edit,
  Download,
  MessageCircle,
  Search,
  Calendar,
  BarChart3,
  FileText,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const queueItems = [
    {
      id: 1,
      projectName: "Kemasan Kopi Premium",
      customerName: "Ahmad Rizki",
      type: "edit",
      status: "pending",
      priority: "high",
      submittedAt: "2024-01-21T10:30:00",
      deadline: "2024-01-23T17:00:00",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      projectName: "Label Skincare Organik",
      customerName: "Sari Dewi",
      type: "print",
      status: "in-progress",
      priority: "medium",
      submittedAt: "2024-01-20T14:15:00",
      deadline: "2024-01-25T12:00:00",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      projectName: "Box Makanan Ringan",
      customerName: "Budi Santoso",
      type: "edit",
      status: "completed",
      priority: "low",
      submittedAt: "2024-01-19T09:00:00",
      deadline: "2024-01-22T16:00:00",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      projectName: "Kemasan Teh Herbal",
      customerName: "Maya Putri",
      type: "print",
      status: "pending",
      priority: "high",
      submittedAt: "2024-01-21T16:45:00",
      deadline: "2024-01-24T10:00:00",
      thumbnail: "/placeholder.svg?height=60&width=60",
    },
  ]

  const stats = {
    totalQueue: queueItems.length,
    pending: queueItems.filter((item) => item.status === "pending").length,
    inProgress: queueItems.filter((item) => item.status === "in-progress").length,
    completed: queueItems.filter((item) => item.status === "completed").length,
    todaySubmissions: 3,
    avgCompletionTime: "2.5 hari",
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Menunggu", variant: "default" as const, className: "bg-yellow-100 text-yellow-800" },
      "in-progress": { label: "Dikerjakan", variant: "default" as const, className: "bg-blue-100 text-blue-800" },
      completed: { label: "Selesai", variant: "default" as const, className: "bg-green-100 text-green-800" },
    }

    const config = statusConfig[status as keyof typeof statusConfig]

    return (
      <Badge variant={config.variant} className={config.className}>
        {config.label}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { label: "Tinggi", className: "bg-red-100 text-red-800" },
      medium: { label: "Sedang", className: "bg-orange-100 text-orange-800" },
      low: { label: "Rendah", className: "bg-gray-100 text-gray-800" },
    }

    const config = priorityConfig[priority as keyof typeof priorityConfig]

    return (
      <Badge variant="outline" className={config.className}>
        {config.label}
      </Badge>
    )
  }

  const getTypeBadge = (type: string) => {
    return <Badge variant="secondary">{type === "edit" ? "Edit" : "Cetak"}</Badge>
  }

  const filteredQueue = queueItems.filter((item) => {
    const matchesFilter = selectedFilter === "all" || item.status === selectedFilter
    const matchesSearch =
      item.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
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
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Support
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Laporan
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Antrian</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalQueue}</div>
              <p className="text-xs text-muted-foreground">+{stats.todaySubmissions} hari ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Menunggu</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <p className="text-xs text-muted-foreground">Perlu ditangani</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dikerjakan</CardTitle>
              <AlertCircle className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
              <p className="text-xs text-muted-foreground">Sedang proses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Selesai Hari Ini</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
              <p className="text-xs text-muted-foreground">Rata-rata: {stats.avgCompletionTime}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="queue" className="space-y-6">
          <TabsList>
            <TabsTrigger value="queue">Antrian</TabsTrigger>
            <TabsTrigger value="analytics">Statistik</TabsTrigger>
            <TabsTrigger value="customers">Pelanggan</TabsTrigger>
          </TabsList>

          <TabsContent value="queue" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Cari proyek atau nama pelanggan..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <div className="flex gap-2">
                    {["all", "pending", "in-progress", "completed"].map((filter) => (
                      <Button
                        key={filter}
                        variant={selectedFilter === filter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedFilter(filter)}
                      >
                        {filter === "all"
                          ? "Semua"
                          : filter === "pending"
                            ? "Menunggu"
                            : filter === "in-progress"
                              ? "Dikerjakan"
                              : "Selesai"}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Queue List */}
            <div className="space-y-4">
              {filteredQueue.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.projectName}
                        className="w-16 h-16 rounded object-cover"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{item.projectName}</h3>
                            <p className="text-gray-600">Pelanggan: {item.customerName}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getTypeBadge(item.type)}
                            {getPriorityBadge(item.priority)}
                            {getStatusBadge(item.status)}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>Dikirim: {new Date(item.submittedAt).toLocaleString("id-ID")}</span>
                            <span>Deadline: {new Date(item.deadline).toLocaleString("id-ID")}</span>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              Lihat
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              Chat
                            </Button>
                            {item.type === "edit" && (
                              <Link href={`/editor/${item.id}`}>
                                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                  <Edit className="w-4 h-4 mr-1" />
                                  Edit
                                </Button>
                              </Link>
                            )}
                            {item.status === "completed" && (
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4 mr-1" />
                                Download
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Statistik Bulanan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Proyek Bulan Ini</span>
                      <span className="font-bold">45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Proyek Selesai</span>
                      <span className="font-bold text-green-600">38</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tingkat Penyelesaian</span>
                      <span className="font-bold">84%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rata-rata Waktu</span>
                      <span className="font-bold">2.5 hari</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Performa Harian
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Proyek Masuk Hari Ini</span>
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Proyek Selesai Hari Ini</span>
                      <span className="font-bold text-green-600">2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Revisi Diminta</span>
                      <span className="font-bold text-orange-600">1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Kepuasan Pelanggan</span>
                      <span className="font-bold">4.8/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Pelanggan</CardTitle>
                <CardDescription>Kelola informasi pelanggan dan riwayat proyek</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Ahmad Rizki", "Sari Dewi", "Budi Santoso", "Maya Putri"].map((customer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{customer}</h3>
                          <p className="text-sm text-gray-500">
                            {Math.floor(Math.random() * 10) + 1} proyek • Bergabung {Math.floor(Math.random() * 12) + 1}{" "}
                            bulan lalu
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Detail
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
