FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# COPY EVERYTHING from the build context immediately
# This helps debug context issues and avoids multiple COPY layers failing individually
COPY . .

# Restore and Publish
# We assume the repo structure is preserved in /src
RUN dotnet restore "backend/CertifyHuman.Api/CertifyHuman.Api.csproj"
RUN dotnet publish "backend/CertifyHuman.Api/CertifyHuman.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Copy frontend files from the /src directory (where we copied everything) 
# to the publish directory
WORKDIR /src
RUN mkdir -p /app/publish/wwwroot
RUN cp index.html /app/publish/wwwroot/ || echo "index.html not found in /src"
RUN cp style.css /app/publish/wwwroot/ || echo "style.css not found in /src"
RUN cp javascript.js /app/publish/wwwroot/ || echo "javascript.js not found in /src"
RUN cp certificate.html /app/publish/wwwroot/ || echo "certificate.html not found in /src"
RUN cp verify.html /app/publish/wwwroot/ || echo "verify.html not found in /src"
RUN cp about.html /app/publish/wwwroot/ || echo "about.html not found in /src"
RUN cp rodo.html /app/publish/wwwroot/ || echo "rodo.html not found in /src"
RUN cp -r admin /app/publish/wwwroot/admin/ || echo "admin not found in /src"

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "CertifyHuman.Api.dll"]
