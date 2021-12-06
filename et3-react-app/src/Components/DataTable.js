import React , {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

export default function DataTable() {
    const [rows,setRows] = useState([]);
    const columns = [
        {dataField:'date', text:'Date', type:'date', sort:true},
        {dataField:'se', text:'SE',filter:textFilter()},
        {dataField:'id', text:'#', type:'number'},
        {dataField:'platform', text:'Platform',filter:textFilter()},
        {dataField:'version', text:'Release Version'},
        {dataField:'comments', text:'Comments',filter:textFilter()},
        {dataField:'prlink', text:'PR Link', align: 'center'},
        {dataField:'size', text:'Size'},
        {dataField:'dificulty', text:'Dificulty'},
        {dataField:'status', text:'Status',filter:textFilter()},
        {dataField:'byReview', text:'Review By BY'},
        {dataField:'ahReview', text:'Review By AH'},
        {dataField:'htReview', text:'Review By HT'},
        {dataField:'actions',text:'Actions'}
    ];

    useEffect(()=>{
        setRows([
        {
            id:'1',
            se:'MW',
            date: '12/6/2021',
            platform: 'kh-mobile',
            version: '1.8.0',
            comments: '',
            prlink: 'https://github.com/mohamadwehbe/et3-task',
            size: 'small',
            dificulty: 'easy',
            status: 'merged',
            byReview: 'no',
            ahReview: 'yes',
            htReview: 'no',
        },
        {
            id:'2',
            se:'AC',
            date: '10/6/2021',
            platform: 'fa-mobile',
            version: '1.8.1',
            comments: '',
            prlink: 'https://github.com/anthonychemaly/et3-task',
            size: 'small',
            dificulty: 'easy',
            status: 'merged',
            byReview: 'yes',
            ahReview: 'no',
            htReview: 'yes',
        },
        ])
    }, []);
  return (
    <div>
        <BootstrapTable bootstrap4 keyField='id' columns={columns} data={rows} filter={filterFactory()}/>
    </div>
  );
}
