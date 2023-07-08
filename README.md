# .NET Core Test

Testing .NET Core with react with this [handy tutorial from Art of Engineer](https://youtu.be/ON-Z1iD6Y-c)

## Important files

-   Dependencies and packages are in the `Dependencies` folder
-   [`launchSettings.json`](./Properties/launchSettings.json) has the details on how the project should be started
-   API methods are on [`Controllers`](./Controllers/)
-   Configuration details such as the DataBase are on [`appsettings.json`](./appsettings.json)
-   The entry point of our app is in [`Program.cs`](./Program.cs), which also creates the webhost that listens `HTTP` requests
-   The services needed in our app are in [Startup.cs](./Startup.cs)

    -   Services are reusable components that can be used in our App using dependency injection
    -   It has the configure method which creates our App's request processing pipeline
    -   For this you usually need to modify `CORS` on `ConfigureServices(){}` and `Configure(){}` and the `serializer` on `ConfigureServices(){}` (you'll need to install it with `NuGet`)

        ```CSHARP
        using Microsoft.AspNetCore.Builder;
        using Newtonsoft.Json.Serialization;

        namespace net_core_test
        {
            public class Startup
            {
                public Startup(IConfiguration configuration)
                {
                    Configuration = configuration;
                }
                public IConfiguration Configuration { get; }
                public void ConfigureServices(IServiceCollection services)
                {
                    // Enable CORS
                    services.AddCors(c =>
                    {
                        c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
                    });
                    services.AddControllers();
                    // JSON Serializer
                    services.AddControllersWithViews().AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                        .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
                }
                public void Configure(IApplicationBuilder app)
                {
                    // Enable CORS
                    app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
                }
            }
        }
        ```

-   In `.NET 7.0` the startup file is not required and services are added in `Program.cs`

    ```CSHARP
    var MyAllowCORS = "_myAllowCORS";
    var builder = WebApplication.CreateBuilder(args);

    // CORS configuration
    builder.Services.AddCors(options =>
    {
        options.AddPolicy(name: MyAllowCORS,
                        policy =>
                        {
                            policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                        });
    });

    // Add services to the container.
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    // JSON Serializer
    builder.Services.AddControllers().AddNewtonsoftJson();

    var app = builder.Build();
    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }
    app.UseCors(MyAllowCORS);
    app.UseAuthorization();
    app.MapControllers();
    app.Run();
    ```

## Setting Up The Database

-   We'll need to add models for each DB table, they're like the skelleton of our data and are in the [`Models`](./Models/) folder
    -   Simple example
        ```CSHARP
        namespace net_core_test.Models
        {
            public class Department
            {
                public int DepartmentID { get; set; }
                public string? DepartmentName { get; set; }
            }
        }
        ```
-   We'll need to add the connection to Microsoft SQL in our `appsettings.json` file (example for Windows Authentication)

    ```JSON
    {
        "ConnectionStrings": {
            "EmployeeAppCon": "Data Source=<Server>;Initial Catalog=<DB Name>;Integrated Security=true"
        },
        "Logging": {
            "LogLevel": {
                "Default": "Information",
                "Microsoft.AspNetCore": "Warning"
            }
        },
        "AllowedHosts": "*"
    }
    ```

-   Now we can create our controller

    -   For this step we need to install another `NuGet` package called `System.Data.SqlClient`

    ```CSHARP
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
    ```

-   And test it using it's route or if you're using `swagger` you can test it there
