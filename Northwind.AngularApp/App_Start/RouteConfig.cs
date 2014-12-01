using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Northwind.AngularApp
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               name: "routeOne",
               url: "routesDemo/One",
               defaults: new { controller = "RoutesDemo", action = "One" });

            routes.MapRoute(
                name: "routeTwo",
                url: "routesDemo/Two/{donuts}",
                defaults: new { controller = "RoutesDemo", action = "Two", donuts = UrlParameter.Optional });

            routes.MapRoute(
                name: "routeThree",
                url: "routesDemo/Three",
                defaults: new { controller = "RoutesDemo", action = "Three" });

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" });

            routes.MapRoute(
                name: "register",
                url: "Account/Register",
                defaults: new { controller = "Account", action = "Register" });

            routes.MapRoute(
              name: "EmployeeIndex",
              url: "Employee/Index",
              defaults: new { controller = "Employee", action = "Index" });

            routes.MapRoute(
              name: "GetEmployee",
              url: "Employee/GetEmployee",
              defaults: new { controller = "Employee", action = "GetEmployee" });

            routes.MapRoute(
               name: "EmployeeDetails",
               url: "Employee/Details/{id}",
               defaults: new { controller = "Employee", action = "Details", id = UrlParameter.Optional });

            routes.MapRoute(
             name: "EmployeeCreate",
             url: "Employee/Create",
             defaults: new { controller = "Employee", action = "Create" });

            routes.MapRoute(
             name: "EmployeeEdit",
             url: "Employee/Edit",
             defaults: new { controller = "Employee", action = "Edit" });

            routes.MapRoute(
             name: "EmployeeDelete",
             url: "Employee/Delete",
             defaults: new { controller = "Employee", action = "Delete" });

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" });

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);
        }
    }
}
