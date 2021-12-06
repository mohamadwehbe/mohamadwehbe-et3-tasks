import React , {useState, useEffect} from 'react';

export default function DataTable() {
    const [row,setRow] = useState([]);

  useEffect(()=>{
    setRow([
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
  },[]);
  return (
    <>
    
    </>
  );
}
