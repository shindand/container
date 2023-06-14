export  class ErrorRepository {  
    constructor() {
      this.mapError = new Map([
       [1, 'нет такого пользователя'], 
       [2, 'ошибка чтения массива'],
       [3, 'SyntaxError: Unexpected token 0'],
       [4, 'ну нет тут такого'],
     ]);
    }
     translate(code){
       if(this.mapError.has(code)) {
       return this.mapError.get(code);
       }
       else {
         return 'Unknown error';
       }
     }
   }
   
   let myError = new ErrorRepository();
   myError.translate(5);