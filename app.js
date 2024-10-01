export class ErrorRepository {
    constructor() {
      this.errors = new Map([
        [1, 'Character is already in the team'],
        [2, 'Invalid character'],
        // add more error codes and descriptions as needed
      ]);
    }
  
    translate(code) {
      return this.errors.get(code) || 'Unknown error';
    }
  }
  
