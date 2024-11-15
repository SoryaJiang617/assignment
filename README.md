	How to set up and run the ASP.NET Core API.

1.Open Visual Studio: Create a new ASP.NET Core Web API project and name it Backend.
2 Add Models:	In the Models folder, create Job and SubItem model classes.
3.	Create ApplicationDbContext: In the Data folder, create the ApplicationDbContext class and configure DbSet properties for Job and SubItem.
4.	Configure Services: In the Program.cs file, configure ApplicationDbContext to use an in-memory database.
5.	Create Controller: In the Controllers folder, create JobsController and implement GET and POST endpoints.
6.	Run the Project:
7.	Test the API: Access GET /api/jobs to view the seed data.
                  Use POST /api/jobs to add new jobs and sub-items.

	How to set up and run the React application.
npx create-react-app my-app  npm start

	Subitems store in database table and tag to the job when creating
dotnet ef migrations add InitialCreate
dotnet ef database update
