# 🌾 Selepin App - Platform Penggilingan Padi Modern

Aplikasi web full-stack untuk menghubungkan petani dengan penyedia jasa penggilingan padi (selep) dengan sistem booking online, tracking lokasi, dan marketplace produk pertanian.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: NestJS + TypeScript + Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: JWT + NextAuth.js
- **Maps**: Google Maps API
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
selepin-app/
├── apps/
│   ├── api/                 # NestJS Backend API
│   │   ├── src/
│   │   │   ├── auth/        # Authentication module
│   │   │   ├── users/       # User management
│   │   │   ├── selep/       # Selep (rice mill) management
│   │   │   ├── booking/     # Booking system
│   │   │   ├── products/    # Product marketplace
│   │   │   └── prisma/      # Database service
│   │   ├── prisma/          # Database schema & migrations
│   │   └── package.json
│   └── web/                 # Next.js Frontend
│       ├── src/
│       │   ├── app/         # App router pages
│       │   ├── components/  # Reusable components
│       │   ├── lib/         # Utilities & API client
│       │   └── types/       # TypeScript types
│       └── package.json
├── packages/
│   └── shared/              # Shared types & utilities
│       └── src/types/
├── docker-compose.yml       # Database setup
├── package.json            # Root package with scripts
└── README.md
```

## 🛠️ Prerequisites

Pastikan sudah terinstall:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org))
- **npm** atau **yarn**
- **Git** ([Download](https://git-scm.com))
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop)) - untuk database

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/your-username/selepin-app.git
cd selepin-app
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd apps/api && npm install && cd ../..

# Install frontend dependencies
cd apps/web && npm install && cd ../..
```

### 3. Setup Environment Variables

**Backend (.env)**
```bash
# Copy example env file
cp apps/api/.env.example apps/api/.env
```

Edit `apps/api/.env`:
```env
DATABASE_URL="postgresql://selepin_user:selepin_pass@localhost:5432/selepin_db?schema=public"
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"
PORT=3001
NODE_ENV="development"
FRONTEND_URL="http://localhost:3000"
```

**Frontend (.env.local)**
```bash
# Copy example env file
cp apps/web/.env.example apps/web/.env.local
```

Edit `apps/web/.env.local`:
```env
NEXT_PUBLIC_API_URL="http://localhost:3001/api/v1"
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
```

### 4. Start Database
```bash
npm run db:up
```

### 5. Setup Database Schema
```bash
cd apps/api
npx prisma generate
npx prisma migrate dev --name init
cd ../..
```

### 6. Start Development Servers
```bash
# Start both frontend & backend
npm run dev
```

🎉 **Done!** 
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Database Admin: http://localhost:5555 (run `npx prisma studio` in apps/api)

## 📋 Available Scripts

### Root Level Scripts
```bash
npm run dev              # Start both frontend & backend
npm run dev:api          # Start only backend
npm run dev:web          # Start only frontend
npm run db:up            # Start PostgreSQL database
npm run db:down          # Stop database
npm run db:reset         # Reset database & run migrations
```

### Backend Scripts (in apps/api/)
```bash
npm run start:dev        # Start NestJS in development mode
npm run build            # Build for production
npm run start:prod       # Start production server
npm run test             # Run unit tests
npm run test:e2e         # Run end-to-end tests
npx prisma studio        # Open database admin UI
npx prisma migrate dev   # Create & run new migration
```

