import { Link } from "react-router-dom";
import { Iproduct } from "../interface";
import { useDeleteProductMutation, useGetProductsQuery } from "../services/product.service";


const Home = () => {
    const { data, isLoading } = useGetProductsQuery()
    const [deleteProductID] = useDeleteProductMutation()
    const deleteProduct = (id?: number) => {
        console.log(id);
        deleteProductID(id!)


    }
    return (

        <div className="flex flex-col">
            <div className="add">
                <Link to={"/add"}>
                    <button className="bg-green-500 px-3 py-2">Add</button>
                </Link>
            </div>
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Price
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Desc
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((product: Iproduct, index) =>
                                    <tr key={index} className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {product.name}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {product.price}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {product.desc}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <Link to={`update/${product.id}`}>   <button className='bg-green-500 px-3 py-2'>Update</button></Link>
                                            <button onClick={() => deleteProduct(product.id)} className='bg-red-500 px-3 py-2'>Delete</button>
                                        </td>
                                    </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home