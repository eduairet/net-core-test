using Microsoft.AspNetCore.Mvc;
using net_core_test.Models;
using System.Data;
using System.Data.SqlClient;

namespace net_core_test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DepartmentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // API method to get the data from Department table
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT DepartmentID, DepartmentName FROM dbo.Department";
            // Get the data into a data table object
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    // Fill the data in the data table
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            // And return the data in JSON format
            return new JsonResult(table);
        }
        // API method to add data to the Department table
        [HttpPost]
        public JsonResult Post(string departmentName)
        {
            string query = @"INSERT INTO dbo.Department VALUES (@DepartmentName)";
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using (SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@DepartmentName", departmentName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        // API method to update data in the Department table
        [HttpPut]
        public JsonResult Put(Department dep)
        {
            string query = @"UPDATE dbo.Department SET DepartmentName = @DepartmentName WHERE DepartmentID = @DepartmentID";
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@DepartmentID", dep.DepartmentID);
                    myCommand.Parameters.AddWithValue("@DepartmentName", dep.DepartmentName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }
        // API method to delete data in the Department table
        [HttpDelete("{id}")]//Accepts the id parameter in the URL
        public JsonResult Delete(int id)
        {
            string query = @"DELETE FROM dbo.Department WHERE DepartmentID = @DepartmentID";
            DataTable table = new DataTable();
            string? connectionString = _configuration.GetConnectionString("EmployeeAppCon");
            string sqlDataSource = connectionString ?? throw new Exception("Connection string is null or empty.");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@DepartmentID", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
