import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import Label from "../components/Label";
import Input from "../components/Input";
const Create = () => {
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col">
          <div className="">
            <h1 className="text-2xl font-bold">
              Faktur Pajak Keluaran KANWIL MALUKU DAN MALUT
            </h1>
          </div>
          <div className="">
            <form action="">
              <Card>
                <div className="header border-b">
                  <h2 className="text-large font-bold text-slate-500 my-2">
                    Form Faktur Pajak Keluaran
                  </h2>
                </div>
                <div className="my-2 bg-slate-200 h-fit p-3">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-center mt-3">
                      <Label className="mx-3">Nama Mitra</Label>
                      <Input type="text" className="w-1/2 rounded-sm" />
                    </div>
                    <div className="flex flex-row justify-center mt-3">
                      <Label className="mx-3">No HP</Label>
                      <Input type="text" className="w-1/2 rounded-sm" />
                    </div>
                    <div className="flex flex-row justify-center mt-3">
                      <Label className="mx-3">Alamat</Label>
                      <Input type="text" className="w-1/2 rounded-sm" />
                    </div>
                  </div>
                </div>
                <div className="my-2 bg-slate-200 h-fit p-3">
                  <div className="flex flex-col w-full p-1">
                    <div className="w-full flex flex-row justify-between">
                      <Label className="mx-auto">Tanggal Faktur Pajak</Label>
                      <Input type="date" className="w-3/4 mx-2" />
                    </div>
                    <div className="w-full flex flex-row justify-between my-2">
                      <Label className="mx-auto">Kode Transaksi</Label>
                      <select name="" className="w-3/4 mx-2" id="">
                        <option value="">testing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="my-2 bg-slate-200 h-fit p-3">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <td>
                          <span>Nama BKP / JKP</span>
                        </td>
                        <td>
                          <span>Kuantitas</span>
                        </td>
                        <td>
                          <span>Harga Include PPN</span>
                        </td>
                        <td>
                          <span>
                            Harga Jual / Penggantian / Uang Muka / Tarmin
                          </span>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select name="" id="" className="w-3/4">
                            <option value="">28 - Beras Dibebaskan</option>
                          </select>
                          {/* <Input type="text" className="w-3/4"></Input> */}
                        </td>
                        <td>
                          <Input type="number" className="w-3/4" />
                        </td>
                        <td>
                          <Input type="number" className="w-3/4" />
                        </td>
                        <td>
                          <Input type="number" className="w-3/4" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex flex-row justify-center my-3">
                    <Label className="mx-3">Referensi</Label>
                    <Input type="text" className="w-30%" />
                  </div>
                </div>
                <div className="w-full flex flex-col bg-slate-200 p-3">
                  <div className="flex flex-row justify-center mt-3">
                    <Label className="mx-3">Harga Jual Penggantian</Label>
                    <Input type="text" className="w-1/2 rounded-sm" />
                  </div>
                  <div className="flex flex-row justify-center mt-3">
                    <Label className="mx-3">Dasar Pengenaan Pajak</Label>
                    <Input type="text" className="w-1/2 rounded-sm" />
                  </div>
                  <div className="flex flex-row justify-center mt-3">
                    <Label className="mx-3">PPN 11%</Label>
                    <Input type="text" className="w-1/2 rounded-sm" />
                  </div>
                  <Button className="border my-2 mx-auto bg-blue-500 w-1/2 p-1 text-white">
                    Simpan
                  </Button>
                </div>
              </Card>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Create;
