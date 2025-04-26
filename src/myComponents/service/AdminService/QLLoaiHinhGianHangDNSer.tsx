import axios from 'axios'


export default class QLLoaiHinhGianHangDNSer {
  static async getAll() {
    const response = await axios.get(
      `http://localhost:7843/selltypemanagement`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async add(selltype) {
    console.log(selltype)
    const response = await axios.post(
      `http://localhost:7843/selltypemanagement`, selltype,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async update(selltype) {
    console.log(selltype)
    const response = await axios.put(
      `http://localhost:7843/selltypemanagement`, selltype,
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
      `http://localhost:7843/selltypemanagement/` + id,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
}