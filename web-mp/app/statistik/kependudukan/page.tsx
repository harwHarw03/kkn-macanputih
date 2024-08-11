"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import DataPopulasi from "@/data/populasi.json";
import PyramidPopulation from "./pyramidage";
import { PopulationAgeTable, PopulationMarriedTable } from "./populationtable";

export default function Page() {
  const dataPoints = [
    { title: "Jumlah Penduduk", value: DataPopulasi.total },
    { title: "Jumlah Laki-laki", value: DataPopulasi.men.total },
    { title: "Jumlah Perempuan", value: DataPopulasi.women.total },
  ];

  const DataCard = ({ title, value }: { title: string; value: number }) => (
    <div className="flex flex-col justify-center items-center bg-blue-100 p-4 rounded-lg">
      <h3 className="text-center text-lg md:text-xl lg:text-2xl">{title}</h3>
      <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
        {value}
      </p>
    </div>
  );

  return (
    <main className="overflow-hidden">
      <section id="homepage-hero" className="relative w-full pt-16">
        <section
          id="hero-content"
          className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 mb:pt-12 pb-0 z-10"
        >
          <div className="flex flex-col -mt-20 bg-no-repeat py-3">
            <Link
              href={"/"}
              className="text-blue-400 text-base flex flex-row gap-2 py-3 pb-6"
            >
              <ChevronLeft />
              <p className="text-blue-400 font-semibold">Beranda</p>
            </Link>
            <h1 className="lg:pt-5 font-extrabold font-intro uppercase leading-normal tracking-tight text-2xl md:text-4xl lg:text-[42px] mb-2 md:mb-3 lg:mb-2">
              Statistik Kependudukan
            </h1>
            <p className="font-medium leading-relaxed max-w-xl lg:max-w-2xl mb-4 md:mb-7 text-sm md:text-base">
              Statistik Kependudukan Desa MacanPutih. Data ini diambil dari
              Sistem Informasi Desa (SID) Kementerian Desa Negeri Republik
              Indonesia.
            </p>
            <Link
              className="hover:text-blue-600 text-sm font-semibold"
              href={
                "https://sid.kemendesa.go.id/population-statistic/data?location_code=3510130013&on=population"
              }
            >
              <code>
                Terakhir diperbarui pada:{" "}
                {new Date(DataPopulasi.last_update).toLocaleDateString(
                  "id-ID",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </code>
            </Link>
          </div>
        </section>
      </section>
      <section id="content" className="">
        <div className="container mx-auto pb-16 px-6 2xl:px-0 xl:max-w-7xl relative">
          <div className="p-6 md:p-6 lg:py-8 lg:px-10 rounded-xl bg-white">
            <div className="pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataPoints.map((dataPoint, index) => (
                  <DataCard
                    key={index}
                    title={dataPoint.title}
                    value={dataPoint.value}
                  />
                ))}
              </div>
              <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8">
                Piramida Penduduk Berdasarkan Umur & Jenis Kelamin
              </h2>
              <div className="h-screen lg:h-fit">
                <PyramidPopulation />
              </div>
              <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8">
                Tabel Jumlah Penduduk
              </h2>
              <div className="overflow-x-auto grid grid-cols-2 gap-4">
                <PopulationAgeTable />
                <PopulationMarriedTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
