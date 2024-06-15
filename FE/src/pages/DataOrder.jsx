import DashboardLayout from "../layouts/DashboardLayout"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import Card from "../components/Card"
const DataOrder = () => {
    const {id} = useParams()
    const [data, setData] = useState()

    // const fetchAPI = async () => {
    //     const data = await axios.get(`http://localhost:8000/api/order/${id}`)
    //     console.log(data)
    // }

    // useEffect(() => {
    //     fetchAPI()
    // }, [])
    return(
        <>
            <DashboardLayout>
                <Card>
                    <div className="flex flex-col">
                        <div className="">
                            <span className="font-bold">
                                Faktur Pelanggan
                            </span>
                            <h2 className="font-bold text-3xl">
                                INV/1234/2024/25001
                            </h2>
                        </div>
                        <div className="my-2 flex flex-row flex-wrap">
                            <div className="border border-black p-3 w-1/2">box</div>
                            <div className="border border-black p-3 w-1/2">box</div>
                            <div className="border border-black p-3 w-1/2">box</div>
                        </div>
                    </div>
                </Card>

            </DashboardLayout> 
        </>
    )
}

export default DataOrder