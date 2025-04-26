import axios from 'axios'


export default class UserManagementService {
  static async getAll() {
    const response = await axios.get(
      `http://localhost:7843/usermanagement`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async add(inp) {
    console.log(inp)
    const response = await axios.post(
      `http://localhost:7843/usermanagement`, inp,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async update(inp) {
    console.log(inp)
    const response = await axios.put(
      `http://localhost:7843/usermanagement`, inp,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async delete(id) {
    const response = await axios.delete(
      `http://localhost:7843/usermanagement/` + id,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async checkLogin(username, password) {
    const response = await axios.post(
      `http://localhost:7843/usermanagement/checkLogin/` + username, password,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
}