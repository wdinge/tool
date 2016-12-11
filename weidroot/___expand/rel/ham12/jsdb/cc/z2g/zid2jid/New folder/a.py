#! /usr/bin/env python
# yum install MySQL-python
import sys
import os
import MySQLdb as mdb
#!/usr/bin/python
# -*- coding: utf-8 -*-

import _mysql
import sys


con = None

try:

    con = _mysql.connect('localhost', 'root', 
        'rootpass', 'Jiaguwen')
        
    con.query("SELECT VERSION()")
    result = con.use_result()
    
    print "MySQL version: %s" % \
        result.fetch_row()[0]
    
except _mysql.Error, e:
  
    print "Error %d: %s" % (e.args[0], e.args[1])
    sys.exit(1)

finally:
    
    if con:
        con.close()


con = mdb.connect('localhost', 'root', 'rootpass', 'Jiaguwen')

sql="SELECT * FROM Jiaguwen"
print sql
ret=raw_input("sql=")
if len(ret)>0: sql = ret

with con: 

    cur = con.cursor(mdb.cursors.DictCursor)
    cur.execute(sql)

    rows = cur.fetchall()

    for row in rows:
        print row["jid"], row["zid"]

    z2j ={}
    for row in rows:
	zid = row["zid"]
	if None == zid : zid=0
	key="_%d" % zid 
        if key in z2j.keys(): pass
        else: z2j[key]=[]
        z2j[key].append(row["jid"])
            
        print key 

    ####################
    pf=open("zid2jid.js", "w")
    pf.write("//ziid 2 jiaguwen\n")
    pf.write("var Z=new Object();\n")
    keylist = z2j.keys()
    keylist.sort()
    i=0
    for k in keylist :
        i+=1
        line="Z.%s=\"" % k
        for item in z2j[k]:
            line+= "%d,"%item
        line+="\";"
        print i, line
        pf.write(line+"\n")
    pf.write("//total=%d\n"%i)
            





