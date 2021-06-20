#!/bin/bash
cd $(dirname "${BASH_SOURCE[0]}");
path=$PWD

darwin=false;
case "`uname`" in
	Darwin*) darwin=true ;;
esac

create_run_bot () {
    number=$1
    ((number2=$number+3000))
    if $darwin; then
        echo darwin
        osascript -e 'tell app "Terminal" to do script "cd '$path';
            cp -rf bot_node bot_node'$number';
            cd bot_node'$number';
            perl -i -pe "s/PORT=3001/PORT='$number2'/g" .env;
            node index.js;
        "'
    else
        echo linux
        /usr/bin/gnome-terminal -- bash -c "cp -rf bot_node bot_node'$number';
            cd bot_node$number; 
            sed -i 's/PORT=3001/PORT='$number2'/g' .env;
            node index.js;
        "
    fi
}

if [[ -z $1 ]];then
    BOTNUM=3
else
    BOTNUM=$1
fi
echo bot number that will be turned on $BOTNUM

for BOT_NUMBER in $(seq 1 $BOTNUM); do 
    create_run_bot $BOT_NUMBER
done