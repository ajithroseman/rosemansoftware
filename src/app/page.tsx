import Banner1 from '@/components/home/banner1'

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome to RosemanSoftware
          <Banner1 />
        </h1>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-4">
            This is a test to see if the navbar works!
          </p>
          <p className="text-gray-500">
            Try clicking the links in the navbar. Only the Home page will work for now.
          </p>
        </div>
      </div>
    </div>
  );
}

/*import Counter from '@/components/Counter';
// This is your home page
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to My Website
          </h1>
          <Counter />
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            This is my first Next.js website!
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </main>
    </div>
  );
}*/


