import { ErrorRepository } from './app.js';
describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  it('adds an error code and description', () => {
    repo.addError(1, 'Error 1 description');
    expect(repo.translate(1)).toBe('Error 1 description');
  });

  it('translates an existing error code', () => {
    repo.addError(2, 'Error 2 description');
    expect(repo.translate(2)).toBe('Error 2 description');
  });

  it('translates an unknown error code', () => {
    expect(repo.translate(3)).toBe('Unknown error');
  });

  it('adds multiple error codes and descriptions', () => {
    repo.addError(1, 'Error 1 description');
    repo.addError(2, 'Error 2 description');
    expect(repo.translate(1)).toBe('Error 1 description');
    expect(repo.translate(2)).toBe('Error 2 description');
    expect(repo.translate(3)).toBe('Unknown error');
  });
});