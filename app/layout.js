import './globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import Providers from './Providers'
import * as SignalClient from '../lib/signal/ts'

export const metadata = {
  title: 'Blackat',
  description: 'Ứng dụng nhắn tin mã hóa đầu cuối',
}

export default function RootLayout({ children }) {
  console.log(SignalClient.IdentityKeyPair.generate())
  return ( 
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
