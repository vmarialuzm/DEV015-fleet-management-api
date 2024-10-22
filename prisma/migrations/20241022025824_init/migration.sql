-- CreateTable
CREATE TABLE "Trajectories" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "taxiId" INTEGER NOT NULL,

    CONSTRAINT "Trajectories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taxis" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,

    CONSTRAINT "Taxis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trajectories" ADD CONSTRAINT "Trajectories_taxiId_fkey" FOREIGN KEY ("taxiId") REFERENCES "Taxis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
