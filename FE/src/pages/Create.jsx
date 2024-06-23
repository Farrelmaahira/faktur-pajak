import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [dataMitra, setDataMitra] = useState();
  const token = localStorage.getItem('token')
  const [values, setValues] = useState({
    mitra_id: "",
    no : "",
    alamat : "",
    tanggal : "",
    kode_transaksi: "",
    bkp: "",
    kuantitas: 0,
    harga_satuan: 0,
    harga_jual: 0,
    referensi: "",
    dasar_pengenaan_pajak: 0,
    pajak: 0,
  });

  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const fetchMitra = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/mitra");
    setDataMitra(response.data);
  };

  const fetchMitraById = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/mitra/${values.mitra_id}`
    );
    setValues({
      ...values,
      alamat: data.alamat,
      no: data.nomor_telfon,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post('http://localhost:8001/api/v1/data-penjualan', values, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    if(response.status == 200) {
      navigate('/dashboard')
    }
  };

  const handleChange = (value, key) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  useEffect(() => {
    fetchMitra();
  }, []);

  useEffect(() => {
    fetchMitraById();
  }, [values.mitra_id]);

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
            <form action="" onSubmit={handleSubmit}>
              <Card>
                <div className="header border-b">
                  <h2 className="text-large font-bold text-slate-500 my-2">
                    Form Faktur Pajak Keluaran
                  </h2>
                </div>
                <div className="my-2 bg-slate-200 h-fit p-3">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-center mt-3">
                      <label className="mx-3">Nama Mitra</label>
                      <select
                        className="w-1/2 rounded-sm"
                        value={values.mitra_id}
                        key={"new"}
                        onChange={(e) => {
                          handleChange(e.target.value, "mitra_id");
                        }}
                        required
                      >
                        <option value={""} disabled>
                          Select
                        </option>
                        {dataMitra?.map((item, index) => {
                          // console.log(item)
                          return (
                            <option value={item.id} key={index}>
                              {item.nama_kios}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="flex flex-row justify-center mt-3">
                      <label className="mx-3">No HP</label>
                      <input
                        type="text"
                        required
                        className="disabled:bg-white w-1/2 rounded-sm"
                        defaultValue={values.no}
                        disabled
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-3">
                      <label className="mx-3">Alamat</label>
                      <input
                        type="text"
                        className="disabled:bg-white w-1/2 rounded-sm"
                        defaultValue={values.alamat}
                        disabled
                        required
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
                        value={values.tanggal}
                        onChange={(e) =>
                          handleChange(e.target.value, "tanggal")
                        }
                        required
                      />
                    </div>
                    <div className="w-full flex flex-row justify-between my-2">
                      <label className="mx-auto">Kode Transaksi</label>
                      <select
                        name=""
                        className="w-3/4 mx-2"
                        value={values.kode_transaksi}
                        onChange={(e) => handleChange(e.target.value, "kode_transaksi")}
                        required
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="Penyerhan yang dibebaskan dari pengenaan PPN atau PPN dan PPnBM kepada selain pemungutan PPN">
                          08 - Penyerhan yang dibebaskan dari pengenaan PPN atau
                          PPN dan PPnBM kepada selain pemungutan PPN
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
                          <span>
                            Harga Jual / Penggantian / Uang Muka / Tarmin
                          </span>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select
                            name=""
                            value={values.bkp}
                            className="w-3/4"
                            onChange={(e) =>
                              handleChange(e.target.value, "bkp")
                            }
                            required
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            <option value="Beras Dibebaskan">
                              28 - Beras Dibebaskan
                            </option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="w-3/4"
                            values={values.kuantitas}
                            required
                            onChange={(e) => {
                              const newValue = +e.target.value;
                              if (newValue !== 0 || e.target.value == "") {
                                setValues({
                                  ...values,
                                  kuantitas: newValue,
                                  harga_jual: values.harga * newValue
                                });
                              }
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="w-3/4"
                            value={values.harga || ''}
                            required
                            onChange={(e) => {
                              const newValue = +e.target.value;
                              if (newValue !== 0 || e.target.value == "") {
                                const hargaValue = values.kuantitas * newValue
                                const pajakValue = hargaValue * 0.11
                                setValues({
                                  ...values,
                                  harga: newValue,
                                  harga_jual: hargaValue,
                                  dasar_pengenaan_pajak : hargaValue - pajakValue,
                                  pajak : pajakValue
                                });
                              }
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="disabled:bg-white w-3/4"
                            id="hargaJualField"
                            disabled
                            readOnly
                            value={values.harga * values.kuantitas}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex flex-row justify-center my-3">
                    <label className="mx-3">Referensi</label>
                    <input
                      type="text"
                      className="w-[30%]"
                      onChange={(e) =>
                        handleChange(e.target.value, "referensi")
                      }
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col bg-slate-200 p-3">
                  <div className="flex flex-row justify-center mt-3">
                    <label className="mx-3">Harga Jual Penggantian</label>
                    <input
                      type="text"
                      className="w-1/2 disabled:bg-white rounded-sm"
                      value={IDR.format(values.harga_jual || 0)}
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="flex flex-row justify-center mt-3">
                    <label className="mx-3">Dasar Pengenaan Pajak</label>
                    <input type="text" className="disabled:bg-white w-1/2 rounded-sm" value={IDR.format(values.dasar_pengenaan_pajak || 0)} readOnly disabled/>
                  </div>
                  <div className="flex flex-row justify-center mt-3">
                    <label className="mx-3">PPN 11%</label>
                    <input type="text" className="w-1/2 disabled:bg-white rounded-sm" value={IDR.format(values.pajak)} readOnly disabled/>
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
