import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/components/ThemeRegistry/theme'
import ProjectCard, { Project } from '@/components/ProjectCard'

const project: Project = {
  id: 'test-1',
  title: 'Test Project',
  category: 'software',
  description: 'A test project description.',
  technologies: ['TypeScript', 'React'],
  images: []
}

const renderCard = (p: Project = project) =>
  render(
    <ThemeProvider theme={theme}>
      <ProjectCard project={p} />
    </ThemeProvider>
  )

describe('ProjectCard', () => {
  it('renders the project title and description', () => {
    renderCard()
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project description.')).toBeInTheDocument()
  })

  it('renders a chip for each technology', () => {
    renderCard()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders a repository button when repositories are provided', () => {
    renderCard({
      ...project,
      repositories: [{ name: 'Repo', url: 'https://example.com/repo' }]
    })
    const link = screen.getByRole('link', { name: /Repo/i })
    expect(link).toHaveAttribute('href', 'https://example.com/repo')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })
})
