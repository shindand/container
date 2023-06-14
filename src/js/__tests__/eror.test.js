import {ErrorRepository} from '../error';

test('error', () => {    
    let myError = new ErrorRepository();
    const result = myError.translate(2);
      expect(result).toEqual('ошибка чтения массива');
  });

  test('error2', () => {    
    let myError = new ErrorRepository();
    const result = myError.translate(5);
      expect(result).toEqual('Unknown error');
  });