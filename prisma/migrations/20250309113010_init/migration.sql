/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('STUDENT', 'FACULTY', 'HOD');

-- CreateEnum
CREATE TYPE "PERMISSION_TYPE" AS ENUM ('LEAVE', 'ATTENDANCE');

-- CreateEnum
CREATE TYPE "PERMISSION_HOLDER" AS ENUM ('GROUP', 'INDIVIDUAL');

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "reg_number" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "role" "USER_ROLE" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendance_percentage" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "type" "PERMISSION_TYPE" NOT NULL,
    "holder" "PERMISSION_HOLDER" NOT NULL,
    "attachments" TEXT,
    "from_date" TIMESTAMP(3) NOT NULL,
    "to_date" TIMESTAMP(3) NOT NULL,
    "is_approved" BOOLEAN NOT NULL DEFAULT false,
    "applicant_role" "USER_ROLE" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions_on_users" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,
    "approved_by_faculty" BOOLEAN NOT NULL DEFAULT false,
    "approved_by_hod" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "permissions_on_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_reg_number_key" ON "users"("reg_number");

-- AddForeignKey
ALTER TABLE "permissions_on_users" ADD CONSTRAINT "permissions_on_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions_on_users" ADD CONSTRAINT "permissions_on_users_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
