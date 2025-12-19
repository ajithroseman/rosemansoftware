import ImageSlider from '@/components/home/ImageSlider';
import ProjectWorkflow from '@/components/home/ProjectWorkflow';

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gray-50 overflow-x-hidden ">
          <ImageSlider />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 mt-8">
          Welcome to RosemanSoftware
        </h1>
          <p className="text-lg text-gray-600 mb-4">
            This is a test to see if the navbar works!
          </p>
          <p className="text-gray-500">
            Try clicking the links in the navbar. Only the Home page will work for now.
          </p>
        </div>
      </div>
      <ProjectWorkflow />
    </div>
  );
}




