---
marp: true
theme: default
header: 'Csharp'
footer: 'by Xing'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

# dotnet core command line

---

### Use dotnet to do a build

- `dotnet build`

### Create a new Solution (\*.sln)

- `dotnet new sln <sln name>`

### Create a new Class Library (\_.csproj)

- `dotnet new classlib <classlib name>`

---

### Create a new Class Library (\_.csproj) targeting .NET Core

- `dotnet new classlib -f <netcoreapp2.1>`

### Add a project (_.csproj) to a Solution (_.sln)

- `dotnet sln <SolutionFile.sln> add <.\src\Solution.WebUi\Solution.WebUi.csproj>`

### Add a reference from one Project to another

- `dotnet add reference <..\Solution.Api\Solution.Api.csproj>`

---

### Create a new ASP.NET MVC project

- `dotnet new mvc <mvc name>`

### Create a new ASP.NET MVC project targeting .NET Core

- `dotnet new mvc -f <netcoreapp2.1>`

### Create a new MSTest unit test project targeting .NET Core

- `dotnet new mstest -f <netcoreapp2.1>`

---

### Restore NuGet dependencies so that you can be ready to do a build

- `dotnet restore`
