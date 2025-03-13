"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertCircle,
  Download,
  Eye,
  File,
  FileText,
  Image,
  MoreHorizontal,
  Plus,
  Trash2,
  Upload,
  X,
} from "lucide-react"
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from "firebase/storage"
import { useToast } from "@/hooks/use-toast"

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

// Document type definition
type Document = {
  id: string
  name: string
  type: string
  size: number
  category: string
  uploadDate: Date
  url: string
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  // Fetch documents on component mount


  const fetchDocuments = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // In a real app, you would fetch documents for the current user
      // For demo purposes, we'll simulate some documents
      const userId = "user123" // This would come from authentication
      const storageRef = ref(storage, `documents/${userId}`)

      const result = await listAll(storageRef)

      const docs = await Promise.all(
        result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef)
          const name = itemRef.name
          const type = name.split(".").pop() || ""
          const category = name.includes("academic")
            ? "academic"
            : name.includes("financial")
              ? "financial"
              : name.includes("personal")
                ? "personal"
                : "other"

          return {
            id: itemRef.name,
            name: name,
            type: type,
            size: 1024 * 1024 * Math.random(), // Simulated size
            category: category,
            uploadDate: new Date(),
            url: url,
          }
        }),
      )

      setDocuments(docs)
    } catch (err) {
      console.error("Error fetching documents:", err)
      setError("Failed to load documents. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  useState(() => {
    fetchDocuments()
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const file = files[0]
    setIsUploading(true)
    setUploadProgress(0)

    // Create a storage reference
    const userId = "user123" // This would come from authentication
    const category = selectedCategory === "all" ? "other" : selectedCategory
    const fileName = `${category}_${Date.now()}_${file.name}`
    const storageRef = ref(storage, `documents/${userId}/${fileName}`)

    // Upload file
    const uploadTask = uploadBytesResumable(storageRef, file)

    // Monitor upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setUploadProgress(progress)
      },
      (error) => {
        console.error("Upload failed:", error)
        setIsUploading(false)
        toast({
          title: "Upload Failed",
          description: "There was an error uploading your file. Please try again.",
          variant: "destructive",
        })
      },
      async () => {
        // Upload completed successfully
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

        const newDocument: Document = {
          id: fileName,
          name: file.name,
          type: file.name.split(".").pop() || "",
          size: file.size,
          category: category,
          uploadDate: new Date(),
          url: downloadURL,
        }

        setDocuments((prev) => [...prev, newDocument])
        setIsUploading(false)

        toast({
          title: "Upload Successful",
          description: "Your document has been uploaded successfully.",
        })

        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      },
    )
  }

  const handleDeleteDocument = async (document: Document) => {
    try {
      const userId = "user123" // This would come from authentication
      const storageRef = ref(storage, `documents/${userId}/${document.id}`)

      await deleteObject(storageRef)

      setDocuments((prev) => prev.filter((doc) => doc.id !== document.id))

      toast({
        title: "Document Deleted",
        description: "The document has been deleted successfully.",
      })
    } catch (err) {
      console.error("Error deleting document:", err)
      toast({
        title: "Delete Failed",
        description: "There was an error deleting the document. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="h-6 w-6 text-red-500" />
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <Image className="h-6 w-6 text-blue-500" />
      default:
        return <File className="h-6 w-6 text-gray-500" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const filteredDocuments =
    selectedCategory === "all" ? documents : documents.filter((doc) => doc.category === selectedCategory)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Manager</h1>
          <p className="text-muted-foreground">Upload, organize, and manage your important documents securely</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => fileInputRef.current?.click()}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
        </div>
      </div>

      {isUploading && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Upload className="mr-2 h-4 w-4 text-primary" />
                <span>Uploading document...</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsUploading(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Progress value={uploadProgress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">{Math.round(uploadProgress)}% complete</p>
          </CardContent>
        </Card>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          <DocumentList
            documents={filteredDocuments}
            isLoading={isLoading}
            onDelete={handleDeleteDocument}
            getFileIcon={getFileIcon}
            formatFileSize={formatFileSize}
          />
        </TabsContent>

        <TabsContent value="academic" className="mt-6">
          <DocumentList
            documents={filteredDocuments}
            isLoading={isLoading}
            onDelete={handleDeleteDocument}
            getFileIcon={getFileIcon}
            formatFileSize={formatFileSize}
          />
        </TabsContent>

        <TabsContent value="financial" className="mt-6">
          <DocumentList
            documents={filteredDocuments}
            isLoading={isLoading}
            onDelete={handleDeleteDocument}
            getFileIcon={getFileIcon}
            formatFileSize={formatFileSize}
          />
        </TabsContent>

        <TabsContent value="personal" className="mt-6">
          <DocumentList
            documents={filteredDocuments}
            isLoading={isLoading}
            onDelete={handleDeleteDocument}
            getFileIcon={getFileIcon}
            formatFileSize={formatFileSize}
          />
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Document Upload Guidelines</CardTitle>
          <CardDescription>Follow these guidelines to ensure your documents are properly processed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium">Accepted File Types</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>PDF documents (.pdf)</li>
                <li>Microsoft Word documents (.doc, .docx)</li>
                <li>Images (.jpg, .jpeg, .png)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">File Requirements</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Maximum file size: 10MB</li>
                <li>Clear, legible content</li>
                <li>Complete documents (all pages included)</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">
            All documents are encrypted and stored securely. Only you and authorized financial aid providers can access
            them.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

interface DocumentListProps {
  documents: Document[]
  isLoading: boolean
  onDelete: (document: Document) => void
  getFileIcon: (type: string) => React.ReactNode
  formatFileSize: (bytes: number) => string
}

function DocumentList({ documents, isLoading, onDelete, getFileIcon, formatFileSize }: DocumentListProps) {
  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (documents.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-muted p-4 mb-4">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No documents found</h3>
          <p className="text-muted-foreground text-center max-w-md mb-4">
            You haven't uploaded any documents in this category yet. Upload documents to keep them organized and easily
            accessible.
          </p>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {documents.map((document) => (
            <div key={document.id} className="flex items-center gap-4 p-3 rounded-lg border">
              <div className="h-12 w-12 flex items-center justify-center rounded bg-muted">
                {getFileIcon(document.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium truncate">{document.name}</h4>
                  <Badge variant="outline" className="ml-2">
                    {document.type.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{formatFileSize(document.size)}</span>
                  <span className="mx-2">•</span>
                  <span>{document.uploadDate.toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={document.url} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={document.url} download={document.name}>
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <a href={document.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href={document.url} download={document.name} className="cursor-pointer">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onDelete(document)} className="text-red-600 cursor-pointer">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

