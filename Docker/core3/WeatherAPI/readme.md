# Run ASP.NET Core 3.1 Apps in Docker with HTTPS.

- https://www.youtube.com/watch?v=lcaDDxJv260
- install extention docker
- $ docker --version
- download donet sdk
- $ dotnet --version
- $ dotnet new
- $ dotnet new webapi -n WeatherAPI
- $ code-insiders -r Weather
- $ dotnet run
- $ $ dotnet dev-certs https --trust
- https://docs.docker.com/samples/dotnetcore/

```dockerfile
# syntax=docker/dockerfile:1
# FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "WeatherAPI.dll"]
```

- $ docker build -t weatherapi .
- $ docker ps
- $ docker run weatherapi
- $ docker run -p 8080:80 weatherapi
