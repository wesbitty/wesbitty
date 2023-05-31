import Textarea from './Textarea'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('#Textarea', () => {
  it('should render textarea correctly', async () => {
    render(<Textarea data-testid="form-textarea" />)
    expect(screen.queryByTestId('form-textarea')).toBeInTheDocument()
  })

  it('should have "form-textarea--error" class', () => {
    render(<Textarea isError data-testid="form-textarea" />)
    expect(screen.queryByTestId('form-textarea')).toHaveClass(
      'form-textarea border-solid form-textarea--error'
    )
  })
})
