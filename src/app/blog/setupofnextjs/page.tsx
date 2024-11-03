import React from 'react'

const Setup = () => {
  return (
    <div className='mb-[100px]  mt-[50px]'>
        <h1 className="text-3xl mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black">Setup Of NextJS</h1>
        <div className='w-[800px] px-12 ml-72'>
        <h1 className='text-2xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-3xl lg:text-4xl text-black '>How to Set Up a Next.js Project: Step-by-Step Guide</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6 mb-3'>Next.js is a powerful React framework for building fast and optimized web applications. Setting it up is simple, and I'll guide you through it step by step.</p>
        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>Step 1: Install Node.js and npm</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Before starting with Next.js, make sure you have Node.js and npm (Node Package Manager) installed. You can check by running these commands in your terminal:</p>
        <pre className="bg-black w-[400px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <code>node -v</code> < br/>
        <code>npm -v</code>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>If you see version numbers, you're ready to go! If not, download and install Node.js.</p>
        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight'>Step 2: Create a New Next.js Project</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Next.js provides a command to set up a project with a default template. In your terminal, navigate to the folder where you want to create the project, then run:</p>
        <pre className="bg-black w-[400px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <code>npx create-next-app@latest</code>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>This command will : Ask you to name your project , set up all the necessary files and folders</p>
        <pre className="bg-black w-[700px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <code>What is your project named? my-app</code> < br/>
        <code>Would you like to use TypeScript? No / Yes</code> < br/>
        <code>Would you like to use ESLint? No / Yes</code> < br/>
        <code>Would you like to use Tailwind CSS? No / Yes</code> < br/>
        <code>Would you like your code inside a `src/` directory? No / Yes</code> < br/>
        <code>Would you like to use App Router? (recommended) No / Yes</code> < br/>
        <code>Would you like to use Turbopack for `next dev`?  No / Yes</code> < br/>
        <code>Would you like to customize the import alias (`@/*` by default)? No / Yes</code> < br/>
        <code>What import alias would you like configured? @/*</code> < br/>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'> After the setup is complete, navigate into your project folder:</p>
        <pre className="bg-black w-[400px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <code>cd your-project-name</code>
        </pre>
        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3'>Step 3: Start the Development Server</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Now, start the development server to see if everything is set up correctly. Run this command inside your project folder:</p>
        <pre className="bg-black w-[400px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <code>npm run dev</code>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>This will start a local server at http://localhost:3000. Open your browser, go to that address, and you should see a welcome page from Next.js. 🎉</p>
        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3'>Step 4: Explore the Project Structure</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Let’s understand the main folders and files that Next.js has created for you:</p>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>
        pages/: This folder contains all your pages. Each file here represents a route. For example, pages/index.js is your home page, accessible at /. < br/>
        public/: Store static assets like images here. < br/>
        styles/: Contains CSS files for styling. < br/>
        package.json: Lists your project dependencies and scripts. < br/>
        </p>
        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3'>Step 5: Create Your First Page</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Let’s make a new page to see how easy it is. Inside the pages/ folder, create a file named about.js with the following code:</p>
        <pre className="bg-black w-[400px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <h1 className='text-white'>page.tsx</h1>
        <code>
          {`export default function About() {
            return <h1>About Us</h1>;
          }`}
        </code>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Now go to http://localhost:3000/about in your browser, and you should see your "About Us" page!</p>
        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3'>Step 6: Add Tailwind CSS (Optional but Recommended)</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>For styling, Tailwind CSS is a great option with Next.js. Here’s how to set it up:</p>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Install Tailwind:</p>
        <pre className="bg-black w-[650px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <code>npm install -D tailwindcss postcss autoprefixer</code>
        <code>npx tailwindcss init -p</code>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Configure Tailwind: Open the generated tailwind.config.js and add the paths to your content:</p>
        <pre className="bg-black w-[450px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <h1 className='text-white'>tailwind.config.js</h1>
        <code>
          {`module.export ={ 
      content: [
          " ./page/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,tsx,jsx}",
          ],
          theme: {
              extend: {},
          },
          plugins: [],
          };`}
        </code>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Add Tailwind CSS to Your CSS File: In styles/globals.css, add:</p>
        <pre className="bg-black w-[400px] text-green-400 p-4 rounded-md text-[16px] overflow-x-auto">
        <code>@tailwind base;</code> < br/>
        <code>@tailwind components;</code> < br/>
        <code>@tailwind utilities;</code> < br/>
        </pre>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Now you can start using Tailwind classes in your Next.js project!</p>
        <h1 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3'>Step 7: Deploy Your Project (Bonus)</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-4 mb-5'>Once you're ready to share your project, you can deploy it easily on Vercel, which is also created by the Next.js team. Go to vercel.com, sign up, and follow the steps to deploy your project directly from GitHub.</p>
        </div>

    </div>
  )
}

export default Setup