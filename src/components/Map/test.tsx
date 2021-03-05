import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    )
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Boituva',
      slug: 'boituva',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Buenos Aires',
      slug: 'buenosaires',
      location: {
        latitude: 14,
        longitude: 80
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/boituva/i)).toBeInTheDocument()
    expect(screen.getByTitle(/buenos aires/i)).toBeInTheDocument()
  })
})
