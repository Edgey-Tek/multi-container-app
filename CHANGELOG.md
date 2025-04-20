# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initial setup for multi-container application
- Configuration for Docker Compose
- Basic Todo application with Express, MongoDB, and EJS
- Live reload support for development
- Passport.js configuration for authentication
- API configuration file
- Winston logger configuration
- Prometheus monitoring configuration
- Authentication routes
- Environment variables file
- Contributing guide
- Changelog file

### Changed
- Updated MongoDB URI to use environment variable
- Updated Dockerfile to use `npm ci` for consistent dependency installation
- Added test and lint scripts to `package.json`
- Included additional dependencies for authentication, payments, Web3, caching, logging, and testing
- Configured Passport.js middleware in `server.js`
- Updated database connection in `server.js` to use environment variable
- Configured Winston logger in `server.js`
- Exposed Prometheus metrics in `server.js`
- Added services for Prometheus, Grafana, and Redis in `compose.yaml`
- Updated `todo-app` service in `compose.yaml` to include environment variables
