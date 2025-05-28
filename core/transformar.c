#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "transformaciones.h"

int main(int argc, char *argv[])
{
    if (argc < 2) {
        fprintf(stderr, "Uso: transformar tipo args...\n");
        return 1;
    }

    const char *tipo = argv[1];

    if (strcmp(tipo, "traslacion") == 0 && argc == 6) {
        float x = atof(argv[2]);
        float y = atof(argv[3]);
        float dx = atof(argv[4]);
        float dy = atof(argv[5]);
        traslacion(x, y, dx, dy);
    } else if (strcmp(tipo, "rotacion") == 0 && argc == 5) {
        float x = atof(argv[2]);
        float y = atof(argv[3]);
        float angulo = atof(argv[4]);
        rotacion(x, y, angulo);
    } else if (strcmp(tipo, "escalamiento") == 0 && argc == 6) {
        float x = atof(argv[2]);
        float y = atof(argv[3]);
        float sx = atof(argv[4]);
        float sy = atof(argv[5]);
        escalamiento(x, y, sx, sy);
    } else if (strcmp(tipo, "shear") == 0 && argc == 6) {
        float x = atof(argv[2]);
        float y = atof(argv[3]);
        float shx = atof(argv[4]);
        float shy = atof(argv[5]);
        shear(x, y, shx, shy);
    } else {
        fprintf(stderr, "Parámetros incorrectos.\n");
        return 1;
    }

    return 0;
}
