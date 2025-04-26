import axios from 'axios'


export default class DanhMucLoaiSPSer {
  static async getAll() {
    const response = await axios.get(
      `http://localhost:7843/producttypemanagement`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async getAllName() {
    const response = await axios.get(
      `http://localhost:7843/producttypemanagement/name`,
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
      `http://localhost:7843/producttypemanagement`, inp,
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
      `http://localhost:7843/producttypemanagement`, inp,
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
      `http://localhost:7843/producttypemanagement/` + id,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
}