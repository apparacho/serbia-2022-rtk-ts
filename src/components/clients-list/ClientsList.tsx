import React, { useEffect } from 'react';
import { loadDataAsync, selectClientsData } from '../../redux/clients';
import { useAppSelector, useAppDispatch } from '../../hooks/';

type ClientsListProps = {
    length?: number;
    additional?: any;
};

const columns = [

    {
        name: 'App ID',
        dataIndex: 'app_id'
    },
    {
        name: 'App name',
        dataIndex: 'app_name'
    },
    {
        name: 'Status',
        dataIndex: 'state'
    },
    {
        name: 'Account number',
        dataIndex: 'account_number'
    },
    {
        name: 'Tariff plan',
        dataIndex: 'tariff_plan'
    },
    {
        name: 'Total records',
        dataIndex: 'total_records'
    },
];

const ClientsList: React.FC<ClientsListProps> = ({length, additional}) => {

    const clientsData = useAppSelector(selectClientsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadDataAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={'clients-list'}>
            <div className={'clients-list__header'}>
                Clients List Header
            </div>
            <div className={'clients-list__content'}>
                {clientsData.length}

                {
                    !clientsData.length ? 'No data' :
                        <table>
                            <thead>
                            <tr>{ columns.map(col => <th key={col.dataIndex}> { col.name } </th>) }</tr>
                            </thead>
                            <tbody>
                            {
                                clientsData.map((client, index) => (
                                    <tr key={'clientsTableTr' + index}>
                                        {
                                            columns.map(col => <td key={index + col.dataIndex}>
                                                { client[col.dataIndex] }
                                            </td>)
                                        }
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
}

export default ClientsList;