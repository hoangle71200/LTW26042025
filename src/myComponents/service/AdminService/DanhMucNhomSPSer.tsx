import axios from 'axios'


export default class DanhMucNhomSPSer {
  static async getAll() {
    const response = await axios.get(
      `http://localhost:7843/productgroupmanagement`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async getAllByLoaiSP(loaiSP) {
    const response = await axios.get(
      `http://localhost:7843/productgroupmanagement/loaisp/${loaiSP}`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async add(inp) {
    const response = await axios.post(
      `http://localhost:7843/productgroupmanagement`, inp,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async update(inp) {
    const response = await axios.put(
      `http://localhost:7843/productgroupmanagement`, inp,
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
      `http://localhost:7843/productgroupmanagement/` + id,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
}