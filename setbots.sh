#!/bin/bash
cd $(dirname "${BASH_SOURCE[0]}");
path=$PWD

darwin=false;
case "`uname`" in
	Darwin*) darwin=true ;;
esac

if $darwin; then
	sedi="perl -i -pe";
else
	sedi="sed -i";
fi

openTerminal () {
    stringcommand=$1
    echo "entered here" 
    echo COMMAND:$stringcommand
    if $darwin; then
        osascript -e 'tell app "Terminal" to do script "cd '$path' &&
            '$stringcommand'
        "'
    else
        gnome-terminal -- bash -c "$stringcommand"
    fi
}


if [[ -z $1 ]];then
    BOTNUM=3
else
    BOTNUM=$1
fi
echo bot number that will be turned on $BOTNUM

for BOT_NUMBER in $(seq 1 $BOTNUM); do 
    openTerminal "echo this is the botnumber $BOT_NUMBER"
done