import DashboardLayout from "../layouts/DashboardLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
const DataOrder = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  let total = 0;

  const fetchAPI = async () => {
    const data = await axios.get(`http://localhost:8000/api/v1/order/${id}`);
    setData(data.data.data);
  };

  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <DashboardLayout>
        <Card>
          <div className="flex flex-col">
            <div className="header p-4">
              <span className="font-bold">Faktur Pelanggan</span>
              <h2 className="font-bold text-3xl">
                INV/{data?.invoice_address}/2024/25001
              </h2>
            </div>
            <div className="my-2 flex flex-row flex-wrap">
              <div className="p-3 w-1/2 flex flex-row">
                <div className="label w-1/2 p-2">
                  <span className="font-bold">Pelanggan</span>
                </div>
                <div className="content p-2 ml-10">
                  <p className="uppercase">
                    {data?.mitra.nama_kios} ({data?.mitra.id})
                  </p>
                  <p>{data?.mitra.alamat}</p>
                </div>
              </div>
              <div className="p-3 w-1/2 flex flex-row">
                <div className="label p-2 flex flex-col w-1/2">
                  <span className="font-bold">Tangggal Faktur</span>
                  <span className="font-bold">Batas Waktu</span>
                  <span className="font-bold">Syarat Pembayaran</span>
                </div>
                <div className="content p-2 ml-10">
                  <p>{data?.tanggal_order}</p>
                  <p>{data?.tanggal_order}</p>
                  <p>{data?.pembayaran}</p>
                </div>
              </div>
              <div className="p-3 w-1/2 flex flex-row">
                <div className="label p-2 flex flex-col w-1/2">
                  <span className="font-bold">Referensi Pembayaran</span>
                  <span className="font-bold">Jenis Penjualan</span>
                  <span className="font-bold">Analytic Account</span>
                  <span className="font-bold">Branch</span>
                  <span className="font-bold">Rekening Tujuan</span>
                </div>
                <div className="content p-2 ml-10">
                  <p>INV/{data?.invoice_address}/2024/25001</p>
                  <p>{data?.jenis_penjualan}</p>
                  <p>{data?.jenis_transaksi}</p>
                  <p>25001 - KANWIL MALUKU MALUT</p>
                  <p>BNI - {data?.rekening_tujuan}</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-x-auto shadow-md">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Label
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Kegiatan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Rekening
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Akun Analisis
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Kuantitas
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Satuan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Secondary
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Harga
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.order_detail.map((item, index) => {
                    let hargaValue = IDR.format(item.harga);
                    let subtotalValue = IDR.format(item.subtotal);
                    total += item.subtotal;
                    return (
                      <tr>
                        <td className="px-6 py-4">{item.produk}</td>
                        <td className="px-6 py-4">Penjualan Beras</td>
                        <td className="px-6 py-4">
                          {data.mitra.nomor_rekening}
                        </td>
                        <td className="px-6 py-4">{data.jenis_transaksi}</td>
                        <td className="px-6 py-4">{item.jumlah_pesanan}</td>
                        <td className="px-6 py-4">Pack {item.kuantitas} KG</td>
                        <td className="px-6 py-4">
                          {item.jumlah_pesanan * item.kuantitas} kg
                        </td>
                        <td className="px-6 py-4" id="harga">
                          {hargaValue}
                        </td>
                        <td className="px-6 py-4" id="subtotal">
                          {subtotalValue}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="total flex justify-end flex-col my-2 p-3">
              <div className="p-2 border-t flex flex-row justify-end">
                <span className="font-bold">Total : </span>
                <div className="mx-2">{IDR.format(total)}</div>
              </div>
              <div className="p-2 flex flex-row justify-end">
                <span className="font-bold">Dibayar Pada : </span>
                <div className="mx-2">{data?.tanggal_order}</div>
              </div>
            </div>
          </div>
        </Card>
      </DashboardLayout>
    </>
  );
};

export default DataOrder;
