from itertools import count


tab = ["james", "james", "john"]

tab2 = {i:tab.count(i) for i in tab}
# for i in tab:
#     tab2[i] = tab.count(i)
    

print(tab2)
    

