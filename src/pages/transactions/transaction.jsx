import MainLayout from "../../layouts/MainLayout.jsx";
import {DataTable} from "../../components/DataTable.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as transactionService from "../../services/TransactionApiService.js";

export default function TransactionPage() {
    const headers = ['No', 'Customer', 'Food', 'Qty', 'Total Price', 'Transaction Date'];

    const [data, setData] = useState([]);

    const fetchTransactionData = async () => {
        try {
            const response = await transactionService.getAllTransaction();
            setData(response);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

    useEffect(() => {
        fetchTransactionData();
    }, []);

    const onDelete = async (id) => {
        try {
            await transactionService.deleteTransaction(id).then(() => {
                fetchTransactionData();
            });
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    }

    return (
        <MainLayout>
            <div className="flex flex-col w-full px-96 gap-5">
                <Link to="/transaction/create" className="rounded bg-green-500 w-36 p-1 text-white text-center">Create Transaction</Link>
                <DataTable header={headers} data={data} type='transaction' onDelete={onDelete}/>
            </div>
        </MainLayout>
    );
}