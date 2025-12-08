FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
# Copy csproj and restore as distinct layers
COPY ["backend/CertifyHuman.Api/CertifyHuman.Api.csproj", "backend/CertifyHuman.Api/"]
RUN dotnet restore "backend/CertifyHuman.Api/CertifyHuman.Api.csproj"

# Copy everything
COPY . .

# Publish
WORKDIR "/src/backend/CertifyHuman.Api"
RUN dotnet publish "CertifyHuman.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Copy frontend files to the publish directory's wwwroot
# This ensures they are included in the final image
RUN mkdir -p /app/publish/wwwroot
COPY index.html /app/publish/wwwroot/
COPY style.css /app/publish/wwwroot/
COPY javascript.js /app/publish/wwwroot/
COPY certificate.html /app/publish/wwwroot/
COPY verify.html /app/publish/wwwroot/
COPY about.html /app/publish/wwwroot/
COPY rodo.html /app/publish/wwwroot/
COPY admin /app/publish/wwwroot/admin/

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "CertifyHuman.Api.dll"]
