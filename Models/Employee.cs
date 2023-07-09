namespace net_core_test.Models
{
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; } = default!;
        public string Department { get; set; } = default!;
        public string DateOfJoining { get; set; } = default!;
        public string PhotoFileName { get; set; } = default!;
    }
    public class EmployeePost
    {
        public string EmployeeName { get; set; } = default!;
        public string Department { get; set; } = default!;
        public string PhotoFileName { get; set; } = default!;
    }
    public class EmployeePut
    {
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; } = default!;
        public string Department { get; set; } = default!;
        public string PhotoFileName { get; set; } = default!;
    }
    public class EmployeeDelete
    {
        public int EmployeeID { get; set; }
    }
}
