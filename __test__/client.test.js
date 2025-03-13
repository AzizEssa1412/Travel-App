import { handleSubmit } from '../src/client/js/app';

describe('Client Functions', () => {
  test('handleSubmit should be defined', () => {
    expect(handleSubmit).toBeDefined();
  });

  test('handleSubmit should prevent default form submission', () => {
    const mockEvent = { preventDefault: jest.fn() };
    handleSubmit(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});