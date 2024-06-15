import DashboardLayout from "../layouts/DashboardLayout";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const DataOrders = () => {
  const [data, setData] = useState();
  const fetchAPI = async () => {
    const data = await axios.get("http://localhost:8000/api/orders");
    setData(data.data.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="border-b border-black">
          <h1 className="text-2xl font-bold">Data Order</h1>
        </div>
        <div className="content my-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Mitra
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Order
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Penjualan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Transaksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  console.log(item);
                  return (
                    <tr
                      className="odd:bg-white even:bg-gray-50  border-b"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap"
                      >
                        <Link className="text-blue-500 hover:underline" to={`/data-order/${item.id}`}>
                        {item.mitra.nama_kios}
                        </Link>
                      </th>
                      <td className="px-6 py-4">{item.tanggal_order}</td>
                      <td className="px-6 py-4">{item.jenis_penjualan}</td>
                      <td className="px-6 py-4">{item.jenis_transaksi}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DataOrders;
