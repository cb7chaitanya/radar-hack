import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 border-t dark:border-gray-700 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 Bodhi. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            href="#"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
