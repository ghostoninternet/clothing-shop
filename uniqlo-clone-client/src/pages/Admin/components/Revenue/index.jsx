import classNames from 'classnames/bind'
import styles from './Revenue.module.scss'

const cx = classNames.bind(styles)

function Revenue( { query, filter } ) {
    let dataIndex = 0
    if (filter) {
        switch (filter) {
            case 'Theo Ngày':
                dataIndex = 0
                break;
            case 'Theo Tháng':
                dataIndex = 1
                break;
            case 'Theo Năm':
                dataIndex = 2
                break;
            default:
                break;
        }
    }
    const data = [
        {
            revenue: '10.300.000 VND',
            product: [
                {
                    id: '435678',
                    colorCode: 'COL92',
                    sizeCode: 'SMA003',
                    count: '12',
                    revenue: '2.300.000 VND',
                },
                {
                    id: '435678',
                    colorCode: 'COL92',
                    sizeCode: 'SMA003',
                    count: '12',
                    revenue: '2.300.000 VND',
                },
                {
                    id: '435678',
                    colorCode: 'COL92',
                    sizeCode: 'SMA003',
                    count: '12',
                    revenue: '2.300.000 VND',
                },
                {
                    id: '435678',
                    colorCode: 'COL92',
                    sizeCode: 'SMA003',
                    count: '12',
                    revenue: '2.300.000 VND',
                },
            ]
        },
        {
            revenue: '31.300.000.000 VND',
            product: [
                {
                    id: '315678',
                    colorCode: 'COL23',
                    sizeCode: 'SMA004',
                    count: '13',
                    revenue: '5.332.000 VND',
                },
                {
                    id: '435418',
                    colorCode: 'COL91',
                    sizeCode: 'SMA003',
                    count: '1',
                    revenue: '2.300.000 VND',
                },
                {
                    id: '435435',
                    colorCode: 'COL10',
                    sizeCode: 'SMA001',
                    count: '5',
                    revenue: '2.300.000 VND',
                },
                {
                    id: '435678',
                    colorCode: 'COL92',
                    sizeCode: 'SMA003',
                    count: '12',
                    revenue: '2.300.000 VND',
                },
            ]
        },
        {
            revenue: '31.300.000.000 VND',
            product: [
                {
                    id: '315678',
                    colorCode: 'COL23',
                    sizeCode: 'SMA004',
                    count: '13',
                    revenue: '5.332.000 VND',
                },
                {
                    id: '435418',
                    colorCode: 'COL91',
                    sizeCode: 'SMA003',
                    count: '1',
                    revenue: '2.300.000 VND',
                },
                {
                    id: '435435',
                    colorCode: 'COL10',
                    sizeCode: 'SMA001',
                    count: '5',
                    revenue: '2.300.000 VND',
                },
                {
                    id: '435678',
                    colorCode: 'COL92',
                    sizeCode: 'SMA003',
                    count: '12',
                    revenue: '2.300.000 VND',
                },
            ]
        },
    ]

    return ( 
        <div>
            <div className={cx('revenue-title')}>Doanh Thu Trong {filter ? filter.replace("Theo ", "") : ''}: {data[dataIndex].revenue}</div>
            <div className={cx('table-wrapper')}>
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product ID</th>
                            <th scope="col">Color</th>
                            <th scope="col">Size</th>
                            <th scope="col">Count</th>
                            <th scope="col">Revenue</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {data[dataIndex].product.map((productInfo, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{productInfo.id}</td>
                                    <td>{productInfo.colorCode}</td>
                                    <td>{productInfo.sizeCode}</td>
                                    <td>{productInfo.count}</td>
                                    <td>{productInfo.revenue}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Revenue