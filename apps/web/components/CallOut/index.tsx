import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import React from "react";

export default function CallOut() {
  return (
    <section className="w-full py-12 md:py-18  px-4 md:px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Experience the Future of AI?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join Bodhi today and start chatting with the world's most advanced
              AI models.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                className="flex-1 rounded-[4px]"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="rounded-[4px] bg-white text-purple-600 hover:bg-gray-100 transition-colors">
                Get Started
              </Button>
            </form>
            <p className="text-xs text-gray-200">
              By signing up, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
