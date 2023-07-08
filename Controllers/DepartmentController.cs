using Microsoft.AspNetCore.Mvc;
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
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
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
    }
}
