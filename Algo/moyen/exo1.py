def trouverLePusLong(my_str):
    """function find the long word

    Args:
        my_str ([str]): [la phrase a analyse]

    Returns:
        [str]: [le mot le plus long ]
    """
    words = my_str.split()
    longMax = 0
    for word in words:
        if len(word) > longMax:
            longMax = len(word)

    return longMax


print(trouverLePusLong("Il faudrait apprendre plus que les autres"))