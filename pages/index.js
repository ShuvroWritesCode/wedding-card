/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3yXqqRy6uGK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[url('/background.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/200 to-red/300 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-md bg-red rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
            <img
              src="/couple-photo.jpeg"
              width={800}
              height={800}
              alt="Wedding Couple"
              className="object-cover w-full h-full"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Tasfia & Shahbaz</h1>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white">November xx, 2024</p>
              <div className="mt-6 flex gap-4">
              <Button
                className="flex items-center justify-center flex-1 bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-red-500 transition-colors"
                onClick={() => (window.location.href = "tel:+8801756839808")}
                >
              <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us
              </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center flex-1 bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-red-500 transition-colors"
                  onClick={() => (window.location.href = "mailto:example@email.com")}
                >
                  <MailOpenIcon className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-b from-white/50 to-black/50 rounded-sm">
            <h2 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl font-bold">Event Location</h2>
            <p className="mt-4 text-base text-black sm:text-lg md:text-xl lg:text-2xl">123 Main Street, Anytown USA</p>
            <div className="mt-8">
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Videos</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="video-container aspect-video rounded-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
                <div className="video-container aspect-video rounded-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
                <div className="video-container aspect-video rounded-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
                <div className="video-container aspect-video rounded-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
            </div>
            </div>
          </div>
          <div className="bg-muted py-6 px-6 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-12 lg:px-12 flex justify-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <InstagramIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-30">
        <Button size="icon" onClick={() => (window.location.href = "https://example.com/qr-code")}>
          <QrCodeIcon className="w-6 h-6" />
          <span className="sr-only">Scan QR Code</span>
        </Button>
      </div>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function QrCodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}