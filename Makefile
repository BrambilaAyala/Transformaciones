# Makefile
CC = gcc
CFLAGS = -Wall -lm

all: transformar

transformar: transformar.o transformaciones.o
	$(CC) -o transformar transformar.o transformaciones.o $(CFLAGS)

transformar.o: transformar.c transformaciones.h
	$(CC) -c transformar.c

transformaciones.o: transformaciones.c transformaciones.h
	$(CC) -c transformaciones.c

clean:
	rm -f *.o transformar

