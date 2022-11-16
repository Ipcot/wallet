import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

import Header from "./Header"
import Loader from './Loader'

const SystemLayout = () => {
  return <div>
    <Header />
    <main style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "50%", background: "green" }}>
        <NavLink to={'home'}>Home</NavLink>
        <NavLink to={'statistics'}>Statistics</NavLink>

        <div style={{ background: "yellow", marginTop: 100 }}>Balance component: 24 000.00</div>
        <div style={{ background: "lightblue" }}>Currencies course: USD EUR UAH</div>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  </div>
}

export default SystemLayout