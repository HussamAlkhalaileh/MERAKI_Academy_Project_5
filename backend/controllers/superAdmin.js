const connection = require("../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const createOwner = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT INTO users (firstName, lastName,  email, password, role_id) VALUES (?,?,?,?,?)`;
  const data = [firstName, lastName, email, encryptedPassword, 2];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "The email already exists",
        err,
      });
    }
    res.status(201).json({
      success: true,
      message: "Admin Created Successfully",
      results: result,
    });
  });
};
const deleteOwner = async (req, res) => {
  const { ownerId, name } = req.body;

  const query = `UPDATE users SET is_deleted=1 WHERE id=?`;

  connection.query(query, [ownerId], (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }

    const query = `UPDATE users SET is_deleted=1 WHERE name=?`;
    connection.query(query, [name], (err, result) => {
      if (err) {
        return res.status(409).json({
          success: false,
          massage: "Server Error",
          err,
        });
      }
      res.status(200).json({
        success: true,
        message: "Owner Deleted Successfully",
        results: result,
      });
    });
  });
};
const getAllRequests = (req, res) => {
  const query = "SELECT * FROM requests WHERE is_deleted =0";
  connection.query(query, [], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    if (result.length) {
      res.status(200).json({
        success: true,
        message: "All Requests",
        requests: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "No Request",
      });
    }
  });
};

const getAllUsers = (req, res) => {
  const query = "SELECT * FROM users WHERE is_deleted =0";
  connection.query(query, [], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    if (result.length) {
      res.status(200).json({
        success: true,
        message: "All users",
        users: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "No Request",
      });
    }
  });
};

const getAllOwners = (req, res) => {
  const query = "SELECT * FROM users WHERE is_deleted = 0 AND role_id = 2";
  connection.query(query, [], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }
    if (result.length) {
      res.status(200).json({
        success: true,
        message: "All users",
        owners: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "No Request",
      });
    }
  });
};

const acceptRequest = (req, res) => {
  const { id, state } = req.body;
  const query = `UPDATE requests  SET state =? WHERE id=?`;
  connection.query(query, [state, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err,
      });
    }

    res.status(200).json({
      success: true,
      massage: "Request State Change",
    });
  });
};

module.exports = {
  createOwner,
  deleteOwner,
  getAllRequests,
  acceptRequest,
  getAllUsers ,
  getAllOwners 
};
