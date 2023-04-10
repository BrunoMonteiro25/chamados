import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import { ReactComponent as Atendimentos } from '../../assets/icones/atendimentos.svg'
import { ReactComponent as Novo } from '../../assets/icones/novo.svg'
import { ReactComponent as Visualizar } from '../../assets/icones/visualizar.svg'
import { ReactComponent as Editar } from '../../assets/icones/editar.svg'

import { HeaderTable } from './styles'

import { useNavigate } from 'react-router-dom'

const columns = [
  { id: 'name', label: 'Cliente', minWidth: 170, align: 'center' },
  { id: 'code', label: 'Assunto', minWidth: 100, align: 'center' },
  {
    id: 'population',
    label: 'Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Data',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Ações',
    minWidth: 170,
    align: 'center',
    format: (value, row) => (
      <div>
        <button
          onClick={() => handleView(row)}
          className="config"
          style={{
            backgroundColor: '#686CA4',
          }}
        >
          <Visualizar />
        </button>
        <button
          onClick={() => handleEdit(row)}
          className="config"
          style={{
            backgroundColor: '#DC9F47',
          }}
        >
          <Editar />
        </button>
      </div>
    ),
  },
]

function handleEdit(row) {}
function handleView(row) {}

const rows = [
  {
    name: 'Agência MKT',
    code: 'Suporte',
    population: 'Progresso',
    size: '23/03/2023',
    density: '',
  },
  {
    name: 'China',
    code: 'CN',
    population: 1403500365,
    size: 9596961,
    density: '',
  },
  {
    name: 'Italy',
    code: 'IT',
    population: 60483973,
    size: 301340,
    density: '',
  },
  {
    name: 'United States',
    code: 'US',
    population: 327167434,
    size: 9833520,
    density: '',
  },
  {
    name: 'Canada',
    code: 'CA',
    population: 37602103,
    size: 9984670,
    density: '',
  },
  {
    name: 'Australia',
    code: 'AU',
    population: 25475400,
    size: 7692024,
    density: '',
  },
  {
    name: 'Germany',
    code: 'DE',
    population: 83019200,
    size: 357578,
    density: '',
  },
  {
    name: 'Ireland',
    code: 'IE',
    population: 4857000,
    size: 70273,
    density: '',
  },
  {
    name: 'Mexico',
    code: 'MX',
    population: 126577691,
    size: 1972550,
    density: '',
  },
  {
    name: 'Japan',
    code: 'JP',
    population: 126317000,
    size: 377973,
    density: '',
  },
  {
    name: 'France',
    code: 'FR',
    population: 67022000,
    size: 640679,
    density: '',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    population: 67545757,
    size: 242495,
    density: '',
  },
  {
    name: 'Russia',
    code: 'RU',
    population: 146793744,
    size: 17098246,
    density: '',
  },
  {
    name: 'Nigeria',
    code: 'NG',
    population: 200962417,
    size: 923768,
    density: '',
  },
  {
    name: 'Brazil',
    code: 'BR',
    population: 210147125,
    size: 8515767,
    density: '',
  },
]

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const navigate = useNavigate()

  function handleClick() {
    navigate('/novo-chamado')
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#2B2B4B',
        }}
      >
        <HeaderTable>
          <p>
            <Atendimentos />
            Atendimentos
          </p>
          <button onClick={handleClick}>
            <Novo />
            Novo Chamado
          </button>
        </HeaderTable>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: '#000',
                      color: '#fff',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        // const value = row[column.id]
                        return (
                          <TableCell
                            sx={{ color: '#fff' }}
                            key={column.id}
                            align={column.align}
                          >
                            {/* {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value} */}
                            {column.format
                              ? column.format(row[column.id], row)
                              : row[column.id]}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ backgroundColor: '#000', color: '#fff' }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ style: { color: '#fff' } }}
          backIconButtonProps={{ style: { color: '#fff' } }}
        />
      </Paper>
    </>
  )
}
