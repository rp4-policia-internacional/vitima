-- CreateTable
CREATE TABLE "Vitima" (
    "_id" TEXT NOT NULL,
    "paisDeOrigem" VARCHAR NOT NULL,
    "nomeCompleto" VARCHAR NOT NULL,
    "nacionalidade" VARCHAR NOT NULL,
    "altura" INTEGER NOT NULL,
    "genero" VARCHAR NOT NULL,
    "idade" INTEGER NOT NULL,
    "autorDoCrime" VARCHAR NOT NULL,
    "PaisVistoPorUltimo" VARCHAR NOT NULL,
    "statusDaVitima" VARCHAR NOT NULL,

    CONSTRAINT "Vitima_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Foto" (
    "id" TEXT NOT NULL,
    "foto" BYTEA NOT NULL,
    "vitimaId" TEXT NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Foto_vitimaId_key" ON "Foto"("vitimaId");

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_vitimaId_fkey" FOREIGN KEY ("vitimaId") REFERENCES "Vitima"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
