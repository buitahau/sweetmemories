import { createFileRoute, redirect } from '@tanstack/react-router'
import { authClient } from '../../lib/auth-client'
import { Header } from '../../components/layout/Header'
import { Sidebar } from '../../components/layout/Sidebar'
import { useImageUpload } from '../../hooks/useImageUpload'
import { useInfiniteImages } from '../../hooks/useInfiniteImages'
import { useRef, useEffect, useState } from 'react'
import { ImageList, ImageListItem, CircularProgress } from '@mui/material'

export const Route = createFileRoute('/admin/upload')({
  loader: async () => {
    const session = await authClient.getSession()
    if (!session.data) {
      throw redirect({ to: '/login' })
    }
    return { session: session.data }
  },
  component: UploadPage,
})

function UploadPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})
  const uploadMutation = useImageUpload()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteImages()
  const observerTarget = useRef<HTMLDivElement>(null)

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1 }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setUploading(true)
    const fileArray = Array.from(files)

    for (const file of fileArray) {
      // Validate file type
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert(`${file.name}: Only JPG and PNG files are allowed`)
        continue
      }

      // Validate file size
      if (file.size > 50 * 1024 * 1024) {
        alert(`${file.name}: File size exceeds 50MB limit`)
        continue
      }

      try {
        setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }))
        await uploadMutation.mutateAsync(file)
        setUploadProgress((prev) => ({ ...prev, [file.name]: 100 }))
      } catch (error) {
        alert(`Failed to upload ${file.name}: ${error}`)
      }
    }

    setUploading(false)
    setUploadProgress({})
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    handleFileSelect(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const allImages = data?.pages.flatMap((page) => page.images) || []

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header variant="admin" />
        <div className="flex-1 overflow-y-auto p-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50 mb-2">
                Upload Photos
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Add new memories to your digital archive and organize them into collections.
              </p>
            </div>

            {/* Dropzone */}
            <div
              className="border-2 border-dashed border-primary/30 dark:bg-primary/5 rounded-3xl p-12 text-center flex flex-col items-center justify-center transition-all hover:border-primary hover:bg-primary/10 group cursor-pointer mb-12"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files)}
              />
              <div className="size-20 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl text-white">upload_file</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Drag and drop photos here</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
                Supports JPG and PNG up to 50MB each. You can select multiple files at once.
              </p>
              <button className="bg-primary hover:bg-primary/90 font-bold px-8 py-3 rounded-xl transition-all shadow-md text-white">
                Browse Computer
              </button>
            </div>

            {/* Active Uploads */}
            {uploading && Object.keys(uploadProgress).length > 0 && (
              <div className="mt-12 mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">pending_actions</span>
                  Active Uploads
                </h3>
                <div className="space-y-4">
                  {Object.entries(uploadProgress).map(([fileName, progress]) => (
                    <div
                      key={fileName}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="size-12 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden shrink-0">
                          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">image</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-bold truncate">{fileName}</p>
                            <span className="text-xs font-bold text-primary">{progress}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full shadow-lg shadow-primary/20 transition-all"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery */}
            {allImages.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">photo_library</span>
                  Your Photos
                </h3>
                <ImageList cols={3} gap={16}>
                  {allImages.map((image) => (
                    <ImageListItem key={image.id}>
                      <img
                        src={image.thumbnail}
                        alt={image.fileName}
                        loading="lazy"
                        className="rounded-xl object-cover w-full h-full"
                        style={{ aspectRatio: '1/1' }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                {isFetchingNextPage && (
                  <div className="flex justify-center py-8">
                    <CircularProgress />
                  </div>
                )}
                <div ref={observerTarget} className="h-4" />
              </div>
            )}

            {/* Empty State */}
            {!uploading && allImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 dark:text-slate-400">
                  No photos uploaded yet. Start by uploading your first photo above!
                </p>
              </div>
            )}

            {/* Bottom Tip */}
            <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">info</span>
              <div>
                <p className="text-sm font-bold">Pro Tip</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sweet Memories automatically detects faces and locations to help you organize your
                  memories faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
