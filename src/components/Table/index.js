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
import { ReactComponent as Excluir } from '../../assets/icones/delete.svg'

import { Acoes, HeaderTable } from './styles'

import { useNavigate } from 'react-router-dom'

import ModalChamados from '../Modal/chamado'
import ModalDelete from '../Modal/chamadoDelete'

import { toast } from 'react-toastify'

export default function StickyHeadTable() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [chamados, setChamados] = useState([])

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false)

  const [selectedChamado, setSelectedChamado] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://api-sistema-chamados.onrender.com/chamados?_sort=dataCriacao&_order=desc',
      )
      const data = response.data
      setChamados(data.reverse())
    }
    fetchData()
  }, [])

  function openModal(chamado) {
    setSelectedChamado(chamado)
    setIsModalVisible(true)
  }

  function openModalDelete(chamado) {
    setSelectedChamado(chamado)
    setIsModalVisibleDelete(true)
  }

  async function deletarChamado(id) {
    try {
      await axios.delete(
        `https://api-sistema-chamados.onrender.com/chamados/${id}`,
      )

      toast.success(`O chamado foi excluído!`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })

      // Atualize a lista de chamados após a exclusão
      const updatedChamados = chamados.filter((chamado) => chamado._id !== id)
      setChamados(updatedChamados)
    } catch (error) {
      console.log(error)
    }
  }

  function handleDelete() {
    deletarChamado(selectedChamado.id)
    setIsModalVisibleDelete(false)
  }

  function handleEdit(chamado) {
    setSelectedChamado(chamado)
    navigate(`/editar-chamado/${chamado.id}`, { state: { chamado: chamado } })
  }

  const rows = chamados.map((chamado) => ({
    id: chamado._id,
    nome: chamado.cliente.nome,
    id_cliente: chamado.cliente._id,
    assunto: chamado.assunto,
    status: chamado.status,
    data: new Date(chamado.dataCriacao).toLocaleDateString('pt-BR'),
    acoes: '',
    descricao: chamado.descricao,
  }))

  function novoChamado() {
    navigate('/novo-chamado')
  }

  const columns = [
    { id: 'nome', label: 'Cliente', minWidth: 170, align: 'center' },
    { id: 'assunto', label: 'Assunto', minWidth: 100, align: 'center' },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('pt-BR'),
    },
    {
      id: 'data',
      label: 'Data',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('pt-BR'),
    },
    {
      id: 'acoes',
      label: 'Ações',
      minWidth: 170,
      align: 'center',
      format: (value, row) => (
        <Acoes>
          <button onClick={() => openModal(row)} className="config-view">
            <Visualizar />
          </button>

          {isModalVisible ? (
            <ModalChamados
              onClose={() => {
                setSelectedChamado(null)
                setIsModalVisible(false)
              }}
              chamado={selectedChamado}
            />
          ) : null}

          <button onClick={() => handleEdit(row)} className="config-edit">
            <Editar />
          </button>

          <button
            onClick={() => openModalDelete(row)}
            className="config-delete"
          >
            <Excluir />
          </button>

          {isModalVisibleDelete ? (
            <ModalDelete
              onClose={() => {
                setSelectedChamado(null)
                setIsModalVisibleDelete(false)
              }}
              handleDelete={handleDelete}
            />
          ) : null}
        </Acoes>
      ),
    },
  ]

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
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
        }}
      >
        <HeaderTable>
          <p>
            <Atendimentos />
            Atendimentos
          </p>
          <button className="novo-chamado" onClick={novoChamado}>
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
