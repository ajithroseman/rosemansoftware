'use client';

export default function ProjectWorkflow() {
  const steps = [
    {
      title: 'Development',
      tool: 'VS Code & Terminal',
      description: 'Built with React 19, Next.js, and TypeScript. Styled using Tailwind CSS v4 for modern responsiveness.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Version Control',
      tool: 'GitHub',
      description: 'Source code managed via Git command line. Commits pushed to remote repository for version history.',
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      title: 'CI/CD Deployment',
      tool: 'Vercel',
      description: 'Automated deployment pipeline linked to GitHub. Instant builds and edge network delivery.',
      icon: (
        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      ),
    },
    {
      title: 'Creative Assets',
      tool: 'AI & Photoshop',
      description: 'Custom visuals generated via AI and refined in Photoshop for a professional brand identity.',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Client Project (Slide 2)',
      tool: 'PHP & MySQL (LAMP)',
      description: 'The second image in the banner showcases a live production site I developed for "Eagle Vision Technology". This Pro Bono project demonstrates my ability to deliver full-stack solutions using raw HTML5, CSS3, PHP, and SQL.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header with Disclaimer */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Architecture & Workflow
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            This website serves as a technical demonstration of full-stack development capabilities. 
            Below is the actual workflow used to build and deploy this project.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Connecting Line (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="bg-gray-50 p-3 rounded-xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                <div className="text-sm font-medium text-blue-600 mb-3">{step.tool}</div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 text-center border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 italic">
            "Conceptualized, Coded, and Deployed by Roseman"
          </p>
        </div>
      </div>
    </section>
  );
}