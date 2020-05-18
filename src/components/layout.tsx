import Link from 'next/link'

export function Layout({ children }) {
  return (
    <>
      <header className="fixed z-20 h-16 top-0 bg-black inset-x-0 border-b border-gray-800 flex items-center">
        <div className="max-w-screen-lg w-full mx-auto px-4">
          <section>
            <Link href="/">
              <a className="cursor-pointer font-semibold text-2xl">
                Static Dev
              </a>
            </Link>
          </section>
        </div>
      </header>
      <div className="h-16" />
      <main className="p-4 max-w-screen-lg w-full mx-auto">{children}</main>
    </>
  )
}
