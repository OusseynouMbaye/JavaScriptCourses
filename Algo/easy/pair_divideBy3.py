nbre = -1
attemps= 0
while nbre % 2 != 0 or nbre % 3 != 0:
    attemps +=1
    if attemps> 1:
        print(f"Esai numero:{attemps} ")

    nbre = int(input("Saisir un nbre pair et divisible par 3 : "))
    if not nbre % 2 == 0:
        print("nbre n'est par pair")

    if not nbre % 3 == 0:
        print("nbre pas divisible par 3")

print(f"Le nombre {nbre} saisi est divisible par 2 et par 3")

