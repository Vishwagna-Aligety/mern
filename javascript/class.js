class Employee
{
    id=201;
    ename="Vish";
    displayInfo()
    {
        console.log(this.id+ " " +this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();