const { default: axios } = require("axios");
const { hostUrl } = require("..");

export class User {
  static async getAllRestaurants() {
    try {


      const response = await axios.get(`${hostUrl}/user/`);

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }

  static async getRestaurantByName({ restaurantName }) {
    try {

      const response = await axios.get(`${hostUrl}/user/${restaurantName}`);

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
        result: [],
      };
    }
  }


  static async getRestaurantById({ restaurantId }) {
    try {
      const response = await axios.get(
        `${hostUrl}/user/id/${restaurantId}`
      )
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
        result: [],
      };
    }
  }
}
