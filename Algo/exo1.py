def trouverLePusLong(my_str):
    words = my_str.split()
    longMax = 0
    for word in words:
        if len(word) > longMax:
            longMax = len(word)

    return longMax


print(trouverLePusLong("Il faudrait apprendre plus que les autres"))