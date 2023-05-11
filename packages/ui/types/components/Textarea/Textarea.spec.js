var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
import { jsx as _jsx } from 'react/jsx-runtime'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Textarea from './Textarea'
describe('#Textarea', () => {
  it('should render textarea correctly', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      render(_jsx(Textarea, { 'data-testid': 'form-textarea' }))
      expect(screen.queryByTestId('form-textarea')).toBeInTheDocument()
    }))
  it('should have "form-textarea--error" class', () => {
    render(_jsx(Textarea, { isError: true, 'data-testid': 'form-textarea' }))
    expect(screen.queryByTestId('form-textarea')).toHaveClass(
      'form-textarea border-solid form-textarea--error'
    )
  })
})
