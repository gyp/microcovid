import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { AllProviders } from 'test/utils'

import { Calculator } from 'pages/Calculator'

describe('calculator page', () => {
  it('renders at all', () => {
    const { getByText } = render(<Calculator />, { wrapper: AllProviders })

    expect(getByText(/new quantitative unit for risk/i)).toBeInTheDocument()
  })

  it('activity details section reveals after location is selected', () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <Calculator />,
      {
        wrapper: AllProviders,
      },
    )

    const interactionTypeLabelQuery = /What do you want to know/i
    expect(queryByText(interactionTypeLabelQuery)).not.toBeInTheDocument()
    const topLocationBox = getByPlaceholderText(/Select Country or US State/i)
    fireEvent.click(topLocationBox)
    const californiaOption = getByText(/California/i)
    fireEvent.click(californiaOption)
    expect(getByText(interactionTypeLabelQuery)).toBeInTheDocument()
  })
})
