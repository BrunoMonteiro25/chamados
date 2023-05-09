import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

export default function StickyHeadTable() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [chamados, setChamados] = React.useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'http://localhost:8000/chamados?_sort=dataCriacao&_order=desc',
      )
      const data = response.data
      setChamados(data.reverse())
    }
    fetchData()
  }, [])

  const columns = [
    { id: 'nome', label: 'Cliente', minWidth: 170, align: 'center' },
    { id: 'assunto', label: 'Assunto', minWidth: 100, align: 'center' },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'data',
      label: 'Data',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'acoes',
      label: 'Ações',
      minWidth: 170,
      align: 'center',
      format: (value, row) => (
        <div>
          <button onClick={() => handleView(row)} className="config-view">
            <Visualizar />
          </button>
          <button onClick={() => handleEdit(row)} className="config-edit">
            <Editar />
          </button>
        </div>
      ),
    },
  ]

  function handleEdit(row) {
    navigate('/editar-chamado')
  }
  function handleView(row) {}

  const rows = chamados.map((chamado) => ({
    nome: chamado.cliente.nome,
    assunto: chamado.assunto,
    status: chamado.status,
    data: new Date(chamado.dataCriacao).toLocaleDateString('pt-BR'),
    acoes: '',
  }))

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
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        return (
                          <TableCell
                            sx={{ color: '#fff' }}
                            key={column.id}
                            align={column.align}
                          >
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
