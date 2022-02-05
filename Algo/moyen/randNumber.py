import random

nombre = random.randint(0, 20)

"""[Table Multiplication]
"""
# for i in range(11):
#     print(f"{nombre} * {i} = {nombre*i}")


print(nombre)

divide = [i for i in  range(1, nombre+1)  if nombre % i == 0]
print(divide)
