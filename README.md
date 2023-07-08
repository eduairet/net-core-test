# .NET Core Test

Testing .NET Core

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
