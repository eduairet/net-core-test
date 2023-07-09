namespace net_core_test.Models
{
    public class Department
    {
        public int DepartmentID { get; set; }
        public string DepartmentName { get; set; } = default!;
    }
    public class DeparmentPost
    {
        public string DepartmentName { get; set; } = default!;
    }
    public class DeparmentDelete
    {
        public int DepartmentID { get; set; } = default!;
    }
}
