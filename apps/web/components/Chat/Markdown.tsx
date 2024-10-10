import React, { Suspense, useState, useMemo } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@repo/ui/components/ui/button";
import { Check, Copy } from "lucide-react";
import { TextGenerateEffect } from "@repo/ui/components/ui/text-generate-effect";

export default React.memo(function Markdown({ message }: { message: string }) {
  const CopyButton = ({ code }: { code: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return (
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 opacity-50 hover:opacity-100"
        onClick={copyToClipboard}
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    );
  };

  function extractText(children: React.ReactNode): string {
    let text = "";

    React.Children.forEach(children, (child) => {
      if (typeof child === "string" || typeof child === "number") {
        text += child;
      } else if (React.isValidElement(child) && child.props.children) {
        text += extractText(child.props.children);
      }
    });

    return text;
  }

  const components = useMemo(
    () => ({
      h1: (props: Object) => (
        <h1 className="text-2xl font-bold mb-2" {...props} />
      ),
      h2: (props: Object) => (
        <h2 className="text-xl font-semibold mb-2" {...props} />
      ),
      p: (props: Object) => <p className="mb-2" {...props} />,
      ul: (props: Object) => <ul className="list-disc pl-5 mb-2" {...props} />,
      ol: (props: Object) => (
        <ol className="list-decimal pl-5 mb-2" {...props} />
      ),
      li: (props: Object) => <li className="mb-1" {...props} />,
      a: (props: Object) => (
        <a
          className="text-purple-600 hover:text-purple-800 underline"
          {...props}
        />
      ),
      code: ({ node, inline, className, children, ...props }: any) => {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <div className="relative">
            <pre className="bg-primary-800 rounded p-2 mb-2 overflow-x-auto">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
            <CopyButton code={String(children).replace(/\n$/, "")} />
          </div>
        ) : (
          <code className="bg-blue-800 rounded px-1" {...props}>
            {children}
          </code>
        );
      },
      pre: (props: Object) => (
        <pre
          className="bg-primary-800 rounded p-2 mb-2 overflow-x-auto"
          {...props}
        />
      ),
    }),
    [],
  );
  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote source={message} components={components} />
    </Suspense>
  );
});
