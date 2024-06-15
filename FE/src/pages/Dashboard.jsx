import DashboardLayout from "../layouts/DashboardLayout";
import Table from "../components/Table";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Input from "../components/Input";
const Dashboard = () => { 
  return (
    <DashboardLayout>
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-black border-b border-black">
          Faktur Pajak Keluaran KANWIL MALUKU DAN MALUT
        </h1>
        <div className="flex flex-row justify-between my-5">
          <Link to="/create">
            <Button className="border rounded-md text-white my-2 p-2 bg-green-500">
                Tambah 
            </Button>
          </Link> 
          <Input type="date" className="h-auto rounded-md"></Input>
        </div>
        <div className="my-auto border-black">
          <Table />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
