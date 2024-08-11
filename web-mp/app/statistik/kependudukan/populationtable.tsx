import DataPopulasi from "@/data/populasi.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function PopulationAgeTable() {
  const { men, women } = DataPopulasi;
  return (
    <Table>
      <TableCaption>Tabel Jumlah Penduduk</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-black">Rentang Usia</TableHead>
          <TableHead className="font-bold text-black">Laki - Laki</TableHead>
          <TableHead className="font-bold text-black">Perempuan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(men.age).map((ageRange) => (
          <TableRow key={ageRange}>
            <TableCell>
              {"Usia " + ageRange.replace("_", " - ") + " (tahun)"}
            </TableCell>
            {/* @ts-ignore */}
            <TableCell>{men.age[ageRange]}</TableCell>
            {/* @ts-ignore */}
            <TableCell>{women.age[ageRange]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function PopulationMarriedTable() {
  const { married, unmarried, divorced_live, divorced_dead } = DataPopulasi;
  return (
    <Table>
      <TableCaption>Tabel Status Perkawinan</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-black">
            Status Perkawinan
          </TableHead>
          <TableHead className="font-bold text-black">Jumlah</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Menikah</TableCell>
          <TableCell>{married}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Belum Menikah</TableCell>
          <TableCell>{unmarried}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cerai Hidup</TableCell>
          <TableCell>{divorced_live}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cerai Mati</TableCell>
          <TableCell>{divorced_dead}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
