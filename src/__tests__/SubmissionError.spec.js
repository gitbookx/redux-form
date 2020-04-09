import ExtendableError from 'es6-error'
import SubmissionError, { isSubmissionError } from '../SubmissionError'

describe('isSubmissionError', () => {
  it('should return `true` only when argument is instance `SubmissionError`', () => {
    expect(isSubmissionError(new SubmissionError({}))).toBe(true)
    expect(isSubmissionError(new Error())).toBe(false)
    expect(isSubmissionError(new ExtendableError())).toBe(false)
    expect(isSubmissionError({})).toBe(false)
    expect(isSubmissionError()).toBe(false)
  })
})
