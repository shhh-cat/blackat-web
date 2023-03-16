import './globals.css'
import 'react-toastify/dist/ReactToastify.min.css'

export const metadata = {
  title: 'Blackat',
  description: 'Ứng dụng nhắn tin mã hóa đầu cuối',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
