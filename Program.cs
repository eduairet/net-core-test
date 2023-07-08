var MyAllowCORS = "_myAllowCORS";
var builder = WebApplication.CreateBuilder(args);

// CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: MyAllowCORS,
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
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