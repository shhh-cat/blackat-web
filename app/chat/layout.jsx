import Nav from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col py-2 lg:py-3 h-screen">
      <header>
        <Nav />
      </header>
      <main className="grow">
        {children}
      </main>
    </div>
  )
}
