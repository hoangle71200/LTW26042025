import axios from 'axios'


export default class QLChaoHangSer {
  static async getAll() {
    const response = await axios.get(
      `http://localhost:7843/productmanagement`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async getAllbyPage(pagesize, page) {
    const response = await axios.get(
      `http://localhost:7843/productmanagement/page/${pagesize}?page=${page}`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async getListByDepartmentId(id) {
    const response = await axios.get(
      `http://localhost:7843/productmanagement/departmentId/` + id,
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
      `http://localhost:7843/productmanagement/name`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async add(inp) {
    console.log("chao hang ser")
    const response = await axios.post(
      `http://localhost:7843/productmanagement`, inp,
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
      `http://localhost:7843/productmanagement`, inp,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
  static async hide(id) {
    const response = await axios.put(
      `http://localhost:7843/productmanagement/hide/`+ id,
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
      `http://localhost:7843/productmanagement/` + id,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
}