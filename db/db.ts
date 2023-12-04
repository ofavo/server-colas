import mongosee from 'mongoose';
import { urlDB } from '../environment';
// or as an es module:

// Database Name


export const dbConnection = async () => {
  // Use connect method to connect to the server
  try {
  await mongosee.connect(urlDB, {

    });
    console.log('Connected successfully to db');
  } catch (error) {
    console.log(error);
  }


  // the following code examples can be pasted here...

}
