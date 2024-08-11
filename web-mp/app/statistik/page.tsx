import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/header";
import PageContent from "@/components/ui/pageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistik Desa MacanPutih",
  description:
    "Data statistik Desa MacanPutih, meliputi data jumlah penduduk, jumlah pemilih, dan data lainnya.",
  keywords:
    "Statistik, Data Statistik, Desa MacanPutih, Statistik Desa MacanPutih",
};

export default function PageKepemudaan() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        title="Statistik Desa MacanPutih"
        description="Data statistik Desa MacanPutih, meliputi data jumlah penduduk, jumlah pemilih, dan data lainnya."
        pagePreviousDescription="Beranda"
        pagePreviousTitle="Beranda"
        pagePreviousUrl="/"
      />
      <PageContent>
        <section id="akses-cepat" className="bg-white py-12">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 md:grid-rows-[auto,1fr] md:gap-x-6 lg:gap-x-20 gap-y-6 lg:gap-y-12">
              <div className="md:row-start-1 md:col-start-1 md:col-end-4 lg:row-start-auto lg:col-start-auto lg:col-end-auto flex flex-col gap-2 lg:gap-6 p-4">
                <h2 className="text-center lg:text-left font-bold text-2xl pb-4">
                  Daftar Statistik Desa
                </h2>
                <p className="text-center lg:text-left text-sm">
                  Akses data statistik desa MacanPutih dan data terkait.
                </p>
              </div>
              {availableStatistic.map((service, index) => (
                <Link
                  key={index}
                  href={service.url}
                  className="flex flex-col items-start justify-center p-4 hover:bg-green-50 rounded-lg group transition-colors ease-brand duration-250 gap-4"
                >
                  <h3 className="font-bold text-lg text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageContent>
    </main>
  );
}

const availableStatistic = [
  {
    title: "Kependudukan",
    description:
      "Gambaran umum kepadatan dan sebaran penduduk berdasarkan berbagai aspek.",
    url: "/statistik/kependudukan",
    image: "/medialogo.png",
  },
];
