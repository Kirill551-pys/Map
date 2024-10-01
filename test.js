import ErrorRepository from './app.js';

describe('ErrorRepository', () => {
  let errorRepository;

  beforeEach(() => {
    errorRepository = new ErrorRepository();
  });

  it('переводит известный код ошибки', () => {
    expect(errorRepository.translate(1)).toBe('Character is already in the team');
  });

  it('возвращает "Неизвестная ошибка" для неизвестного кода ошибки', () => {
    expect(errorRepository.translate(3)).toBe('Unknown error');
  });

  it('возвращает "Неизвестную ошибку" для нулевого или неопределенного кода ошибки', () => {
    expect(errorRepository.translate(null)).toBe('Unknown error');
    expect(errorRepository.translate(undefined)).toBe('Unknown error');
  });
});