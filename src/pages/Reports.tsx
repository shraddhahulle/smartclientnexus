
import { Suspense } from "react";
import ReportsSection from "@/components/ReportsSection";
import Header from "@/components/Header";

const Reports = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="py-6">
          <Suspense fallback={<div className="py-8 text-center">Loading reports...</div>}>
            <ReportsSection />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Reports;
