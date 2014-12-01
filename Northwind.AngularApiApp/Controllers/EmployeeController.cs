using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using Northwind.Domain;
using Northwind.RepositoryInterface;
using Northwind.AngularApiApp.Models;
using AutoMapper;

namespace Northwind.AngularApiApp.Controllers
{
    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController
    {

        private readonly IEmployeeRepository _employeeRepository;
        private readonly IUnitOfWork _unitOfWork;

        public EmployeeController(IEmployeeRepository employeeRepository, IUnitOfWork unitOfWork)
        {
            _employeeRepository = employeeRepository;
            _unitOfWork = unitOfWork;
            Mapper.CreateMap<Employee, EmployeeIndexViewModel>();
        }

        // GET api/Employee
        public IEnumerable<EmployeeIndexViewModel> GetEmployees()
        {
            return Mapper.Map<IEnumerable<EmployeeIndexViewModel>>(_employeeRepository.Get().ToList());
            //return _employeeRepository.Get().ToList();

        }

        // GET api/values/5
        public Employee GetEmployee(int id)
        {
            Employee employee = _employeeRepository.Get().FirstOrDefault(e => e.EmployeeID == id);
            if (employee == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return employee;
        }

        // PUT api/Customer/5
        public HttpResponseMessage PutEmployee(string id, [FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != employee.EmployeeID.ToString())
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }


            _employeeRepository.Update(employee);


            try
            {
                _unitOfWork.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }


        // POST api/Employee
        public HttpResponseMessage PostCustomer(Employee employee)
        {
            if (ModelState.IsValid)
            {
                _employeeRepository.Add(employee);
              
                _unitOfWork.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, employee);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = employee.EmployeeID }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Customer/5
        public HttpResponseMessage DeleteCustomer(string id)
        {
            Employee employee = _employeeRepository.Get().FirstOrDefault(e => e.EmployeeID.ToString() == id);
            if (employee == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            _employeeRepository.Delete(employee);

            try
            {
                _unitOfWork.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, employee);
        }
    }
}
