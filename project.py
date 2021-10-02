import itertools
from itertools import combinations, chain

class Table:
    def __init__(self, T , C , N , O, atts={} ):
        self.fields=atts.copy()
        self.tuples     = int(T)
        self.cost       = int(C)
        self.name       = N
        self.order      = O

tables={}

###########################################################################

def join(table1 , table2):

    if table1.order < table2.order:
        print("ERROR!!!")
        print( " it is not left deep join!")
        exit() 

    common=int(0)
    common_attr=[]
    for i in table1.fields.keys():
        for j in table2.fields.keys():
            if i==j:
                common+=1
                common_attr.append(i)

    if table1.order + table2.order <3:
        i2=0
    else:
        i2=  table1.tuples + table1.cost
    i3="( " + table1.name+" * " + table2.name + " )"          # ( A * B )       # ⨝
    i4= table1.order + table2.order
    i5={}
    if common==0 :
        i1= table1.tuples * table2.tuples
        i5=table1.fields.copy()
        i5.update(table2.fields)
    elif common==1:
        i1= (table1.tuples * table2.tuples) / max ( table1.fields[common_attr[0]] , table2.fields[common_attr[0]]  )
        i5=table1.fields.copy()
        i5.update(table2.fields)
        i5[common_attr[0]] = max ( table1.fields[common_attr[0]] , table2.fields[common_attr[0]] )
    elif common==2:
        i1= (table1.tuples * table2.tuples) / max ( table1.fields[common_attr[0]] , table2.fields[common_attr[0]]  )
        i1= i1 / max ( table1.fields[common_attr[1]] , table2.fields[common_attr[1]]  ) #edame
        i5=table1.fields.copy()
        i5.update(table2.fields)            # do we need?
        i5[common_attr[0]] = max ( table1.fields[common_attr[0]] , table2.fields[common_attr[0]] )
        i5[common_attr[1]] = max ( table1.fields[common_attr[1]] , table2.fields[common_attr[1]] )
    else:
        print("ERROR!!!")
        exit()
    result = Table ( i1 , i2 , i3 , i4 , i5)

    return result

##########################################################################

flag=bool(1)
while flag:
    f = open('myfile.txt','r')
    line = f.readline()
    num_of_tables=int(line.split("=",1)[1])
    if num_of_tables <6 and num_of_tables >1 :
        flag=0
    else:
        print("ERROR!!!")
        print("Number of tables you entered:",num_of_tables)
        print("it must be between 1 and 6")
        print("please edit the file and try again later")
        exit()

#####################################################################                   

table_names=[] 
fields={}
for i in range (num_of_tables ):
    line=f.readline()
    table_names.append(( (line.split(",")[0]).split("(")[1]) .strip()  )
    fields[ ( (line.split(",")[1]).split(")")[0]) .strip() ] = int( line.split("=",1)[1] )
    line=f.readline()
    fields[ ( (line.split(",")[1]).split(")")[0]) .strip() ] = int( line.split("=",1)[1] )
    line=f.readline()
    tables[table_names[i]]=Table( line.split("=",1)[1] , 0 , table_names[i] , 1 , fields )
    fields.clear()
f.close()

# print( "RESULT:")
# print( " NAME:  "   , join ( join ( tables["A"] , tables["B"]) , tables["C"] ).name   )
# print( " COST:  "   , join ( join ( tables["A"] , tables["B"]) , tables["C"] ).cost   )
# print( " TUPLES:"   , join ( join ( tables["A"] , tables["B"]) , tables["C"] ).tuples )
# print( " ORDER: "   , join ( join ( tables["A"] , tables["B"]) , tables["C"] ).order  )
# print( " FIELDS:"   , join ( join ( tables["A"] , tables["B"]) , tables["C"] ).fields )
# print(tables)

##########################################################################

table_names_string = ""
print_temp=""
for x in table_names:
    table_names_string += x 
#print (table_names_string)
pre_final=[]
for i in range (2 , num_of_tables +1 ):
    for j in combinations( table_names_string , i ):
        #print (j)
        j_list=list(j) 
        pre_final.clear()
        for k in j_list:
            idx=j_list.index(k)
            j_list_without_k = j_list
            j_list_without_k.remove(k)
            temp=""
            for tmp in j_list_without_k: 
                temp += tmp + ","
            temp = temp[:len(temp)-1]
            #print (temp)
            #print (k)
            j_list_without_k.insert( idx ,k )
            if i==2:
                pre_final.append (  join(tables[k] , tables[temp])  ) 
            else:
                pre_final.append (  join(tables[temp] , tables[k])  )
        name =temp + "," + k
        pre_final_costs=[]
        for z in pre_final:
            pre_final_costs.append(z.cost)
        ind = pre_final_costs.index( min ( pre_final_costs ) )
        print_temp = pre_final[ ind ].name
        tables[ name ] = pre_final[ ind ]

#print (tables["R,S,T,U,W"].cost )
#print ( len ( tables))
#print(table_names)

# for key in tables.keys():
#     print("\n")
#     print(key + ":")
#     print(tables[key].fields)
#     print(tables[key].tuples)
#     print(tables[key].cost)
#     print(tables[key].name)
#     print(tables[key].order)


##########################################################################

reading_file = open ( "files/variable_in.txt" , 'r')
output_buffer=""
input_line=reading_file.readline()
output_buffer += input_line.split("=" , 1) [0] + "= " +str(num_of_tables)+  ";" + "\n"

if num_of_tables==2:
    name = print_temp[2]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[6]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    reading_file.readline();
    reading_file.readline();
    reading_file.readline();
if num_of_tables==3:
    name = print_temp[4]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[8]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[14]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    reading_file.readline();
    reading_file.readline();
if num_of_tables==4:
    name = print_temp[6]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[10]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[16]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[22]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    reading_file.readline();
if num_of_tables==5:
    name = print_temp[8]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[12]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[18]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[24]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"
    name = print_temp[30]
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + name +"'" +  ";" + "\n"

for key in tables.keys():
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'[" + key +"]'" +  ";" + "\n"
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + str(tables[key].tuples) +"'" +  ";" + "\n"
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + str(tables[key].cost) +"'" +  ";" + "\n"
    input_line=reading_file.readline()
    output_buffer += input_line.split("=" , 1) [0] + "= " + "'" + str(tables[key].name) +"'" +  ";" + "\n"
    
reading_file.close()

writing_file=open("files/variable.txt" ,'w')
writing_file.write(output_buffer)

writing_file.close()
