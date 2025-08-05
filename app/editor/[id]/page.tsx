"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import {
  Package,
  Type,
  ImageIcon,
  Shapes,
  QrCode,
  Palette,
  Save,
  Download,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Copy,
  Trash2,
  Upload,
  MessageCircle,
  Send,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function EditorPage({ params }: { params: { id: string } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fabric, setFabric] = useState<any>(null)
  const [canvas, setCanvas] = useState<any>(null)
  const [selectedTool, setSelectedTool] = useState("text")
  const [textContent, setTextContent] = useState("")
  const [fontSize, setFontSize] = useState([20])
  const [selectedColor, setSelectedColor] = useState("#000000")

  // Initialize Fabric.js
  useEffect(() => {
    const initFabric = async () => {
      const fabricModule = await import("fabric")
      setFabric(fabricModule)

      if (canvasRef.current) {
        const fabricCanvas = new fabricModule.Canvas(canvasRef.current, {
          width: 800,
          height: 600, 
          backgroundColor: "#ffffff",
        })

        setCanvas(fabricCanvas)

        // Add sample template content
        const rect = new fabric.Rect({
          left: 100,
          top: 100,
          width: 200,
          height: 150,
          fill: "#f0f0f0",
          stroke: "#ccc",
          strokeWidth: 2,
        })

        const text = new fabric.Text("DRIP BAG", {
          left: 150,
          top: 150,
          fontSize: 24,
          fontWeight: "bold",
          fill: "#333",
        })

        fabricCanvas.add(rect)
        fabricCanvas.add(text)

        return () => {
          fabricCanvas.dispose()
        }
      }
    }

    initFabric()
  }, [])

  const addText = () => {
    if (canvas && fabric && textContent) {
      const text = new fabric.Text(textContent, {
        left: 100,
        top: 100,
        fontSize: fontSize[0],
        fill: selectedColor,
      })
      canvas.add(text)
      setTextContent("")
    }
  }

  const addRectangle = () => {
    if (canvas && fabric) {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        fill: selectedColor,
        stroke: "#ccc",
        strokeWidth: 2,
      })
      canvas.add(rect)
    }
  }

  const addCircle = () => {
    if (canvas && fabric) {
      const circle = new fabric.Circle({
        left: 100,
        top: 100,
        radius: 50,
        fill: selectedColor,
        stroke: "#ccc",
        strokeWidth: 2,
      })
      canvas.add(circle)
    }
  }

  const deleteSelected = () => {
    if (canvas) {
      const activeObject = canvas.getActiveObject()
      if (activeObject) {
        canvas.remove(activeObject)
      }
    }
  }

  const saveDesign = () => {
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png")
      console.log("Design saved:", dataURL)
      // Here you would typically save to your backend
    }
  }

  const exportDesign = () => {
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.download = "design.png"
      link.href = dataURL
      link.click()
    }
  }

  const colorPalette = [
    "#000000",
    "#ffffff",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#ffa500",
    "#800080",
    "#ffc0cb",
    "#a52a2a",
    "#808080",
    "#000080",
    "#008000",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">Ceri Handycraft</span>
            </Link>
            <span className="text-gray-400">|</span>
            <div>
              <h1 className="font-semibold">Editor Kemasan</h1>
              <p className="text-sm text-gray-500">Kemasan Parfum - Tersimpan otomatis</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => canvas?.undo?.()}>
              <Undo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => canvas?.redo?.()}>
              <Redo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
            <Button variant="outline" onClick={saveDesign}>
              <Save className="w-4 h-4 mr-2" />
              Simpan
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={exportDesign}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Send className="w-4 h-4 mr-2" />
              Kirim ke Cetak
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - Tools */}
        <div className="w-80 bg-white border-r overflow-y-auto">
          <div className="p-4">
            <Tabs value={selectedTool} onValueChange={setSelectedTool}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="text" className="p-2">
                  <Type className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="image" className="p-2">
                  <ImageIcon className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="shapes" className="p-2">
                  <Shapes className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="qr" className="p-2">
                  <QrCode className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="colors" className="p-2">
                  <Palette className="w-4 h-4" />
                </TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Teks</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Konten Teks</Label>
                      <Input
                        placeholder="Masukkan teks..."
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label>Ukuran Font: {fontSize[0]}px</Label>
                      <Slider value={fontSize} onValueChange={setFontSize} max={72} min={8} step={1} className="mt-2" />
                    </div>

                    <Button onClick={addText} className="w-full bg-orange-500 hover:bg-orange-600">
                      Tambah Teks
                    </Button>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Template Teks:</div>
                      {["DRIP BAG", "Coffee", "NUSANTARA COFFEE", "5 x 12 grams"].map((text, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start bg-transparent"
                          onClick={() => setTextContent(text)}
                        >
                          {text}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="image" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Gambar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600 mb-2">Drag & drop gambar atau klik untuk upload</p>
                      <Button variant="outline" size="sm">
                        Pilih File
                      </Button>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">Gambar Template:</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="aspect-square bg-gray-100 rounded border cursor-pointer hover:border-orange-500"
                          >
                            <img
                              src={`/placeholder.svg?height=80&width=80&query=coffee icon ${i}`}
                              alt={`Template ${i}`}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shapes" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bentuk</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" onClick={addRectangle}>
                        <div className="w-6 h-4 bg-current rounded-sm mr-2"></div>
                        Persegi
                      </Button>
                      <Button variant="outline" onClick={addCircle}>
                        <div className="w-5 h-5 bg-current rounded-full mr-2"></div>
                        Lingkaran
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="qr" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">QR Code</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>URL atau Teks</Label>
                      <Input placeholder="https://example.com" />
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Generate QR Code</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="colors" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Warna</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Warna Terpilih</Label>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-8 h-8 rounded border" style={{ backgroundColor: selectedColor }}></div>
                        <Input
                          type="color"
                          value={selectedColor}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className="w-16 h-8 p-0 border-0"
                        />
                        <span className="text-sm font-mono">{selectedColor}</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">Palet Warna:</Label>
                      <div className="grid grid-cols-5 gap-2 mt-2">
                        {colorPalette.map((color, index) => (
                          <button
                            key={index}
                            className={`w-8 h-8 rounded border-2 ${
                              selectedColor === color ? "border-gray-800" : "border-gray-300"
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          {/* Canvas Toolbar */}
          <div className="bg-white border-b p-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-sm">100%</span>
              <Button variant="ghost" size="sm">
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <RotateCw className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={deleteSelected}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-sm text-gray-600">4.5 cm × 3.5 cm</div>
          </div>

          {/* Canvas */}
          <div className="flex-1 bg-gray-100 p-8 overflow-auto">
            <div className="flex items-center justify-center h-full">
              <div className="bg-white shadow-lg rounded-lg p-4">
                <canvas ref={canvasRef} className="border" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-white border-l overflow-y-auto">
          <div className="p-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Properti Objek</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Posisi X</Label>
                  <Input type="number" placeholder="0" />
                </div>
                <div>
                  <Label>Posisi Y</Label>
                  <Input type="number" placeholder="0" />
                </div>
                <div>
                  <Label>Lebar</Label>
                  <Input type="number" placeholder="100" />
                </div>
                <div>
                  <Label>Tinggi</Label>
                  <Input type="number" placeholder="100" />
                </div>
                <div>
                  <Label>Rotasi: 0°</Label>
                  <Slider defaultValue={[0]} max={360} min={-360} step={1} className="mt-2" />
                </div>
                <div>
                  <Label>Opacity: 100%</Label>
                  <Slider defaultValue={[100]} max={100} min={0} step={1} className="mt-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Ukuran Template</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Lebar Template</Label>
                  <div className="flex items-center space-x-2">
                    <Input type="number" defaultValue="4.5" />
                    <span className="text-sm">cm</span>
                  </div>
                </div>
                <div>
                  <Label>Tinggi Template</Label>
                  <div className="flex items-center space-x-2">
                    <Input type="number" defaultValue="3.5" />
                    <span className="text-sm">cm</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Terapkan Ukuran
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                    <span className="text-sm">Text: DRIP BAG</span>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm">Rectangle</span>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
