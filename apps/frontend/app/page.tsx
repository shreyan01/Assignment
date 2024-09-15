import { Button } from "./components/ui/button"
import { Mic, Zap, Upload, Speaker } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">VoiceAI</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Your Voice, Amplified by AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Upload your voice, generate custom audio. Experience the future of personalized content creation.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Mic className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2">Custom Voice Upload</h3>
                <p className="text-gray-600">Upload your unique voice and let our AI learn its intricacies.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Generation</h3>
                <p className="text-gray-600">Generate natural-sounding audio using cutting-edge AI technology.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Speaker className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2">Versatile Output</h3>
                <p className="text-gray-600">Create voiceovers, podcasts, or any audio content with your digital voice clone.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Upload Your Voice</h3>
                <p className="text-gray-600">Record or upload a sample of your voice for our AI to analyze.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">AI Learning</h3>
                <p className="text-gray-600">Our advanced AI models learn the unique characteristics of your voice.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Generate Audio</h3>
                <p className="text-gray-600">Input text and generate audio in your voice with a click of a button.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"This tool has revolutionized my content creation process. The voice cloning is incredibly accurate!"</p>
                <p className="font-bold">- Sarah K., Content Creator</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"I can now produce podcasts faster than ever. The AI-generated audio sounds just like me!"</p>
                <p className="font-bold">- Mike R., Podcaster</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Basic</h3>
                <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    1 Custom Voice
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    100 Minutes of Generation
                  </li>
                </ul>
                <Button className="mt-auto focus-ring-purple-600">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-purple-600 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Pro</h3>
                <p className="text-3xl font-bold mb-4">$24.99<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    3 Custom Voices
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    500 Minutes of Generation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Priority Support
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-purple-600 hover:bg-gray-100">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Custom</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited Custom Voices
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited Generation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Dedicated Account Manager
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 VoiceAI Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}