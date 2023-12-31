﻿using Microsoft.AspNetCore.Mvc;
using net_core_test.Models;
using System.Data;
using System.Data.SqlClient;

namespace net_core_test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public EmployeeController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT EmployeeID,
                       EmployeeName,
                       Department,
                       DateOfJoining,
                       PhotoFileName
                  FROM dbo.Employee
            ";
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(EmployeePost emp)
        {
            string query = @"
                INSERT INTO dbo.Employee
                VALUES (
                    @EmployeeName,
                    @Department,
                    @DateOfJoining,
                    @PhotoFileName
                )
            ";
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@EmployeeName", emp.EmployeeName);
                    myCommand.Parameters.AddWithValue("@Department", emp.Department);
                    myCommand.Parameters.AddWithValue("@DateOfJoining", DateTime.Now);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", emp.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(EmployeePut emp)
        {
            string query = @"
                UPDATE dbo.Employee
                   SET EmployeeName = @EmployeeName,
                       Department = @Department,
                       PhotoFileName = @PhotoFileName
                 WHERE EmployeeID = @EmployeeID
            ";
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@EmployeeID", emp.EmployeeID);
                    myCommand.Parameters.AddWithValue("@EmployeeName", emp.EmployeeName);
                    myCommand.Parameters.AddWithValue("@Department", emp.Department);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", emp.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }
        [HttpDelete]
        public JsonResult Delete(EmployeeDelete emp)
        {
            string query = @"DELETE FROM dbo.Employee WHERE EmployeeID = @EmployeeID";
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@EmployeeID", emp.EmployeeID);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
        // Route to add a profile image
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;
                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }
    }
}
