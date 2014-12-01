using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Northwind.AngularApp.Startup))]
namespace Northwind.AngularApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
