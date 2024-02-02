import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import { TablesList } from '../components/TablesList'
import FormContainer from '../components/FormContainer'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormContainer />} />
        <Route path="/tables" element={<TablesList />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

    </>
  )
}