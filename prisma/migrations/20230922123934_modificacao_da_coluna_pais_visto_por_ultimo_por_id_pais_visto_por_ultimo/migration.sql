/*
  Warnings:

  - You are about to drop the column `paisVistoPorUltimo` on the `Vitima` table. All the data in the column will be lost.
  - Added the required column `id_paisVistoPorUltimo` to the `Vitima` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vitima" DROP COLUMN "paisVistoPorUltimo",
ADD COLUMN     "id_paisVistoPorUltimo" VARCHAR NOT NULL;
