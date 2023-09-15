import { fireEvent, render } from '@testing-library/react'
import CalenderCarousalContainer, { CalendarProvider } from '..'
import {describe,expect,it} from 'vitest'

import dayjs from 'dayjs'

describe('src/containers/CalenderCarousalContainer.tsx', () => {
  it('renders correctly', () => {
    render(
      <CalendarProvider>
        <CalenderCarousalContainer />
      </CalendarProvider>
    )
  })
  it('renders correctly with custom props', () => {
    const props = {
       datesRange:{start:dayjs('10-09-2023', "DD-MM-YYYY"),end:dayjs('10-11-2023', "DD-MM-YYYY")},
       minDuration:{span:15 ,unit:"Hrs"},
       maxDuration:{span:25 ,unit:"Hrs"} ,
      closedHours: { start: 17, end: 8 },
      theme: { isDark: true },
      formats: {
        date: 'DD MMMM YY',
        time: 'Z',
        clock: '24h' as const,
      },
    }

    render(
        <CalendarProvider {...props}>
        <CalenderCarousalContainer />
      </CalendarProvider>
    )
  })
  it('check rendring of the cards', () => {
    const { getAllByTestId } = render(
        <CalendarProvider>
        <CalenderCarousalContainer />
      </CalendarProvider>
    )

    const Cards = getAllByTestId('datecard')
    expect(Cards[0]).toBeInTheDocument()
    fireEvent.click(Cards[0])
  })
  it('handles button clicks', () => {
    const { getAllByTestId } = render(
        <CalendarProvider>
        <CalenderCarousalContainer />
      </CalendarProvider>
    )

    const buttons = getAllByTestId('btn-carousal')

    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
   
  })

})
