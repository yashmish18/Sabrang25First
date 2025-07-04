"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function extractName(data: string | null): string {
  if (!data) return "";
  try {
    // Try to parse as JSON
    const obj = JSON.parse(data);
    if (typeof obj === "object" && obj.name) return obj.name;
  } catch {
    // Not JSON, continue
  }
  // If it's a URL, try to get last part
  if (data.startsWith("http")) {
    const parts = data.split("/");
    return parts[parts.length - 1] || data;
  }
  // Otherwise, just return the data
  return data;
}

export default function ScanSuccessClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const name = extractName(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Redirect back to scan-qr page and trigger scanning
      router.push("/admin_dashboard/scan-qr?scan=1");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-4 text-white font-sans">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10 flex flex-col items-center carnival-card animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">Welcome to Sabrang 2025</h1>
        <div className="mb-6 text-center">
          <span className="text-sm text-gray-200">hello <span className="font-semibold">{name}</span></span>
        </div>
        <div className="mt-2 mb-6 p-4 bg-black/60 rounded-lg border border-green-400 text-green-300 w-full text-center">
          <span className="font-bold">Scanned QR:</span> {data || "No data"}
        </div>
        <p className="text-gray-300 text-center text-sm">Redirecting back to scanner...</p>
      </div>
    </div>
  );
} 