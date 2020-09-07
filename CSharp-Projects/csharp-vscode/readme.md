---
marp: true
theme: uncover
size: 16:9
paginate: true
header :"Csharp Vscode"
footer :"by Xing"
---

# Csharp Vscode

- https://www.youtube.com/watch?v=r5dtl9Uq9V0

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

---

### F5 run debug

- run debug `F5`

---

<!--
_backgroundColor: grey
_color: white
-->

![85% bg bright:0.9](debug.png)
