FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
COPY ../../index.html ./wwwroot/
COPY ../../style.css ./wwwroot/
COPY ../../javascript.js ./wwwroot/
COPY ../../certificate.html ./wwwroot/
COPY ../../verify.html ./wwwroot/
COPY ../../about.html ./wwwroot/
COPY ../../rodo.html ./wwwroot/
COPY ../../admin ./wwwroot/admin/
RUN dotnet restore "./CertifyHuman.Api.csproj"
RUN dotnet publish "./CertifyHuman.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "CertifyHuman.Api.dll"]
