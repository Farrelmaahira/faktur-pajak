import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Preview = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [values, setValues] = useState({
    nama_kios: "",
    nomor_telfon: 0,
    alamat: "",
    tanggal: "",
    kuantitas: 0,
    harga_satuan: 0,
    harga_jual: 0,
    dasar_pengenaan_pajak: 0,
    referensi: "",
    pajak: 0,
  });
  const url = import.meta.env.VITE_BASE_APP_URL;
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const fetchAPI = async () => {
    const { data } = await axios.get(`${url}/api/v1/data-penjualan/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setValues({
      nama_kios: data.mitra.nama_kios,
      nomor_telfon: data.mitra.nomor_telfon,
      alamat: data.mitra.alamat,
      tanggal: data.tanggal,
      kuantitas: data.kuantitas,
      harga_satuan: data.harga_jual,
      harga_jual: data.kuantitas * data.harga_jual,
      pajak: data.harga_jual * 0.11,
      dasar_pengenaan_pajak: data.harga_jual - data.harga_jual * 0.11,
      referensi: data.referensi,
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(values.nomor_telfon);
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="">
          <h1 className="text-2xl font-bold">
            Faktur Pajak Keluaran KANWIL MALUKU DAN MALUT
          </h1>
        </div>
        <div className="my-2">
          <Card>
            <div className="my-2 bg-slate-200 h-fit p-3">
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-center mt-3">
                  <label className="mx-3">Nama Mitra</label>
                  <select className="w-1/2 rounded-sm" disabled>
                    <option value={values?.nama_kios}>
                      {values?.nama_kios}
                    </option>
                  </select>
                </div>
                <div className="flex flex-row justify-center mt-3">
                  <label className="mx-3">No HP</label>
                  <input
                    type="text"
                    className="disabled:bg-white w-1/2 rounded-sm"
                    value={values?.nomor_telfon}
                    readOnly
                  />
                </div>
                <div className="flex flex-row justify-center mt-3">
                  <label className="mx-3">Alamat</label>
                  <input
                    type="text"
                    className="disabled:bg-white w-1/2 rounded-sm"
                    disabled
                    defaultValue={values?.alamat}
                  />
                </div>
              </div>
            </div>
            <div className="my-2 bg-slate-200 h-fit p-3">
              <div className="flex flex-col w-full p-1">
                <div className="w-full flex flex-row justify-between">
                  <label className="mx-auto">Tanggal Faktur Pajak</label>
                  <input
                    type="date"
                    className="w-3/4 mx-2"
                    defaultValue={values?.tanggal}
                  />
                </div>
                <div className="w-full flex flex-row justify-between my-2">
                  <label className="mx-auto">Kode Transaksi</label>
                  <select name="" disabled className="w-3/4">
                    <option value="Penyerhan yang dibebaskan dari pengenaan PPN atau PPN dan PPnBM kepada selain pemungutan PPN">
                      08 - Penyerhan yang dibebaskan dari pengenaan PPN atau PPN
                      dan PPnBM kepada selain pemungutan PPN
                    </option>
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
                      <span>Harga Jual / Penggantian / Uang Muka / Tarmin</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select name="" disabled>
                        <option value="Beras Dibebaskan">
                          28 - Beras Dibebaskan
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        className="w-3/4 disabled:bg-white"
                        value={values.kuantitas}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="w-3/4 disabled:bg-white"
                        value={IDR.format(values?.harga_satuan)}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="disabled:bg-white w-3/4"
                        id="hargaJualField"
                        value={IDR.format(values?.harga_jual)}
                        readOnly
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-row justify-center my-3">
                <label className="mx-3">Referensi</label>
                <input
                  type="text"
                  className="w-[30%] disabled:bg-white"
                  readOnly
                  value={values?.referensi}
                />
              </div>
            </div>
            <div className="w-full flex flex-col bg-slate-200 p-3">
              <div className="flex flex-row justify-center mt-3">
                <label className="mx-3">Harga Jual Penggantian</label>
                <input
                  type="text"
                  className="w-1/2 disabled:bg-white rounded-sm"
                  value={IDR.format(values?.harga_jual)}
                />
              </div>
              <div className="flex flex-row justify-center mt-3">
                <label className="mx-3">Dasar Pengenaan Pajak</label>
                <input
                  type="text"
                  className="disabled:bg-white w-1/2 rounded-sm"
                  value={IDR.format(values?.dasar_pengenaan_pajak)}
                  readOnly
                />
              </div>
              <div className="flex flex-row justify-center mt-3">
                <label className="mx-3">PPN 11%</label>
                <input
                  type="text"
                  className="w-1/2 disabled:bg-white rounded-sm"
                  value={IDR.format(values?.pajak)}
                  readOnly
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Preview;
