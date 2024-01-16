import localFont from 'next/font/local'
import './globals.css'



const playfair = localFont({
  src: [
    {
      path: '../public/fonts/playfairDisplay/PlayfairDisplay-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },
    {
      path: '../public/fonts/playfairDisplay/PlayfairDisplay-Italic-VariableFont_wght.ttf',
      weight: '400',
      style: 'italic',
      display: 'swap',
    }],
  variable: '--font-playfair'

})
const sohne = localFont({
  src: '../public/fonts/sohne.woff2',
  variable: '--font-sohne',
})
const poppins = localFont({
  src: [
    {
      path: '../public/fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },
    {
      path: '../public/fonts/poppins/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
      display: 'swap',
    },
    {
      path: '../public/fonts/poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
      display: 'swap',
    },
    {
      path: '../public/fonts/poppins/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
      display: 'swap',
    },
  ],
  variable: '--font-poppins'
})
export const metadata = {
  title: 'Gallary',
  description: 'Arun Prajapati',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} ${sohne.variable} bg-[#0f0d0c]`}>{children}</body>
    </html>
  )
}
