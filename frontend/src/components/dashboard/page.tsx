import DashboardLayout from "@/components/layout/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h3 className="text-lg font-semibold">
            Total Patients
          </h3>

          <p className="text-4xl font-bold mt-4">
            1,284
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h3 className="text-lg font-semibold">
            AI Analyses
          </h3>

          <p className="text-4xl font-bold mt-4">
            8,921
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h3 className="text-lg font-semibold">
            Emergency Cases
          </h3>

          <p className="text-4xl font-bold mt-4">
            42
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}