---
marp: true
theme: uncover
paginate: true
header :"Csharp Vscode"
footer :"by Xing"
size: 16:9
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

- `cd IntroUI`
- run debug `F5`

---

<!--
_backgroundColor: grey
_color: white
-->

![85% bg bright:0.9](debug.png)

---

### NuGet

- `cd IntroLibary`
- `dotnet add package Dapper`
- `IntroLibary.csproj`

```
<ItemGroup>
    <PackageReference Include="Dapper" Version="2.0.35" />
</ItemGroup>
```

---

### dotnet restore

- after copy NuGet packageReference
- run `dotnet restore`
