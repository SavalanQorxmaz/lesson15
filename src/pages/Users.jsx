

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, } from '@mui/x-data-grid';
import axios from 'axios';

const BASE_URL = `http://localhost:7000/`

const columns = [
  { field: 'id',  headerName: 'ID', width: 150 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
   
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 150,
   
  },

];



const Users = () => {
// let row =[]
  let [row, setRow] = useState([])
useEffect(()=> {
  axios.get(BASE_URL).then(res=>{
  
   setRow(res.data.data)
  // row = res.data.data
  })
 
},[])


  return (
    <div className='users'>
      <div className='container'>
      <Box sx={{ marginTop: '50px', height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[1]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
      </div>
    </div>
  )
}


export  {Users}