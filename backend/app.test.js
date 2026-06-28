const request = require("supertest");
const app = require("./app");
const mongoose = require("mongoose");
const Product = require("./models/productModel"); 

jest.mock("./models/productModel"); 

describe("MERN Backend API Tests", () => {
  
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should respond with a 200 status code for products", async () => {
    // 1. Build a mock query chain that includes the `.find()` method your ApiFeatures class expects
    const mockQueryChain = {
      find: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      // This handles the eventual execution of the Mongoose query
      then: jest.fn().mockImplementation((callback) => callback([])),
      catch: jest.fn()
    };

    // 2. Assign this chain to Product.find
    Product.find = jest.fn().mockReturnValue(mockQueryChain);
    Product.countDocuments = jest.fn().mockResolvedValue(0);

    const response = await request(app).get("/api/v1/products"); 
    
    expect(response.statusCode).toBe(200);
  }); 

  it("should return 404 for an unknown route", async () => {
    const response = await request(app).get("/api/v1/this-route-does-not-exist");
    expect(response.statusCode).toBe(404);
  });

});