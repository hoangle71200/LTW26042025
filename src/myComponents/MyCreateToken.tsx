import axios from 'axios'


export default class MyCreateToken {
  static async postToken(user) {
    const response = await axios.post(
      `http://localhost:7843/api/token`, user,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
}