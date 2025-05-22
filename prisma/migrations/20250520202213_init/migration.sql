-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'NULL');

-- CreateEnum
CREATE TYPE "ProcCategory" AS ENUM ('ACOMPANHAMENTO', 'ESTÉTICA', 'CIRURGIA', 'RESTAURAÇÃO', 'CANAL', 'CLAREAMENTO');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patients" (
    "id" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT,
    "bday" DATE NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "gender" "Gender" NOT NULL DEFAULT 'NULL',
    "address" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Procedures" (
    "id" SERIAL NOT NULL,
    "procName" TEXT NOT NULL,
    "category" "ProcCategory" NOT NULL DEFAULT 'ACOMPANHAMENTO',
    "estDuration" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Procedures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "procId" INTEGER NOT NULL,
    "apDate" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MedicalHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Patients_id_key" ON "Patients"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Patients_email_key" ON "Patients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Procedures_id_key" ON "Procedures"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Appointments_id_key" ON "Appointments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalHistory_id_key" ON "MedicalHistory"("id");

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_procId_fkey" FOREIGN KEY ("procId") REFERENCES "Procedures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
