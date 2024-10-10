import { LineChartWithLabel } from "@/components/Dashboard/LineChart";
import Footer from "@/components/Footer";
import LandingHeader from "@/components/Header/Landing";
import React from "react";

const page = async () => {
  // const session: any = await checkAuth()
  // const id = session.user.id
  // const {tokenSum, timestamp} = await getTokenCount(id)

  return (
    <div className="w-full flex flex-col gap-12">
      <LandingHeader />
      <main className="flex flex-col justify-center items-center">
        <LineChartWithLabel />
      </main>
      <Footer />
    </div>
  );
};

export default page;
