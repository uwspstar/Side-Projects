### create sln
- dotnet new sln -n "vscodeIntroSln"
### create console project
- dotnet new console -n "IntroUI"
### create lib project
- dotnet new classlib -n "IntroLibary"
### add projects to sln
- dotnet sln vscodeIntroSln.sln add ./IntroUI/IntroUI.csproj
- dotnet sln vscodeIntroSln.sln add ./IntroLibary/IntroLibary.csproj
### add projects to sln
- dotnet sln vscodeIntroSln.sln add **/*.csproj

### project reference
- dotnet add IntroUI/IntroUI.csproj reference IntroLibary/IntroLibary.csproj

### 