### Frontend Scripts (in apps/web/)
```bash
npm run dev              # Start Next.js development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

## 🏗️ Core Features

### 👤 User Management
- ✅ User registration & authentication
- ✅ Role-based access (Petani, Selep, Admin)
- ✅ Profile management
- 🔄 Password reset & email verification

### 🏭 Selep (Rice Mill) Management
- ✅ Selep registration & profile
- ✅ Location-based search with maps
- ✅ Capacity & pricing management
- 🔄 Operating hours & availability
- 🔄 Reviews & ratings

### 📅 Booking System
- ✅ Online booking creation
- ✅ Real-time booking status
- 🔄 Payment integration
- 🔄 Booking history & tracking
- 🔄 Notification system

### 🛒 Product Marketplace
- 🔄 Product listing & management
- 🔄 Search & filter products
- 🔄 Shopping cart & checkout
- 🔄 Order management

**Legend**: ✅ Implemented | 🔄 In Development | ❌ Not Started

## 🗄️ Database Schema

### Main Entities

**Users**
- Authentication & profile data
- Role-based permissions (Petani/Selep/Admin)

**Seleps**
- Rice mill information
- Location data (lat/lng)
- Capacity & pricing

**Bookings**
- Booking details & status tracking
- User-Selep relationship
- Payment & processing info

**Products**
- Agricultural product listings
- User-generated marketplace

## 🔧 Development

### Adding New Features

1. **Backend (NestJS)**
   ```bash
   cd apps/api
   nest generate module feature-name
   nest generate controller feature-name
   nest generate service feature-name
   ```

2. **Frontend (Next.js)**
   ```bash
   cd apps/web/src
   mkdir components/feature-name
   # Create your components
   ```

3. **Database Changes**
   ```bash
   cd apps/api
   # Edit prisma/schema.prisma
   npx prisma migrate dev --name add-feature-name
   npx prisma generate
   ```

### Code Style & Linting

- **Backend**: ESLint + Prettier configured
- **Frontend**: ESLint + Prettier + Tailwind CSS
- **Pre-commit hooks**: Husky (planned)

### Testing

```bash
# Backend tests
cd apps/api
npm test                 # Unit tests
npm run test:e2e         # E2E tests

# Frontend tests (planned)
cd apps/web
npm test                 # Jest + React Testing Library
```

## 🚀 Deployment

### Production Build

```bash
# Build backend
cd apps/api && npm run build

# Build frontend
cd apps/web && npm run build
```

### Docker Deployment (Planned)

```bash
# Build & run all services
docker-compose -f docker-compose.prod.yml up --build
```

### Environment Setup

**Production Environment Variables**:
- Set strong JWT secrets
- Configure production database
- Set up Google Maps API key
- Configure email service for notifications

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Ensure code passes linting

## 📞 API Documentation

### Authentication Endpoints
```
POST /api/v1/auth/register     # User registration
POST /api/v1/auth/login        # User login
POST /api/v1/auth/refresh      # Refresh token
GET  /api/v1/auth/profile      # Get user profile
```

### Selep Endpoints
```
GET    /api/v1/selep           # List all seleps
POST   /api/v1/selep           # Create new selep
GET    /api/v1/selep/:id       # Get selep details
PUT    /api/v1/selep/:id       # Update selep
DELETE /api/v1/selep/:id       # Delete selep
GET    /api/v1/selep/nearby    # Find nearby seleps
```

### Booking Endpoints
```
GET    /api/v1/booking         # List user bookings
POST   /api/v1/booking         # Create new booking
GET    /api/v1/booking/:id     # Get booking details
PUT    /api/v1/booking/:id     # Update booking status
DELETE /api/v1/booking/:id     # Cancel booking
```

For detailed API documentation, visit: http://localhost:3001/api/docs (when Swagger is implemented)

## 🛡️ Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Input validation & sanitization
- Rate limiting (planned)
- SQL injection prevention via Prisma

## 📊 Monitoring & Analytics

- Application logs
- Error tracking (planned: Sentry)
- Performance monitoring (planned)
- Usage analytics (planned)

## 🆘 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Make sure Docker is running
docker ps
npm run db:up
```

**Port Already in Use**
```bash
# Kill process using port 3000 or 3001
npx kill-port 3000
npx kill-port 3001
```

**Prisma Client Error**
```bash
cd apps/api
npx prisma generate
npx prisma db push
```

**Environment Variables Not Loaded**
- Check file names: `.env` (backend) and `.env.local` (frontend)
- Restart development servers after changes
- Ensure no trailing spaces in environment values

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: Muhammad Ma'mun Efendi
- **Institution**: Universitas Negeri Semarang
- **Year**: 2025

## 🙏 Acknowledgments

- NestJS & Next.js communities
- Prisma team for excellent ORM
- Tailwind CSS for utility-first styling
- Universitas Negeri Semarang for academic support
- All open-source contributors

---

<div align="center">
  
**Happy Coding! 🌾✨**

*Developed with ❤️ by Muhammad Ma'mun Efendi*  
*Mahasiswa Universitas Negeri Semarang • 2025*

---

© 2025 Muhammad Ma'mun Efendi - Universitas Negeri Semarang  
All rights reserved.

</div>
