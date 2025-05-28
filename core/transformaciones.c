#include "transformaciones.h"
#include <stdio.h>
#include <math.h>

void traslacion(float x, float y, float dx, float dy)
{
    printf("%.2f %.2f\n", x + dx, y + dy);
}
void rotacion(float x, float y, float angulo_grados)
{
    float angulo_rad = angulo_grados * M_PI / 180.0;
    float x_rot = x * cos(angulo_rad) - y * sin(angulo_rad);
    float y_rot = x * sin(angulo_rad) + y * cos(angulo_rad);
    printf("%.2f %.2f\n", x_rot, y_rot);
}
void escalamiento(float x, float y, float sx, float sy)
{
    printf("%.2f %.2f\n", x * sx, y * sy);
}
void shear(float x, float y, float shx, float shy)
{
    float x_shear = x + shx * y;
    float y_shear = y + shy * x;
    printf("%.2f %.2f\n", x_shear, y_shear);
}
