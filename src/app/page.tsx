export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome to RosemanSoftware
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