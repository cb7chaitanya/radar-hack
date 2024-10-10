import React from "react";

export const LoginFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="p-2 bg-white dark:bg-primary-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Bodhi. All rights reserved.
        </p>
        {children}
      </div>
    </footer>
  );
};
