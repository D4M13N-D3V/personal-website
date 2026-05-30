import projects from '@/data/projects'

describe('projects data', () => {
  it('contains at least one project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('assigns every project a valid category', () => {
    for (const project of projects) {
      expect(['software', 'game']).toContain(project.category)
    }
  })

  it('has both software and game projects (so both tabs render content)', () => {
    expect(projects.some((p) => p.category === 'software')).toBe(true)
    expect(projects.some((p) => p.category === 'game')).toBe(true)
  })

  it('uses unique ids', () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
