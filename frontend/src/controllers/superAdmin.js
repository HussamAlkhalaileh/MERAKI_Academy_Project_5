import axios from "axios";
import { hostUrl } from "..";

export class SuperAdmin {
  static async createOwner({ firstName, lastName, email, password, token }) {
    try {
      const body = { firstName, lastName, email, password };
      const response = await axios.post(`${hostUrl}/superAdmin/owner`, body, {
        headers: { authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "The email already exists",
        error,
      };
    }
  }
  static async deleteOwner({ ownerId, restaurantName:name, token }) {
    console.log(ownerId,name, token );
    try {
      const response = await axios.delete(
        `${hostUrl}/superAdmin/delete/owner`,
        {
          headers: { authorization: `Bearer ${token}` },
          data: { ownerId, name },
        }
      );
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }
  static async getAllRequests({ token }) {
    try {
      const response = await axios.get(`${hostUrl}/superAdmin/requests`, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: "false",
        massage: "Server Error",
        error,
      };
    }
  }
  static async getAllUsers({ token }) {
    try {
      const response = await axios.get(`${hostUrl}/superAdmin/users`, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }

  static async getAllOwners({ token }) {
    try {
      const response = await axios.get(`${hostUrl}/superAdmin/owners`, {
        headers: { authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        massage: "Server Error",
        error,
      };
    }
  }
  static async acceptRequest({ requestId, state, token }) {
    try {
      const response = await axios.put(
        `${hostUrl}/superAdmin/requests`,
        { requestId, state },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return {
        success: true,
        massage: "Request State Change",
      };
    }
  }
}
