import PageHeader from "@/components/ui/header";
import PageContent from "@/components/ui/pageContent";
import GeoFileExtract from "./goespatialdata";
import dynamic from "next/dynamic";

const Map = dynamic(async () => await import("./maps"), {
  ssr: false,
});

export default function PetaDesa() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        title="Peta Desa"
        description="Peta Desa Macan Putih, dikembangkan melalui data GeoSpasial yang dihimpun oleh tim KKN UGM."
        pagePreviousDescription="Beranda"
        pagePreviousTitle="Beranda"
        pagePreviousUrl="/"
      />
      <PageContent>
        <div className="w-full">
          <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
            Peta Desa Macan Putih
          </h2>
          <div className="h-[320px] lg:h-[720px]">
            <Map />
          </div>
          <GeoFileExtract />
          <p className="pt-8 text-sm">
            Data diperoleh melalui API Openstreetmap dengan penyesuaian pada
            objek - objek vital milik Desa Macan Putih. Dikurasi secara
            independen berbasis data geospasial. Mohon laporkan kepada kami jika
            terdapat ketidaksesuaian data.
          </p>
        </div>
      </PageContent>
    </main>
  );
}
