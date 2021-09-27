# Run ASP.NET Core 3.1 Apps in Docker with HTTPS.

- https://www.youtube.com/watch?v=lcaDDxJv260
- install extension docker
- $ docker --version
- download dotnet sdk
- $ dotnet --version

---

# create dotnet api project

- $ dotnet new
- $ dotnet new webapi -n WeatherAPI
- $ code-insiders -r Weather
- $ dotnet run

---

# Create self certs

- $ $ dotnet dev-certs https --trust
- https://docs.docker.com/samples/dotnetcore/

---

# dockerfile

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
- $ docker ps
- $ docker stop ceb06df494b6
- $ docker start ceb06df494b6
- $ docker run -p 8080:80 -p 8081:443 weatherapi
- https://keepinguptodate.com/pages/2020/12/net5-aspnet-docker-mac/

---

# Configuring a certificate to support HTTPS in Docker

- The first step is to remove an existing self-signed certificate if there is one.

- $ dotnet dev-certs https --check --verbose
- $ dotnet dev-certs https --clean
- $ dotnet dev-certs https --check --verbose
- create a new certificate (with a password of your choosing) and check that the certificate was created successfully.
- $ dotnet dev-certs https -ep ${HOME}/.aspnet/https/weatherapi.pfx -p myPassword

```
- $ docker run --rm -it -p 8080:80 -p 8081:443 -e ASPNETCORE_URLS="https://+;http://+" -e ASPNETCORE_HTTPS_PORT=8081 -e ASPNETCORE_Kestrel__Certificates__Default__Password="myPassword" -e ASPNETCORE_Kestrel__Certificates__Default__Path=/https/weatherapi.pfx -v ${HOME}/.aspnet/https:/https/ weatherapi
```

---

# docker-compose.yaml

```
version: '3'
services:
  weatherapi:
    build: .
    ports:
      - '8080:80'
      - '8081:443'
    environment:
      ASPNETCORE_URLS: "https://+;http://+"
      ASPNETCORE_HTTPS_PORT: "8081"
    Volumes: (not finish)
```
