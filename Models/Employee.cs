namespace net_core_test.Models
{
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public string DateOfJoining { get; set; }
        public string PhotoFileName { get; set; }
    }
    public class EmployeePost
    {
        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public string PhotoFileName { get; set; }
    }
    public class EmployeePut
    {
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public string PhotoFileName { get; set; }
    }
    public class EmployeeDelete
    {
        public int EmployeeID { get; set; }
    }
}
