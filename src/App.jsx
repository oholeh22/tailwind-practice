export function App() {

  return (
    <>
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-orange-400 text-center mt-32 
      ">Hello, Tailwind</h1>

      <button className="rounded bg-orange-500 hover:bg-orange-400 transition-colors ease-in-out mt-10 mx-auto block px-2 border border-white/50 border-solid">Click me</button>

      <div className="bg-blue-400 mt-5 w-24 h-32 animate-pulse">
        Width & Height
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-blue-300 w-20 h-20" />
        <div className="bg-blue-300 w-20 h-20" />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-blue-500 h-20" />
        <div className="bg-blue-500 h-20" />
      </div>

      </div>
    </>
  )
}

