import idm_indikator from "@/data/idm_indikator.json";
import idm_summary from "@/data/idm_summary.json";
import PageHeader from "@/components/ui/header";
import PageContent from "@/components/ui/pageContent";
import { Metadata } from "next";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Indeks Desa Membangun MacanPutih",
  description: "Capaian Desa MacanPutih terhadap Indeks Desa Membangun",
};

export default function IndeksDesaMembangunPage() {
  const iks_count =
    idm_indikator
      .filter((indikator) => indikator.category === "Social")
      .reduce((acc, curr) => acc + Number(curr.skor), 0) /
    (35 * 5);
  const iks = iks_count.toFixed(4);

  const ike_count =
    idm_indikator
      .filter((indikator) => indikator.category === "Economy")
      .reduce((acc, curr) => acc + Number(curr.skor), 0) /
    (12 * 5);
  const ike = ike_count.toFixed(4);

  const ikl_count =
    idm_indikator
      .filter((indikator) => indikator.category === "Environment")
      .reduce((acc, curr) => acc + Number(curr.skor), 0) /
    (3 * 5);
  const ikl = ikl_count.toFixed(4);

  return (
    <main className="overflow-hidden">
      <PageHeader
        title="Indeks Desa Membangun"
        description="Capaian desa terhadap Indeks Desa Membangun"
        pagePreviousDescription="Dashboard Statistik"
        pagePreviousTitle="Dashboard Statistik"
        pagePreviousUrl="/statistik"
      />
      <PageContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center bg-green-600 text-white p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Skor IDM 2024
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {idm_summary.skoridmsaatini}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-green-600 text-white p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Status IDM 2024
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {idm_summary.statusidm}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-green-600 text-white p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Skor untuk naik level
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {idm_summary.penambahanyangdibutuhkan}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-blue-600 border-4 text-slate-900 p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Ketahanan Sosial
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {iks}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-blue-600 border-4 text-slate-900 p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Ketahanan Ekonomi
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {ike}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-blue-600 border-4 text-slate-900 p-4 rounded-lg">
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              Ketahanan Lingkungan
            </h3>
            <p className="text-center font-bold text-5xl md:text-3xl lg:text-4xl pt-2">
              {ikl}
            </p>
          </div>
        </div>
        <p className="my-4">
          Diperbarui pada:{" "}
          {
            // add new date
            new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }{" "}
          dengan sumber data dari{" "}
          <Link
            href="https://idm.kemendesa.go.id/open/api/desa/rumusanpokok/3515102020/2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            idm.kemendesa.go.id
          </Link>
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-center font-bold text-4xl">
            Tabel Capaian Indeks Desa Membangun
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Indikator</TableHead>
                <TableHead>Skor</TableHead>
                <TableHead>Keterangan</TableHead>
                <TableHead>Rekomendasi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {idm_indikator.map((indikator, index) => {
                if (index === 0) {
                  return null;
                }

                // Set color based on skor,
                //  skor 0 = #F86A67
                // skor 1 = #FDD27E
                // skor 2 = #FDD27E
                // skor 3 = #DFE383
                // skor 4 = #A3CF81
                // skor 5 = #63BE7B

                let color = "#63BE7B";
                const skor = Number(indikator.skor);
                if (skor === 0) {
                  color = "#F86A67";
                } else if (skor === 1) {
                  color = "#FDD27E";
                } else if (skor === 2) {
                  color = "#FDD27E";
                } else if (skor === 3) {
                  color = "#DFE383";
                } else if (skor === 4) {
                  color = "#A3CF81";
                }

                return (
                  <TableRow
                    style={{ backgroundColor: color }}
                    className="text-black"
                    key={index + 1}
                  >
                    <TableCell>{index}</TableCell>
                    <TableCell>{indikator.category}</TableCell>
                    <TableCell>{indikator.indikatoridm}</TableCell>
                    <TableCell>{indikator.skor}</TableCell>
                    <TableCell>{indikator.keterangan}</TableCell>
                    <TableCell>
                      {indikator.kegiatanyangdapatdilakukan}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </PageContent>
    </main>
  );
}
