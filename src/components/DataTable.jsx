import {Table} from "flowbite-react";
import {Link} from "react-router-dom";

export function DataTable(props) {
    const {header, data, type, onDelete} = props;
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    {header.map((item, index) => (
                        <Table.HeadCell key={index}>{item}</Table.HeadCell>
                    ))}
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>
                {type === 'customer' && (
                    <Table.Body className="divide-y">
                        {data.map((item, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index+1}
                                </Table.Cell>
                                <Table.Cell>{item.first_name} {item.last_name}</Table.Cell>
                                <Table.Cell>{item.email}</Table.Cell>
                                <Table.Cell>{item.phone_number}</Table.Cell>
                                <Table.Cell>{item.address}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center gap-5">
                                        <Link to={`/customer/edit/${item.customer_id}`}
                                              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Edit
                                        </Link>
                                        <a onClick={() => {onDelete(item.customer_id)}} href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                            Delete
                                        </a>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                )}
                {type === 'transaction' && (
                    (
                        <Table.Body className="divide-y">
                            {data.map((item, index) => (
                                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index+1}
                                    </Table.Cell>
                                    <Table.Cell>{item?.customer?.first_name} {item?.customer?.last_name}</Table.Cell>
                                    <Table.Cell>{item?.food?.food_name}</Table.Cell>
                                    <Table.Cell>{item?.quantity}</Table.Cell>
                                    <Table.Cell>{item?.total_price}</Table.Cell>
                                    <Table.Cell>{new Date(item?.transaction_date).toLocaleString()}</Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-5">
                                            <Link to={`/transaction/edit/${item.transaction_id}`}
                                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Edit
                                            </Link>
                                            <a onClick={() => {
                                                onDelete(item.transaction_id)
                                            }} href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                                Delete
                                            </a>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    )
                )}

                {type === 'food' && (
                    (
                        <Table.Body className="divide-y">
                            {data.map((item, index) => (
                                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index+1}
                                    </Table.Cell>
                                    <Table.Cell>{item.food_name}</Table.Cell>
                                    <Table.Cell>{item.description}</Table.Cell>
                                    <Table.Cell>{item.price}</Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-5">
                                            <Link to={`/food/edit/${item.food_id}`}
                                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Edit
                                            </Link>
                                            <a href="#" onClick={() => {onDelete(item.food_id)}} className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                                Delete
                                            </a>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    )
                )}
            </Table>
        </div>
    );
}