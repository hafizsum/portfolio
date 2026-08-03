export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0D1117]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

        <h2 className="text-xl font-semibold text-blue-400">
          Loading Portfolio...
        </h2>

        <p className="text-gray-400">
          Please wait a moment.
        </p>
      </div>
    </div>
  );
}
