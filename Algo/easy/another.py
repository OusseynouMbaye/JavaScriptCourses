l = [1,2,'a','b']

test = [i for i in l if isinstance(i,int)]

# print(test)
# for i in l:
#     if isinstance(i,int):
#         print(i)
sheep = [True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]

seep = len([i for i in sheep if i ==True])
print(seep)