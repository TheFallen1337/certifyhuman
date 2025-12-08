FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy everything (assuming context is backend/CertifyHuman.Api/)
COPY . .

# Restore and Publish
# Since we are in the project dir, we just restore the local csproj
RUN dotnet restore "CertifyHuman.Api.csproj"
RUN dotnet publish "CertifyHuman.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Frontend files are now in wwwroot, so they are automatically included by dotnet publish!

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "CertifyHuman.Api.dll"]
