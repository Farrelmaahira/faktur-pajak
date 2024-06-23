import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const url = import.meta.env.VITE_BASE_APP_URL;
  const token = localStorage.getItem("token");
  let number = 1;

  const fetchAPI = async () => {
    const endpoint = date
      ? `${url}/api/v1/data-penjualan?date=${date}`
      : `${url}/api/v1/data-penjualan`;
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(response.data.data);
  };

  const handleOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const response = await axios.delete(`${url}/api/v1/data-penjualan/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      fetchAPI();
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [date]);

  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold text-black border-b border-black">
            Faktur Pajak Keluaran KANWIL MALUKU DAN MALUT
          </h1>
          <div className="flex flex-row justify-between my-5">
            <Link to="/create">
              <button className="border rounded-md text-white my-2 p-2 bg-green-500">
                Tambah
              </button>
            </Link>
            <input
              type="date"
              className="h-auto rounded-md"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="my-auto border-black">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Entitas
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama WP
                    </th>
                    <th scope="col" className="px-6 py-3">
                      BKP / JKP
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tanggal FP
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Alamat
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    return (
                      <tr
                        className="odd:bg-white even:bg-gray-50  border-b"
                        key={index}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap"
                        >
                          {number++}
                        </th>
                        <td className="px-6 py-4">KANWIL MALUKU DAN MALUT</td>
                        <td className="px-6 py-4">{item.mitra.nama_kios}</td>
                        <td className="px-6 py-4">Beras Dibebaskan</td>
                        <td className="px-6 py-4">{item.tanggal}</td>
                        <td className="px-6 py-4">{item.mitra.alamat}</td>
                        <td className="px-6 py-4">
                          <button
                            className="p-2 text-white bg-red-500 rounded-lg"
                            id="btn-delete"
                            onClick={() => handleOpen(item.id)}
                          >
                            Delete
                          </button>
                          <Link to={`/data-penjualan/${item.id}`}>
                            <button
                              className="p-2 text-white bg-blue-500 rounded-lg mx-2"
                              id="btn-delete"
                            >
                              Preview
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <Modal open={open} close={handleClose}>
        <div className="container flex flex-col">
          <div className="p-3 text-xl text-black">
            Apa anda yakin ingin menghapus data ini?
          </div>
          <div className="p-3 my-2">
            <button
              className="rounded-md bg-red-500 text-white p-3 mr-2"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="rounded-md bg-blue-500 text-white p-3"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
