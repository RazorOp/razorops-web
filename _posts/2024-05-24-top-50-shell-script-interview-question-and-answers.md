---
title: Top 50 Shell Script Interview Question and Answers
description: A shell script is a program written for the shell, or command line
  interpreter, of an operating system.
image: /images/blog/top-50-shell-script-interview-question-and-answers.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: Shell Script
date: 2024-06-07T05:09:00.000Z
---
**Top 50 Shell Script Interview Question and Answers**

**1.  What is a shell script?**
    

A shell script is a program written for the shell, or command line interpreter, of an operating system. It consists of a series of commands to be executed by the shell.

**2.  How do you execute a shell script?**
    

You can execute a shell script by making it executable with chmod +x scriptname.sh and then running it with ./scriptname.sh.

**3.  What is the default shell in Linux?**
    

The default shell in most Linux distributions is Bash (Bourne Again Shell).

**4.  How do you create a variable in a shell script?**
    

Variables are created by assigning values using the = operator, e.g., VAR=value.

**5.  How do you read user input in a shell script?**
    

You can read user input using the read command, e.g., read input.

**6.  How do you create a function in a shell script?**
    

Functions are defined using the syntax:

function_name() {

commands

}

comma

**7.  What are positional parameters in a shell script?**
    

Positional parameters are used to pass arguments to a script and are accessed using $1, $2, etc.

**8.  How do you check if a file exists in a shell script?**
    

Use the -e option with an if statement, e.g., [ -e filename ].

**9.  How do you compare two numbers in a shell script?**
    

Use the -eq, -ne, -lt, -le, -gt, and -ge operators, e.g., [ $a -eq $b ].

**10.  What is the purpose of #!/bin/bash at the beginning of a script?**
    

This is a shebang line that tells the system which interpreter to use to execute the script.

**11.  How do you make a script executable?**
    

Use the chmod +x scriptname.sh command.

**12.  How do you create an infinite loop in a shell script?**
    

Use while true; do commands; done.

**13.  How do you write comments in a shell script?**
    

Use the # symbol to write comments.

**14.  What does the echo command do?**
    

echo is used to display a message or the value of a variable.

**15.  How do you check if a directory exists in a shell script?**
    

Use the -d option, e.g., [ -d dirname ].

**16.  How do you append output to a file in a shell script?**
    

Use the >> operator, e.g., echo "text" >> file.txt.

**17.  How do you redirect stderr to a file in a shell script?**
    

Use 2>, e.g., command 2> errorfile.

**18.  What is the difference between == and = in shell scripting?**
    

= is used for assignment, while == is used for comparison in test commands.

**19.  How do you perform arithmetic operations in a shell script?**
    

Use $(()), e.g., result=$((a + b)).

**20.  What is the use of the set command?**
    

set is used to set or unset shell options and positional parameters.

**21.  How do you exit a script and return a value to the caller?**
    

Use the exit command followed by a number, e.g., exit 0.

**22.  What are shell script's special variables?**
    

$0 (script name), $# (number of arguments), $@ (all arguments), $? (exit status of last command).

**23.  How do you declare an array in a shell script?**
    

Use array=(element1 element2 element3).

**24.  How do you access array elements in a shell script?**
    

Use ${array[index]}.

**25.  What is the IFS variable?**
    

IFS (Internal Field Separator) defines the character used for word splitting.

**26.  How do you execute a command and store its output in a variable?**
    

Use backticks or $(command), e.g., output=$(ls).

**27.  What is the purpose of the trap command?**
    

trap is used to catch signals and execute commands when the signal is received.

**28.  How do you use a for loop in a shell script?**
    

Syntax:

for var in list; do

commands

done

  

comman

**29.  How do you use a case statement in a shell script?**
    

Syntax:

case $variable in

pattern1)

commands ;;

pattern2)

commands ;;

esac

**30.  What is the difference between > and >>?**
    

> overwrites a file, while >> appends to a file.

**31.  How do you check the exit status of a command?**
    

Use $? to get the exit status of the last command executed.

**32.  What is the use of the exec command?**
    

exec replaces the current shell with a specified command.

**33.  How do you use the find command in a shell script?**
    

Example: find /path -name filename.

**34.  How do you pass arguments to a shell script?**
    

Arguments are passed as positional parameters, accessed using $1, $2, etc.

**35.  What is a here document?**
    

A here document allows you to redirect multiple lines of input into a command, using the << delimiter.

**36.  How do you handle errors in a shell script?**
    

Check the exit status of commands and use conditional statements to handle errors.

**37.  What is the use of the sleep command?**
    

sleep pauses the execution for a specified amount of time.

**38.  How do you find the length of a string in a shell script?**
    

Use ${#string}.

**39.  How do you substring a string in a shell script?**
    

Use ${string:position:length}.

**40.  How do you replace a substring in a string in a shell script?**
    

Use ${string//search/replace}.

**41.  How do you check if a string is empty in a shell script?**
    

Use [ -z "$string" ].

**42.  How do you concatenate strings in a shell script?**
    

Use string1=$string1$string2.

**43.  What is the use of the basename command?**
    

basename removes the directory part of a path and returns the filename.

**44.  How do you check if a command exists in a shell script?**
    

Use command -v commandname or which commandname.

45.  What is the cut command used for?
    

cut is used to remove sections from each line of files.

**46.  How do you use the awk command in a shell script?**
    

awk is a pattern scanning and processing language. Example: awk '{print $1}' file.

**47.  How do you use the sed command in a shell script?**
    

sed is a stream editor. Example: sed 's/old/new/' file.

**48.  How do you use the grep command in a shell script?**
    

grep searches for patterns in files. Example: grep "pattern" file.

**49.  What is a pipeline in shell scripting?**
    

A pipeline is a series of commands connected by | where the output of one command serves as input to the next.

**50.  How do you use logical AND and OR in shell scripting?**
    

Use && for logical AND and || for logical OR. Example: command1 && command2 (command2 runs only if command1 succeeds).
