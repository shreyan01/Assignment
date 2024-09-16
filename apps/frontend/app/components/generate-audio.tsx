"use client"
import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Wand2, Upload, Play, Download, Loader2 } from 'lucide-react'

export default function GenerateAudioPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [customText, setCustomText] = useState('')
  const [generatedAudioUrl, setGeneratedAudioUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setUploadedFile(file)
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomText(event.target.value)
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    // This is where you would typically call your API to generate the audio
    // For this example, we'll just simulate it with a timeout
    setTimeout(() => {
      setGeneratedAudioUrl('/placeholder-audio.mp3')
      setIsGenerating(false)
    }, 2000)
  }

  const handleDownload = () => {
    // In a real application, you would implement the actual download logic here
    console.log('Downloading audio file...')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wand2 className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">VoiceAI</span>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Generate Your Custom Audio
        </h1>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">1. Upload Your Voice</h2>
            <div className="flex items-center space-x-4">
              <Input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="flex-grow text-white"
              />
              <Button variant="outline" className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>Upload</span>
              </Button>
            </div>
            {uploadedFile && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Uploaded: {uploadedFile.name}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">2. Enter Your Text</h2>
            <Textarea
              placeholder="Enter the text you want to convert to speech..."
              value={customText}
              onChange={handleTextChange}
              className="w-full h-32"
            />
          </div>

          <Button
            onClick={handleGenerate}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            disabled={!uploadedFile || !customText || isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Audio'
            )}
          </Button>

          {generatedAudioUrl && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">3. Your Generated Audio</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <audio controls className="w-full mb-4">
                  <source src={generatedAudioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2"
                    onClick={() => document.querySelector('audio')?.play()}
                  >
                    <Play className="h-4 w-4" />
                    <span>Play</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}