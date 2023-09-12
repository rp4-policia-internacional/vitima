-- CreateTable
CREATE TABLE "Vitima" (
    "id" TEXT NOT NULL,
    "paisDeOrigem" VARCHAR NOT NULL,
    "nomeCompleto" VARCHAR NOT NULL,
    "nacionalidade" VARCHAR NOT NULL,
    "altura" INTEGER NOT NULL,
    "genero" VARCHAR NOT NULL,
    "idade" INTEGER NOT NULL,
    "autorDoCrime" VARCHAR NOT NULL,
    "PaisVistoPorUltimo" VARCHAR NOT NULL,
    "statusDaVitima" VARCHAR NOT NULL,

    CONSTRAINT "Vitima_pkey" PRIMARY KEY ("id")
);
