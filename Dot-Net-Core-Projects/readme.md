---
marp: true
theme: uncover
size: 16:9
paginate: true
header :"Csharp Vscode"
footer :"by Xing"
---

# ASP.NET Core applications

---

### To develop and run ASP.NET Core applications locally, download and install the following

- https://youtu.be/mVPYedvM95w
- .NET Core SDK https://dotnet.microsoft.com/download
- Visual Studio Code + C# extension

---

### .NET Core and C# in VS Code

- https://softchris.github.io/pages/dotnet-core.html#resources

---

### Tutorial: Create a console application with .NET Core using Visual Studio Code

- https://docs.microsoft.com/th-th/dotnet/core/tutorials/with-visual-studio-code

---

### create sln

- `dotnet new sln -n "vscodeIntroSln"`

---

### create console project

- `dotnet new console -n "IntroUI"`

---

### create lib project

- `dotnet new classlib -n "IntroLibary"`

---

### add projects to sln

- `dotnet sln vscodeIntroSln.sln add ./IntroUI/IntroUI.csproj`
- `dotnet sln vscodeIntroSln.sln add ./IntroLibary/IntroLibary.csproj`

---

### add projects to sln

- `dotnet sln vscodeIntroSln.sln add **/*.csproj`

---

### project reference

- `dotnet add IntroUI/IntroUI.csproj reference IntroLibary/IntroLibary.csproj`

---

### dotnet run

- `cd IntroUI`
- `dotnet run`
