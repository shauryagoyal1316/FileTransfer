import React, { JSX } from 'react'

export function Footer(): JSX.Element {
  return (
    <>
      <div className="h-[100px]" /> {/* Spacer to account for footer height */}
      <footer className="fixed bottom-0 left-0 right-0 text-center py-4 text-xs border-t border-stone-200 dark:border-stone-700 shadow-[0_-1px_2px_rgba(0,0,0,0.04)] dark:shadow-[0_-1px_2px_rgba(255,255,255,0.04)] bg-white dark:bg-stone-900">
        <div className="flex flex-col items-center space-y-3 px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium border border-green-200 dark:border-green-800">
              🛡️ Completely Safe
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-medium border border-blue-200 dark:border-blue-800">
              🌐 P2P
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full font-medium border border-purple-200 dark:border-purple-800">
              🚫 No Server
            </span>
          </div>
          <p className="text-stone-500 dark:text-stone-500">
            &copy; {new Date().getFullYear()} File Transfer
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
