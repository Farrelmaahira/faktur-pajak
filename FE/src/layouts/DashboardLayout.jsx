import Navbar from "../components/Navbar";
const DashboardLayout = (props) => {
  const { children } = props;
  return (
    <div className="w-full flex flex-col bg-slate-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto my-2">{children}</div>
    </div>
  );
};

export default DashboardLayout;
