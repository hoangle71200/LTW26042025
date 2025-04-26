import axios from 'axios'


export default class QLTKSoLuongSPSer {
  static async searchByTime(timeCreatedBefore, timeCreatedAfter, pageSize, page ) {
      const response = await axios.get(
        `http://localhost:7843/statquantityproduct/findByTime/${pageSize}?timeCreatedBefore=${timeCreatedBefore}
        &timeCreatedAfter=${timeCreatedAfter}&page=${page}`,
        {
          headers: {
            "Content-type": "application/json"
          },
        }
      );
      return response.data;
    }
  static async searchByTimeAndInfor(productGroup, sellType, timeCreatedBefore, timeCreatedAfter, pageSize, page ) {
    const response = await axios.get(
      `http://localhost:7843/statquantityproduct/findByTimeAndInfor/${pageSize}?timeCreatedBefore=${timeCreatedBefore}&productGroup=${productGroup}&sellType=${sellType}&timeCreatedAfter=${timeCreatedAfter}&page=${page}`,
      {
        headers: {
          "Content-type": "application/json"
        },
      }
    );
    return response.data;
  }
}