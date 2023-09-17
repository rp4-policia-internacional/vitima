-- CreateTable
CREATE TABLE "Vitima" (
    "id" TEXT NOT NULL,
    "id_paisDeOrigem" VARCHAR NOT NULL,
    "id_autorDoCrime" VARCHAR NOT NULL,
    "nomeCompleto" VARCHAR NOT NULL,
    "nacionalidade" VARCHAR NOT NULL,
    "altura" DECIMAL NOT NULL,
    "genero" VARCHAR NOT NULL,
    "idade" INTEGER NOT NULL,
    "paisVistoPorUltimo" VARCHAR NOT NULL,
    "statusDaVitima" VARCHAR NOT NULL,
    "foto" VARCHAR NOT NULL,

    CONSTRAINT "Vitima_pkey" PRIMARY KEY ("id")
);
