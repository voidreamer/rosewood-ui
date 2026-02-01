import { useState } from 'react'
import {
  Navbar, NavbarLink, ThemeToggle, Container,
} from '@rosewood-ui/react'
import { PlaygroundPage } from './pages/PlaygroundPage'
import { DashboardPage } from './pages/DashboardPage'
import { FormPage } from './pages/FormPage'

type Page = 'playground' | 'dashboard' | 'form'

export function App() {
  const [page, setPage] = useState<Page>('playground')

  return (
    <>
      <Navbar
        brand={<><span className="rw-navbar__logo">🌹</span> Rosewood UI</>}
        nav={
          <>
            <NavbarLink active={page === 'playground'} onClick={() => setPage('playground')} href="#">Playground</NavbarLink>
            <NavbarLink active={page === 'dashboard'} onClick={() => setPage('dashboard')} href="#">Dashboard</NavbarLink>
            <NavbarLink active={page === 'form'} onClick={() => setPage('form')} href="#">Forms</NavbarLink>
          </>
        }
        actions={<ThemeToggle />}
      />
      <main style={{ padding: '2rem 0' }}>
        <Container>
          {page === 'playground' && <PlaygroundPage />}
          {page === 'dashboard' && <DashboardPage />}
          {page === 'form' && <FormPage />}
        </Container>
      </main>
    </>
  )
}
