print("Greetings, What would you like to do ?\n - Create a new user ID (1) \n - Change a Password (2) \n - Display All User IDs(3)\n - Quit (4)")

    
decision = str(input("")) 
upletter = False
downletter = False
ifdigit = False
ifalnum = True
choosing = True 

if decision == "1":
    
    print("Enter user ID name")
    id_name = str(input(""))
    print("Enter a password")
    print("Password MUST include\nAt Least 8 character\nIt should include upper/lowercase\nit should include numbers\nShould include at least one special character")
    id_password = input("")
    
    while choosing == True:
        
        for c in id_password:
            if c in ["!","?"]: #checks if alphanumerics are present
                ifalnum = True
            
            elif c.isdigit(): # checks if digits are present
                ifdigit = True
            
            elif c.upper() in id_password: # checks if upper case letters are present
                upletter = True

            elif c.lower() in id_password: # checks if lower case letters are present
                downletter = True
             
            
           
            
        fullcheck = (upletter,downletter,ifdigit,ifalnum)
        
        if all(fullcheck) == True:
            choosing = False
            print("test")
            passwords = open("Passwords.csv","a")
            passwords.write(f'{id_name} {id_password}\n')
            passwords.close()
        
if decision == "2":
    print("Enter user ID")
    
elif decision == "3":
    print("test")
    passwords = open("Passwords.csv","r")
    for line in passwords:
        print(line)
        
        
