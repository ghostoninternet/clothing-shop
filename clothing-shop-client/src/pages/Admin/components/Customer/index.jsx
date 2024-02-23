import classNames from 'classnames/bind'
import styles from '../Revenue/Revenue.module.scss'

const cx = classNames.bind(styles)

function Customer( { query, filter } ) {
    let dataIndex = 0
    if (filter) {
        switch (filter) {
            case 'Nam':
                dataIndex = 0
                break;
            case 'Nữ':
                dataIndex = 1
                break;
            default:
                break;
        }
    }
    const data = [
        {
            customerQuantity: '29',
            customer: [
                {
                    id: '435678',
                    email: 'COL92@nam.com',
                    boughtCount: '23',
                    spent: '2.300.000 VND',
                },
                {
                    id: '435678',
                    email: 'COL92@nam.com',
                    boughtCount: 'SMA003',
                    spent: '2.300.000 VND',
                },
                {
                    id: '435678',
                    email: 'COL92@nam.com',
                    boughtCount: 'SMA003',
                    spent: '2.300.000 VND',
                },
                {
                    id: '435678',
                    email: 'COL92@nam.com',
                    boughtCount: 'SMA003',
                    spent: '2.300.000 VND',
                },
            ]
        },
        {
            customerQuantity: '12',
            customer: [
                {
                    id: '315678',
                    email: 'COL23',
                    boughtCount: 'SMA004',
                    spent: '5.332.000 VND',
                },
                {
                    id: '435418',
                    email: 'COL91',
                    boughtCount: 'SMA003',
                    spent: '2.300.000 VND',
                },
                {
                    id: '435435',
                    email: 'COL10',
                    boughtCount: 'SMA001',
                    spent: '2.300.000 VND',
                },
                {
                    id: '435678',
                    email: 'COL92',
                    boughtCount: 'SMA003',
                    spent: '2.300.000 VND',
                },
            ]
        },
    ]
    return ( 
        <div>
            <div className={cx('revenue-title')}>Số Khách Hàng {filter ? filter : ''}: {data[dataIndex].customerQuantity}</div>
            <div className={cx('table-wrapper')}>
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Bought Products</th>
                            <th scope="col">Money Spent</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {data[dataIndex].customer.map((customerInfo, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{customerInfo.id}</td>
                                    <td>{customerInfo.email}</td>
                                    <td>{customerInfo.boughtCount}</td>
                                    <td>{customerInfo.spent}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Customer